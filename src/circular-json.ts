type JsonLike = {
  [key: string | number]:
  | string
  | number
  | undefined
  | null
  | JsonLike; // <- notice the recursion here
};

const getCircularReplacer = () => {
  const seen = new WeakSet();

  return (_, value: JsonLike) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }

      seen.add(value);
    }

    return value;
  };
};

const safeStringify = (data: JsonLike) => {
  return JSON.stringify(data, getCircularReplacer());
}

const example: JsonLike = {
  data1: 1,
};

example.data2 = example; // circular reference

console.log('Original JSON', example);

/**
 * {
 *    data1: 1,
 *    data2: { data1: 1, data2: ... }
 * }
 */

console.log(safeStringify(example));

/**
 * {
 *    "data1": 1
 * }
 */
