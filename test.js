const test1 = (name) => {
    return "haha " + name;
}
const func1 = function(num1, num2) {
    return num1 + num2;
}
const func2 = function(num1, num2, num3) {
    var x = func1(num1, num2);
    return x * num3;
}

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
