import data from "./data";
import {checkAllPasswords} from './password-checker-v1';
import {checkAllPasswords as checkAllPasswordsV2} from './password-checker-v2';

const validPasswords = checkAllPasswords(data);
console.log(`${validPasswords} Valid Passwords (V1)`);
const validPasswords2 = checkAllPasswordsV2(data);
console.log(`${validPasswords2} Valid Passwords (V2)`);
