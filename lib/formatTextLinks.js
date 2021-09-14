import { LINK_ELEMENT_TYPE, TEXT_ELEMENT_TYPE } from "./constants";

// simple URL matcher
const PROTOCOL_REGEX = /https?:\/\//;
const URL_REGEX =
  /((?:https?:\/\/)?(?:[a-z][^\s]*\.[a-z][-a-z0-9+&@#\/%=~_|$?!:,.]+[^\.\s]\b))/gi;

export const formatTextLinks = (elements) =>
  elements.reduce((result, element) => {
    const isTextLink = element?.type === TEXT_ELEMENT_TYPE;

    // skip early if not a text link
    if (!isTextLink) {
      return [...result, element];
    }

    return [
      ...result,
      ...element.content
        // split between URLs and non-URLs
        .split(URL_REGEX)
        // remove any empty values
        .filter(Boolean)
        // associate URls with links, ensuring a protocol
        .map((str) =>
          str.match(URL_REGEX)
            ? {
                ...element,
                type: LINK_ELEMENT_TYPE,
                content: str,
                url: str.match(PROTOCOL_REGEX) ? str : `http://${str}`,
              }
            : { ...element, type: TEXT_ELEMENT_TYPE, content: str }
        ),
    ];
  }, []);
