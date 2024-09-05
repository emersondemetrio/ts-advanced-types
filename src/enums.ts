const enum LabelVariant {
  "$primary" = "$primary",
  "$secondary" = "$secondary",
  "$tertiary" = "$tertiary"
}

// Use keyof to get the literal values of the enum
type LabelVariantValues = `${LabelVariant}`; // String literal type for enum values

const testLiteralEnumValues = (v: LabelVariantValues) => {
  console.log("Literal", v);
}

testLiteralEnumValues("$primary"); // works
testLiteralEnumValues(LabelVariant.$primary); // also works

