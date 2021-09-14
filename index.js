import fs from "fs";
import { getHtml } from "./lib/getHtml";
import { normalize } from "./lib/normalize";

const [filename] = process.argv.slice(2);

fs.readFile(filename, (err, data) => {
  if (err) throw err;

  const email = JSON.parse(data);
  const [normalized] = normalize([email]);
  console.log(getHtml(normalized));
});
