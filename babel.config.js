module.exports = {
  sourceType: "unambiguous",
  presets: [
    [
      '@babel/env',
      {
        "useBuiltIns": "entry",
        "modules": 'commonjs'
      }
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    'js-logger',
  ],
}
