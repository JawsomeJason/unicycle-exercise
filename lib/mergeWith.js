/**
 * Merges a list of objects with an optional comparator function
 * @param {Array<{}>} objects list of objects to merge
 * @param {function} comparator optional custom merge function
 * @returns {Array<{}>} a list of merged objects
 */
export const mergeWith = (
  objects = [],
  comparator = (a, b) => [{ ...a, ...b }]
) =>
  objects.reduce((result, object, i) => {
    // skip the first item
    if (i === 0) {
      return [object];
    }

    // get all but the last
    const previous = result.slice(0, result.length - 1);
    const last = result[result.length - 1];

    // let the comparator determine how to merge those two
    const merged = [...previous, ...comparator(last, object)];

    return merged;
  }, []);
