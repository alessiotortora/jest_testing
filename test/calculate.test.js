import { add, subtract, divide, multiply } from "../code/calculate";

test("add", () => {
  expect(add(2, 2)).toBe(4);
});

test("subtract", () => {
  expect(subtract(3, 2)).toBe(1);
});

test("divide", () => {
  expect(divide(4, 2)).toBe(2);
});

test("multiply", () => {
  expect(multiply(3, 3)).toBe(9);
});
