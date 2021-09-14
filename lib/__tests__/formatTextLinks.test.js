import { formatTextLinks } from "../formatTextLinks";

describe("formatTextLinks", () => {
  it("should replace text urls with links", () => {
    expect(
      formatTextLinks([
        {
          type: "text",
          content: "Look at this cute kitty: placekitten.com/200/300",
        },
      ])
    ).toEqual([
      {
        type: "text",
        content: "Look at this cute kitty: ",
      },
      {
        type: "link",
        content: "placekitten.com/200/300",
        url: "http://placekitten.com/200/300",
      },
    ]);
  });
});
