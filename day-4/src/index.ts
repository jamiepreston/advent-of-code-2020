import {checkAllPassports} from "./passport-checker";
import passports from "./data";

const result = checkAllPassports(passports);
console.log(`${result} passports valid`);
