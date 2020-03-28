const FileIO = require("../fileIO");
const fs = require("fs");
const fileIO = new FileIO();
const file = "message.txt";

jest.mock("fs");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      fs.readFileSync.mockReturnValue("Hello World!");
      const data = fileIO.read(file);
      
      expect(data).toEqual("Hello World!");
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      const data = "Hello World!";
      fs.writeFileSync.mockReturnValue("It worked!");
      const result = fileIO.write(file, data);

      expect(result).toEqual("It worked!");
      expect(fs.writeFileSync).toHaveBeenCalled();
      expect(fs.writeFileSync).toHaveBeenCalledWith(file, data);
    });
  });
});
