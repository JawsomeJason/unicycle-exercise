import { mergeWith } from "../mergeWith";

describe("mergeWith", () => {
  it("should merge all items by default", () => {
    expect(
      mergeWith([{ foo: "bar" }, { free: "beer" }, { fizz: "bin" }])
    ).toEqual([{ foo: "bar", free: "beer", fizz: "bin" }]);
  });
});
