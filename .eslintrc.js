module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": ["warn", "backtick"],
        "block-spacing": ["warn", "never"],
        "indent": ["error", "tab"],
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
        "arrow-parens": ["error", "always"],
    }
};