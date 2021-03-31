import {
  getSquare,
  calculateTrajectory,
  multiplyResults,
} from '../src/trajectory-v1';

describe('day-3/trajectory', () => {
  describe('#getSquare', () => {
    describe('Given a map of the terrain', () => {
      const map = `..##.......
#...#...#..
.#....#..#.`;
      describe('and coordinates which match a . within the map boundaries', () => {
        const position = [3,2];
        it('should return "."', () => {
          const result = getSquare({
            map,
            position,
          });
          expect(result).toEqual('.');
        })
      })
      describe('and coordinates which match a . to the right of the map boundaries', () => {
        const position = [14,1];
        it('should return "."', () => {
          const result = getSquare({
            map,
            position,
          });
          expect(result).toEqual('.');
        })
      })
    })
  })
  describe('#calculateTrajectory', () => {
    describe('Given a map of the terrain', () => {
      const map = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
      describe('And no right or left trajectories', () => {
        it('should calculate the number of trees encountered', () => {
          const result = calculateTrajectory({
            map,
          });
          expect(result).toEqual(7);
// .#..#...#.#.#..#...#.#.#..#...#.# (30 = ./#)
// #.##...#...#.##...#...#.##...#... (24 = ./#)
// ........#..###.......#.....###.
        })
      })
      describe('And a trajectory of right 1 down 1', () => {
        const right = 1;
        const down = 1;
        it('should calculate the number of trees encountered', () => {
          const result = calculateTrajectory({
            map,
            right,
            down,
          });
          expect(result).toEqual(2);
        })
      })
      describe('And a trajectory of right 1 down 1', () => {
        const right = 5;
        const down = 1;
        it('should calculate the number of trees encountered', () => {
          const result = calculateTrajectory({
            map,
            right,
            down,
          });
          expect(result).toEqual(3);
        })
      })
    })
  })
  describe('#multiplyResults', () => {
    describe('Given a map of the terrain', () => {
      const map = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
      describe('And an array of right/ down trajectories', () => {
        const trajectories = [
          [1,1],
          [3,1],
          [5,1],
          [7,1],
          [1,2],
        ];
        it('should multiply the number of trees encountered on each trajectory', () => {
          const result = multiplyResults({
            map,
            trajectories,
          });
          expect(result).toEqual(336);
        })
      })
    })
  })
})