import { readFileSync } from "./readFileSync";

jest.mock("fs", () => ({
  readFileSync: jest.fn((path: string) => {
    if (path === "existingPath") return "file content";
    throw new Error("ENOENT: no such file or directory, open '" + path + "'");
  }),
}));

describe("readFileSync", () => {
  it("파일이 존재하는 경우 파일의 내용을 반환해야 합니다.", () => {
    const result = readFileSync("existingPath")();

    expect(result).toStrictEqual({ _tag: "Right", right: "file content" });
  });

  it("파일이 존재하지 않는 경우 에러를 반환해야 합니다.", () => {
    const result = readFileSync("nonExistingPath")();

    expect(result).toStrictEqual({
      _tag: "Left",
      left: new Error(
        "Error: ENOENT: no such file or directory, open 'nonExistingPath'"
      ),
    });
  });
});
