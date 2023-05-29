import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:9002/graphql",
  documents: ["src/**/request.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/generated/graphql/": {
      preset: "client",
    },
  },
};
export default config;
