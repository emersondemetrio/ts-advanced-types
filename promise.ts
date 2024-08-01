import { isAFunction, mockRequest } from "./helpers/helpers.ts";
import { GenericObject } from "./helpers/types.ts";

export type PromiseResult<R> = [
  data: R | null,
  error: unknown
];

// This function will execute a promise and return the result
// as a tuple with the data and the error.
// If the promise is rejected, the error will be returned.
// If the promise is resolved, the data will be returned.
// Finally, if a finallyFn is provided, it will be executed.
// The finallyFn should be a function.
export const executePromise = async <R>(
  promiseFn: () => Promise<R>,
  finallyFn?: () => void
): Promise<PromiseResult<R>> => {
  try {
    const data = await promiseFn();

    return [data, null];
  } catch (error) {
    return [null, error];
  } finally {
    if (finallyFn && isAFunction(finallyFn)) {
      finallyFn();
    }
  }
};


const run = async () => {
  const finallyFn = () => {
    console.log(`Finally function executed!`);
  }

  const [result, error] = await executePromise<GenericObject>(mockRequest, finallyFn);

  if (error) {
    console.log(`Something went wrong:`, error);
    return;
  }

  console.log(`Result:`, result);
};

run();
