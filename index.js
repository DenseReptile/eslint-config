// #!/usr/bin/env node
"use strict";

module.exports = {
  root: true,
  plugins: ["sonarjs", "deprecate", "jsdoc"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:jsdoc/recommended",
    "plugin:no-unsanitized/DOM",
    "plugin:sonarjs/recommended",
    "plugin:pii/recommended",
  ],
  rules: {
    //* Refer to ESLint's documentation https://eslint.org/docs/latest/rules/

    // The following rules only apply to JavaScript.

    /*
     ? Possible Problems
     ?
     ? These rules relate to possible logic errors in code.
     */
    "constructor-super": "error",
    "for-direction": "error",  // Use a while loop instead.
    "getter-return": "error",  // Getters must return values.
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",  // Redundant.
    "no-cond-assign": ["error", "except-parens"],  // Likely a bug unless deliberate.
    "no-const-assign": "error",  // NOTE: Constants are mutable. Use Immer for immutability.
    "no-constant-binary-expression": "error",  // Unintentional redundancy.
    "no-constant-condition": [
      "warn",
      {"checkLoops": false}  // Infinite loops can be deliberate.
    ],
    "no-constructor-return": "error",  // Constructors should not return values, pnly initialize.
    "no-debugger": "warn",  // Add a top level ESLint rule disable if needed.
    "no-dupe-args": "error",  // Invalid redundancy.
    "no-dupe-class-members": "error",  // May cause unintended bugs if disabled.
    "no-dupe-else-if": "error",  // Redundant code.
    "no-dupe-keys": "error",  // Unintended behaviour.
    "no-duplicate-case": "error",  // Unintended behaviour
    "no-duplicate-imports": [
      "warn",
      {"includeExports": true}
    ],
    "no-ex-assign": "error",  // Should not overwrite exception.
    "no-fallthrough": ["warn", /falls?\s?through/i],  // Fallthrough disallowed unless deliberate.
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": [
      "error",
      {
        "skipStrings": true,
        "skipRegExps": true,
        "skipTemplates": true,
      }  // Possibly deliberate.
    ],
    "no-misleading-character-class": "off",
    "no-new-symbol": "error",  // `new Symbol` raises error.
    "no-self-assign": "error",  // No effect, likely mistake.
    "no-self-compare": "error",  // Likely a mistake.
    "no-setter-return": "error", // Setters don't return values.
    "no-sparse-arrays": "error",  // Likely unintended.
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-unexpected-multiline": "error",  // Avoid errors from JavaScript's automatic semicolon insertion.
    "no-unreachable": "error",  // Eliminate dead code.
    "no-unreachable-loop": "error",  // No need to use a loop then.
    "no-unsafe-finally": "error",  // Avoid accidentally overwriting control flow in try catch blocks.
    "no-unsafe-negation": "error",  // Unintended unless deliberate.
    "no-unsafe-optional-chaining": "error",  // Avoid undefined errors.
    "no-unused-private-class-members": "error",  // Redundant.
    "no-unused-vars": "error",  // Redundant.
    "no-use-before-define": "error",  // Use `let/const`. Helps avoid errors.
    "use-isnan": "error",  // More reliable.
    "valid-typeof": "error",
    /*
     ? Suggestions
     ?
     ? These rules suggest alternate ways of doing things.
     */
    "accessor-pairs": "off",  // Read-only/write-only values may be used.
    "block-scoped-var": "error",  // Avoid bugs from hoisting. Avoid `var` to begin with.
    "camelcase": "off",  // Ugly.
    "capitalized-comments": "off",  // May annoy you with commented out code.
    "consistent-return": "error",  // Return must be predictable.
    "curly": ["error", "multi"],  // Avoid one-liners. Indentation should have semantic meaning.
    "default-case": "error",  // Have a defined fallback.
    "default-case-last": "error",  // The default case is always the last case.
    "default-param-last": "error",
    "eqeqeq": "error",  // Avoid the legacy equality operator.
    "func-name-matching": "error",  // Removes confusion on it's actual name.
    "func-style": "error",  // Avoid relying on hoisting.
    "grouped-accessor-pairs": "warn",  // Easier to maintain if in the same place.
    "multiline-comment-style": "off",
    "new-cap": [
      "error",
      {
        "newIsCap": false,
        "capIsNew": true,  // Call constructors with `new`.
      }
    ],
    "no-confusing-arrow": [
      "warn",
      {
        "allowParens": true,
      }
    ],
    "no-empty-function": "error",  // Redundant.
    "no-eval": "warn",  // Potential ACE.
    "no-extra-boolean-cast": "warn",  // Redundant.
    "no-implicit-coercion": [
      "error",
      {
        "boolean": false
      }
    ],  // Implicit type coercion only adds bugs.
    "no-implicit-globals": "warn",
    "no-implied-eval": "warn",  // Potential ACE.
    "no-invalid-this": "error",
    "no-label-var": "error",
    "no-lonely-if": "warn",  // Easier to use `else if`.
    "no-loop-func": "error",
    "no-magic-numbers": "error",  // Easier to maintain.
    "no-return-assign": "error",
    "no-sequences": "error",  // Unintended behaviour.
    "no-unused-expressions": "error",  // Redundant.
    "no-useless-concat": "error",  // Redundant.
    "no-useless-constructor": "error",  // Redundant.
    "no-var": "error",  // Legacy feature.
    "operator-assignment": ["warn", "always"],
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",  // Constants are not immutable.
    "sort-imports": "warn",
    "strict": "error",  // Enforce strict mode
    "yoda": ["warn", "never"],
    /*
     ? Layout and Formatting
     ?
     ? These rules care about how the code looks rather than how it executes. These are
     ? subjective and likely have already been handled by Prettier. For the few rules that
     ? end up here either Prettier's ESLint configuration does not cover these or that the
     ? author(s) of this config are extra opinionated about that particular rule.
     */
    "no-tabs": "error",
    "quotes": [
      "error",
      "double",
      {
        "allowTemplateLiterals": true,
      },
    ],
    /*
     ? Third Parties
     ?
     ? The rules under this section configures the rules provided by third party ESLint
     ? plugins. There is not a guaranteed order in this section on how the rules are configured.
     */
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx", "**/*.cts", "**/*.mts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "sonarjs", "deprecate", "jsdoc"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:jsdoc/recommended",
        "plugin:no-unsanitized/DOM",
        "plugin:sonarjs/recommended",
        "plugin:pii/recommended",
      ],
      rules: {
        // Prettier Rules.
        "@typescript-eslint/quotes": ["error", "double", {
          allowTemplateLiterals: true
        }],
        "@typescript-eslint/brace-style": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/comma-spacing": "off",
        "@typescript-eslint/func-call-spacing": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/keyword-spacing": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/no-extra-parens": "off",
        "@typescript-eslint/no-extra-semi": "off",
        "@typescript-eslint/object-curly-spacing": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/space-before-blocks": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/space-infix-ops": "off",
        "@typescript-eslint/type-annotation-spacing": "off",
        // Overlapping ESLint rules.
        "default-param-last": "off",
        "no-array-constructor": "off",
        "no-dupe-class-members": "off",
        "no-invalid-this": "off",
        "no-loop-func": "off",
        "no-loss-of-precision": "off",
        "no-magic-numbers": "off",
        "no-redeclare": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-useless-constructor": "off",
        ////
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/ban-ts-comment": ["error", {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": "allow-with-description",
          "ts-nocheck": true,
          "ts-check": false,
        }],
        "@typescript-eslint/ban-tslint-comment": "error", // Why are you using TSLint?
        // Getters are recommended for read only values.
        "@typescript-eslint/class-literal-property-style": ["error", "getters"],
        "@typescript-eslint/consistent-indexed-object-type": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/default-param-last": "warn",
        "@typescript-eslint/explicit-function-return-type": "off", // Use type inference.
        "@typescript-eslint/explicit-member-accessibility": ["error", {
          accessibility: "explicit",
          overrides: {
            accessors: "explicit",
            constructors: "no-public",
            methods: "explicit",
            properties: "explicit",
            parameterProperties: "off",
          }
        }],
        "@typescript-eslint/member-ordering": "warn",
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/naming-convention": ["error",
          {
            selector: "typeLike",
            format: ["PascalCase"],
            leadingUnderscore: "allowSingleOrDouble",
            trailingUnderscore: "allowSingleOrDouble",
          },
          {
            selector: "memberLike",
            format: ["snake_case", "UPPER_CASE"],
            leadingUnderscore: "allowSingleOrDouble",
            trailingUnderscore: "allowSingleOrDouble",
            
          },
          {
            selector: "property",
            format: ["snake_case", "UPPER_CASE"],
            leadingUnderscore: "allowSingleOrDouble",
            trailingUnderscore: "allowSingleOrDouble",
          },
          {
            selector: "variableLike",
            format: ["snake_case", "UPPER_CASE"],
            leadingUnderscore: "allowSingleOrDouble",
            trailingUnderscore: "allowSingleOrDouble",
          },
          {
            selector: "method",
            format: ["snake_case", "UPPER_CASE"],
            leadingUnderscore: "allowSingleOrDouble",
            trailingUnderscore: "allowSingleOrDouble",
          },
        ],
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-base-to-string": "warn",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/no-dupe-class-members": "error",
        "@typescript-eslint/no-duplicate-enum-values": "error",
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extraneous-class": "warn",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-invalid-this": "error",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-loop-func": "error",
        "@typescript-eslint/no-loss-of-precision": "error",
        "@typescript-eslint/no-magic-numbers": "error",
        "@typescript-eslint/no-meaningless-void-operator": ["error", {
          checkNever: true
        }],
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-redeclare": "error",
        "@typescript-eslint/no-redundant-type-constituents": "error",
        "@typescript-eslint/no-throw-literal": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": ["error", {
          allowConstantLoopConditions: true
        }],
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unused-expressions": "error",
        '@typescript-eslint/no-unused-vars': "error",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/no-useless-empty-export": "error",
        "@typescript-eslint/prefer-as-const": "warn",
        "@typescript-eslint/prefer-literal-enum-member": "error",
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-return-this-type": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/sort-type-union-intersection-members": "warn",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/triple-slash-reference": "off",
        "@typescript-eslint/unbound-method": "error"
      }
    },
  ]
};
