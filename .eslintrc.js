// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');

// https://github.com/kentcdodds/eslint-config-kentcdodds/blob/28c760375858c2c2b02ea2561dae0de465596350/non-rules-config.js#L4-L8
// eslint-disable-next-line no-nested-ternary
const tsConfig = fs.existsSync('tsconfig.json')
  ? path.resolve('tsconfig.json')
  : fs.existsSync('types/tsconfig.json')
  ? path.resolve('types/tsconfig.json')
  : undefined;

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: tsConfig,
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react'],

  rules: {
    // add your own!
  },
  settings: {
    // add your own!
  },
};

module.exports = config;
