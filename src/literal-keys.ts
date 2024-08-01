type MyEvent = {
  remove: string;
  add: string;
  select: string
}

// All updates on MyEvent object will be prefixed with 'on' and will be
// automatically added to this type.
type On<T extends object> = {
  [Key in keyof T as Key extends string ? `on${Capitalize<Key>}` : never]: () => any
}

/*
Property 'onSelect' is missing in type '{ onAdd: () => void; onRemove: () => void; }' but required in type 'On<MyEvent>'.ts(2741)
⚠ Error (TS2741)  |
Property onSelect is missing in type
 but required in type
 .
const wrongCallbacks: On<MyEvent>
*/
// @ts-ignore
const wrongCallbacks: On<MyEvent> = {
  onAdd: () => { },
  onRemove: () => { }
}

console.log(Object.keys(wrongCallbacks)) // ["onAdd", "onRemove"]

const correctCallbacks: On<MyEvent> = {
  onAdd: () => { },
  onRemove: () => { },
  onSelect: () => { }
}

console.log(Object.keys(correctCallbacks)) // ["onAdd", "onRemove", "onSelect"]
