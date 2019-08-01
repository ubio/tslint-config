module.exports = {
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "interface-name": false,
        "member-access": [true, "no-public"],
        "no-empty": false,
        "quotemark": [true, "single"],
        "object-literal-sort-keys": false,
        "trailing-comma": false,
        "arrow-parens": false,
        "ordered-imports": false,
        "no-string-literal": false,
        "max-classes-per-file": false,
        "member-ordering": false,
        "indent": [true, "spaces", 4],
        "no-shadowed-variable": false,
        "object-literal-key-quotes": false,
        "no-switch-case-fall-through": true,
        "variable-name": [true, "allow-leading-underscore", "allow-pascal-case", "check-format"]
    }
};
