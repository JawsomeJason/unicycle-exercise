import {
  BLOCKQUOTE_ELEMENT_TYPE,
  DOCUMENT_ELEMENT_TYPE,
  LINK_ELEMENT_TYPE,
  LIST_ELEMENT_TYPE,
  LIST_ITEM_ELEMENT_TYPE,
  PARAGRAPH_ELEMENT_TYPE,
  TEXT_ELEMENT_TYPE,
} from "./constants";

/**
 * Formats an email element tree into an HTML content
 *
 * @param {EmailElement} element nested tree of element nodes
 * @returns {string} The resulting HTML content
 */
export const getHtml = ({ type, children, content, url }) => {
  if (type === DOCUMENT_ELEMENT_TYPE) {
    return `<article class="email">${children.map(getHtml).join("")}</article>`;
  }

  if (type === PARAGRAPH_ELEMENT_TYPE) {
    return `<p>${children.map(getHtml).join("")}</p>`;
  }

  if (type === BLOCKQUOTE_ELEMENT_TYPE) {
    return `<blockquote>${children.map(getHtml).join("")}</blockquote>`;
  }

  if (type === LIST_ELEMENT_TYPE) {
    return `<ol>${children.map(getHtml).join("")}</ol>`;
  }

  if (type === LIST_ITEM_ELEMENT_TYPE) {
    return `<li>${children.map(getHtml).join("")}</li>`;
  }

  if (type === TEXT_ELEMENT_TYPE) {
    return content;
  }

  if (type === LINK_ELEMENT_TYPE) {
    return `<a href="${encodeURI(url)}">${content}</a>`;
  }

  return "";
};
