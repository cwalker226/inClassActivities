const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should reverse given string", () => {
      const obj = new Algo();
      const str1 = "Hello World";
      expect(obj.reverse(str1)).toEqual("dlroW olleH");
    })
  });

  describe("isPalindrome", () => {
    it("should return true if it is a palindrome", () => {
      const str = "level";
      const obj = new Algo();
      const result = obj.isPalindrome(str);
      expect(result).toBeTruthy();
    })
  });

  describe("capitalize", () => {
    it("should take a string and return capitalized", () => {
      const str1 = "hello world";
      const obj = new Algo();
      const result = obj.capitalize(str1);
      expect(result).toBeTruthy();
    })
  });
});
