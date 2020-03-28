const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  it("should assign default values to an object", () => {
      const obj = new DayCare();
      expect(obj.children).toEqual([]);
      expect(obj.capacity).toEqual(3);
      expect(obj.ageLimit).toEqual(6);
  })

  it("should add a child when you call addChild", () => {
      const obj = new DayCare();
      const childObj = new Child("baaz", 5);
      obj.addChild(childObj);
      expect(obj.children.length).toEqual(1);
  })
});
