import js from '@eslint/js'
import eslint_comments from '@eslint-community/eslint-plugin-eslint-comments'
import jsonc from 'eslint-plugin-jsonc'
import no_only_tests from 'eslint-plugin-no-only-tests'
import prettier from 'eslint-plugin-prettier'
import tseslint from '@typescript-eslint/eslint-plugin'
import ts_parser from '@typescript-eslint/parser'

export default [
    {
        ignores: ['dist/**', 'lib/**', 'node_modules/**']
    },
    js.configs.recommended,
    {
        files: ['src/**/*.ts', 'eslint.config.js', 'tsup.config.js'],
        plugins: {
            '@eslint-community/eslint-comments': eslint_comments,
            'no-only-tests': no_only_tests
        },
        rules: {
            '@eslint-community/eslint-comments/no-unused-disable': 'error',
            'no-only-tests/no-only-tests': 'error'
        }
    },
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
    ...jsonc.configs['flat/recommended-with-jsonc'],
    {
        files: ['package.json', 'package-lock.json', 'renovate.jsonc', 'tsconfig.json'],
        plugins: {
            prettier
        },
        rules: {
            'prettier/prettier': 'error'
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
