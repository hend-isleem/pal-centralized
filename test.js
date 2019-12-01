const { test1, func2 } = require("unit.js");

describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});

test("return haha <name>", () => {
  var t = test1("really? -_-");
  expect(t).toBe("haha really? -_-");
});

test("return num1+num2  * num3", () => {
    var result = func2(1, 1, 2);
    expect(result).toBe(4);
});
