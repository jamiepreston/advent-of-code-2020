import {checkAllPassports} from "./passport-checker-v1";
import {checkAllPassports as checkAllPassportsV2} from "./passport-checker-v2";
import passports from "./data";

const result = checkAllPassports(passports);
console.log(`${result} passports valid (V1)`);

const result2 = checkAllPassportsV2(passports);
console.log(`${result2} passports valid (V2)`);
