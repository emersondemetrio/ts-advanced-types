import { prettyPrint } from './helpers/helpers.ts';
import { GenericObject } from './helpers/types.ts';

// Maximum value for String.prototype.repeat
const MAX_REPEAT = 268_435_455;

// Replicates an object N times by converting it to a string and repeating it.
// Notice: String.prototype.repeat has a limit of 268435455
// Thrown if count is negative or if count overflows maximum string length.
const replicate = (data: GenericObject, times: number): GenericObject[] => {
  if (times < 1 || times > MAX_REPEAT) {
    console.warn("replicate(): Invalid number provided. It should be between 1 and", MAX_REPEAT);
    return [];
  }

  const tempStr = JSON
    .stringify(data)  // {a: 1} -> "{a: 1}"
    .concat(",")      // Adds a comma at the end "{a: 1}" -> "{a: 1},"
    .repeat(times)    // Repeat the string N times "{a: 1}, {a: 1}, {a: 1}, ..."
    .slice(0, -1);    // Remove the last comma "{a: 1}, {a: 1}, {a: 1}, ..." -> "{a: 1}, {a: 1}, {a: 1}"

  return JSON.parse(`[${tempStr}]`); // "{a: 1}, {a: 1}, {a: 1}" -> [{a: 1}, {a: 1}, {a: 1}]
};

const data: GenericObject = {
  n: 10,
  prop1: "My Name",
  prop2: "My Other Name"
};

console.log('Original', prettyPrint(data));

const result = replicate(data, 10);

console.log('\n----\n');

console.log('Result', prettyPrint(result));
