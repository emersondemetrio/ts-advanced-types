import { GenericObject } from "./types.ts";

export const isAFunction = (e: unknown) => e && typeof e === "function";

const mockData: GenericObject = {
  name: "John Doe",
  age: 30,
  email: "john@doe.com"
};

export const mockRequest: (timeOut?: number) => Promise<GenericObject> = (timeOut = 3000) => {
  const shouldFail = Math.random() > 0.5;

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if (shouldFail) {
        return reject("Something went wrong!");
      }

      resolve(mockData);
    }, timeOut);
  });
};

export const prettyPrint = (data: GenericObject | GenericObject[]) =>
  JSON.stringify(data, null, 4);
