import {
  getSquare,
  calculateTrajectory
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
      it('should calculate the number of trees encountered', () => {
        const result = calculateTrajectory({
          map,
        });
        expect(result).toEqual(7);
      })
    })
  })
})