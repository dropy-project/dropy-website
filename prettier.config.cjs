/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
