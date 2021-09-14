import {
  BLOCKQUOTE_ELEMENT_TYPE,
  LINK_ELEMENT_TYPE,
  LIST_ELEMENT_TYPE,
} from "./constants";

import { formatTextLinks } from "./formatTextLinks";
import { mergeWith } from "./mergeWith";

const isEmptyList = ({ type, children = [] }) =>
  type === LIST_ELEMENT_TYPE && !children?.length;

const isEmptyLink = ({ type, content = "" }) =>
  type === LINK_ELEMENT_TYPE && !content?.length;

/**
 * Merges two elements' children if a list or blockquote
 * @param {EmailElement} el1
 * @param {EmailElement} el2
 * @returns {Array<EmailElement>} List of elements, possibly merged together
 */
const mergeSimilarElements = (el1, el2) => {
  const isMergable =
    el1?.type === el2?.type &&
    [LIST_ELEMENT_TYPE, BLOCKQUOTE_ELEMENT_TYPE].includes(el1?.type);

  // exit early if not similar
  if (!isMergable) {
    return [el1, el2];
  }

  return [
    {
      ...el1,
      ...el2,
      children: [...el1.children, ...el2.children],
    },
  ];
};

/**
 * reformats element list using heuristics to improve user experience
 * @param {Array<EmailElement>} elements list of elements to format
 * @returns {Array<EmailElement>}
 */
export const normalize = (elements = []) => {
  let result = [...elements];

  result = mergeWith(result, mergeSimilarElements);
  result = result.filter((el) => !isEmptyList(el));
  result = result.filter((el) => !isEmptyLink(el));
  result = formatTextLinks(result);

  // do all the above things for block nodes' children
  result = result.map(({ children, ...el }) => ({
    ...el,
    ...(children ? { children: normalize(children) } : {}),
  }));

  return result;
};
