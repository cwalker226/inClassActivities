const Child = require("../child");

describe("Child", () => {
  it("should create an object with the name and age we pass", () => {
      const obj = new Child("foo", 4);
      expect(obj.name).toEqual("foo");
      expect(obj.age).toEqual(4);
  })

  it("should throw an error if name is empty", () => {
      const callback = () => new Child("", 5);
      expect(callback).toThrow();
  })

  it("should throw an error if no age provided", () => {
      const callback = () => new Child("foo");
      const err = new Error("Expected parameter 'age' to be a non-negative number");
      expect(callback).toThrowError(err);
  })
});
