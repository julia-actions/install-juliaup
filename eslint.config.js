import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import ts_parser from '@typescript-eslint/parser'

export default [
    {
        ignores: ['dist/**', 'lib/**', 'node_modules/**']
    },
    js.configs.recommended,
    {
        files: ['src/**/*.ts'],
        languageOptions: {
            parser: ts_parser,
            parserOptions: {
                project: false
            },
            globals: {
                process: 'readonly'
            }
        },
        plugins: {
            '@typescript-eslint': tseslint
        },
        rules: {
            ...tseslint.configs.recommended.rules
        }
    },
    {
        files: ['eslint.config.js', 'tsup.config.js'],
        languageOptions: {
            globals: {
                process: 'readonly'
            }
        }
    }
]
