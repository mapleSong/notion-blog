/** @type {import('prettier').Config & import('@trivago/prettier-plugin-sort-imports').PluginConfig} */
const config = {
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  endOfLine: 'lf',
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    '^react',
    '^next',
    '^prismjs/prism',
    '^prismjs/components/',
    '<THIRD_PARTY_MODULES>',
    '@/types',
    '@/components/(.*)',
    '@/libs/(.*)',
    '@/.*',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

module.exports = config;
