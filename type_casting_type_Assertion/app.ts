// Type Assertion Tells TypeScript the type no code changes
let someValue: unknown = "Hello World";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

// while Type Conversion Actually changes data at runtime (e.g., "123" to 123)
let y = Number("123");