/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          rootDir: "./",
          noEmit: true,
        },
      },
    ],
  },
  testMatch: ["**/__test__/**/*.test.ts"],
};
