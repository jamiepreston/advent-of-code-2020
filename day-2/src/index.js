import data from "./data";
import {checkAllPasswords} from './password-checker';

const validPasswords = checkAllPasswords(data);
console.log(`${validPasswords} Valid Passwords`);