import { join } from "path";

export const sassOptions = {
  includePaths: [join(process.cwd(), "styles")],
};
