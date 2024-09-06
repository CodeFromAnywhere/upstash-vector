import { readdirSync, writeFileSync } from "fs";
import { mergeOpenapis } from "openapi-util";
import { join } from "path";

export const cli = async () => {
  const originUrl = "http://localhost:3000";

  const operations = join(process.cwd(), "public/operations");
  const names = readdirSync(operations, "utf8");
  const result = await mergeOpenapis({
    openapiList: names
      .filter((x) => x.endsWith(".json"))
      .map((filename) => ({
        openapiUrl: `${originUrl}/operations/${filename}`,
        operationIds: undefined,
      })),
  });
  writeFileSync(
    join(process.cwd(), "public/openapi.json"),
    JSON.stringify(result, undefined, 2),
    "utf8",
  );
};

cli();
