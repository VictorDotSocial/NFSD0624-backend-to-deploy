describe("Basic Math Utility Functions", () => {
  test("sum of two numbers works correctly", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });

  test("isEven function identifies even and odd numbers", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(-2)).toBe(true);
  });
});

function sum(a, b) {
  return a + b;
}

function isEven(number) {
  return number % 2 === 0;
}

module.exports = { sum, isEven };
