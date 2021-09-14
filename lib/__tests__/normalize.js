import { normalize } from "../normalize";

describe("normalize", () => {
  it("should combine adjacent lists", () => {
    const ADJACENT_LISTS = [
      {
        type: "list",
        children: [{ type: "list-item", content: "list item A" }],
      },
      {
        type: "list",
        children: [{ type: "list-item", content: "list item B" }],
      },
    ];

    expect(normalize(ADJACENT_LISTS)).toEqual([
      {
        type: "list",
        children: [
          { type: "list-item", content: "list item A" },
          { type: "list-item", content: "list item B" },
        ],
      },
    ]);
  });

  it("should combine adjacent blockquotes", () => {
    const ADJACENT_LISTS = [
      {
        type: "blockquote",
        children: [
          {
            type: "paragraph",
            children: [{ type: "text", content: "Paragraph A" }],
          },
        ],
      },
      {
        type: "blockquote",
        children: [
          {
            type: "paragraph",
            children: [{ type: "text", content: "Paragraph B" }],
          },
        ],
      },
    ];

    expect(normalize(ADJACENT_LISTS)).toEqual([
      {
        type: "blockquote",
        children: [
          {
            type: "paragraph",
            children: [{ type: "text", content: "Paragraph A" }],
          },
          {
            type: "paragraph",
            children: [{ type: "text", content: "Paragraph B" }],
          },
        ],
      },
    ]);
  });

  it("should remove lists with no items in them", () => {
    expect(normalize([{ type: "list", children: [] }])).toEqual([]);
  });

  it("should remove links with no content (zero-width links)", () => {
    expect(
      normalize([{ type: "link", content: "", url: "http://www.yahoo.com" }])
    ).toEqual([]);
  });

  it("should turn URLs in text into links that go to that url", () => {
    expect(
      normalize([
        {
          type: "text",
          content:
            "Are you a cat person (placekitten.com/200/300) or a dog person (https://place-puppy.com/300x300)?",
        },
      ])
    ).toEqual([
      {
        type: "text",
        content: "Are you a cat person (",
      },
      {
        content: "placekitten.com/200/300",
        type: "link",
        url: "http://placekitten.com/200/300",
      },
      {
        content: ") or a dog person (",
        type: "text",
      },
      {
        content: "https://place-puppy.com/300x300",
        type: "link",
        url: "https://place-puppy.com/300x300",
      },
      { type: "text", content: ")?" },
    ]);
  });
});
