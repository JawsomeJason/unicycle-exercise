// quick list of JS Doc types for IDE documentation

/**
 * @typedef {BlockElement | InlineElement} EmailElement
 */

/**
 * @typedef {object} BlockElement
 * @property {'document'|'paragraph'|'blockquote'|'list'|'list-item'} type
 * @property {Array} children
 */

/**
 * @typedef {object} InlineElement
 * @property {string} content
 */

/**
 * @typedef {InlineElement} TextElement
 * @property {'text'} type
 */

/**
 * @typedef {InlineElement} LinkElement
 * @property {'link'} type
 * @property {string} url
 */
