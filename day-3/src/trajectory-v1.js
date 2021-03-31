export const getSquare = ({
  map,
  position
}) => {
  const [x,y] = position;
  const mapArray = map
    .split('\n');
  if (mapArray.length <= y) { return undefined; }

  const row = mapArray[y];
  const normalisedPosition = row.length <= x
    ? x % row.length
    : x;

  return row[normalisedPosition];
}

export const calculateTrajectory = ({
  map,
  right = 3,
  down = 1,
  currentPosition = [0,0],
  numTrees = 0,
}) => {
  const [x,y] = currentPosition;
  const nextPosition = [x + right, y + down];
  const nextSquare = getSquare({
    map,
    position: nextPosition,
  });

  const hitTree = nextSquare === '#';
  return nextSquare === undefined
    ? numTrees
    : calculateTrajectory({
      map,
      right,
      down,
      currentPosition: nextPosition,
      numTrees: hitTree ? numTrees + 1 : numTrees,
    });
};

export const multiplyResults = ({
  map,
  trajectories
}) => {
  const results = trajectories.map(([right, down]) =>
    calculateTrajectory({
      map,
      right,
      down,
    })
  );
  console.log(results);
  return results.reduce((acc, current) =>
    current !==0 ? (acc * current) : acc,
    1);
}

