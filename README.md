## Unicycle Coding Exercise

This repo implements the [Unicycle coding challenge](https://gist.github.com/codewitch/65f3952d0d06f3af7b3074e54fd03ccf). The information below outlines usage, approach, and possible future improvements.

### Usage

- To install dependencies, run `yarn install`, assuming you have [Yarn already installed](https://classic.yarnpkg.com/en/docs/install/).
- To run tests, run `yarn test`. See `/lib/__tests__` for individual tests
- To format a JSON file, run `yarn format <path to file>`. There are two example JSON files to use: `example.json` and `adjascent-lists-example.json`, or just point to your own file.

### Approach

I tried to keep most logic in the `lib` directory. The files are separated by acceptance criteria paraphrased and outlined in the coding challenge.

To help my coding flow, as well as other "potential devs", I implemented some basic JSDoc types to inform the IDE and help me inspect arguments. I could have gone a TypeScript route, but I'm actually not a fan of static typing unless the project is huge or I'm building a package.

I also tried to keep the formatting/normalizing functions as separate and simple as possible. While there may be more iterations of arrays by separating things, it makes the code much more testable and maintainable. Adding a few extra array iterations is inconsequential on a Big-O scale.

### If I had more time...

- I could certainly make the unit tests more robust
- I probably could have come up with some more intense example JSON files, but I ran out of time and didn't want to overdo it.
- `formatTextLinks` feels too complicated. Maybe I overengineered that a bit.
