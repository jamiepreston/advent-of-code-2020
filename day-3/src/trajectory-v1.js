export const getSquare = ({
  map,
  position
}) => {
  const [x,y] = position;
  const mapArray = map
    .split('\n');
  if (mapArray.length <= y) { return undefined; }

  const row = mapArray[y];
  const fullRow = row.length < x
    ? Array(x).fill(row).join('')
    : row;
  
  return fullRow[x];
}

export const calculateTrajectory = ({
  map,
  currentPosition = [0,0],
  numTrees = 0,
}) => {
  const [x,y] = currentPosition;
  const nextPosition = [x + 3, y + 1];
  const nextSquare = getSquare({
    map,
    position: nextPosition,
  });
  const hitTree = nextSquare === '#';
  return nextSquare === undefined
    ? numTrees
    : calculateTrajectory({
      map,
      currentPosition: nextPosition,
      numTrees: hitTree ? numTrees + 1 : numTrees,
    });
};
