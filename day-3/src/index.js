import data from "./data";
import { calculateTrajectory } from './trajectory-v1';

const response = calculateTrajectory({
  map: data,
});
console.log(`${response} Trees bumped into`);
