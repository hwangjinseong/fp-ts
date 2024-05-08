import { read } from "./read";

describe("read", () => {
  it("read 함수를 실행하면 Promise를 반환해야 합니다.", () => {
    jest.mock("readline", () => ({
      createInterface: jest.fn(() => ({
        question: jest.fn((_, callback) => {
          callback("answer");
        }),
        close: jest.fn(),
      })),
    }));

    const result = read();

    expect(result).resolves.toBe("answer");
  });
});
