import { getHtml } from "../getHtml";

const INLINE_CONTENT = "text content";
const INLINE_ELEMENT = { type: "text", content: INLINE_CONTENT };
const BLOCK_ELEMENT = { type: "paragraph", children: [INLINE_ELEMENT] };
const BLOCK_CONTENT = `<p>${INLINE_CONTENT}</p>`;

describe("getHtml", () => {
  it("should format document nodes", () => {
    expect(getHtml({ type: "document", children: [BLOCK_ELEMENT] })).toEqual(
      `<article class="email">${BLOCK_CONTENT}</article>`
    );
  });

  it("should format paragraph nodes", () => {
    expect(getHtml({ type: "paragraph", children: [INLINE_ELEMENT] })).toEqual(
      `<p>${INLINE_CONTENT}</p>`
    );
  });

  it("should format blockquote nodes", () => {
    expect(getHtml({ type: "blockquote", children: [BLOCK_ELEMENT] })).toEqual(
      `<blockquote>${BLOCK_CONTENT}</blockquote>`
    );
  });

  it("should format list nodes", () => {
    expect(
      getHtml({
        type: "list",
        children: [{ type: "list-item", children: [INLINE_ELEMENT] }],
      })
    ).toEqual(`<ol><li>${INLINE_CONTENT}</li></ol>`);
  });
});
