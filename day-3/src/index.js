import data from "./data";
import {
  calculateTrajectory,
  multiplyResults,
} from './trajectory-v1';

const trajectories = [
  [1,1],
  [3,1],
  [5,1],
  [7,1],
  [1,2],
];

const response1 = calculateTrajectory({
  map: data,
});
console.log(`${response1} Trees bumped into`);

const response2 = multiplyResults({
  map: data,
  trajectories,
})
console.log(`${response2} Puzzle Output`);
