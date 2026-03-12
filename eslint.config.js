import js from '@eslint/js'
import github from 'eslint-plugin-github'
import jest from 'eslint-plugin-jest'
import jsonc from 'eslint-plugin-jsonc'
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
        plugins: github.getFlatConfigs().recommended.plugins,
        rules: {
            'eslint-comments/no-unused-disable': 'error',
            'github/no-then': 'error',
            'github/unescaped-html-literal': 'error',
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
    {
        ...jest.configs['flat/recommended'],
        files: ['**/*.test.ts']
    },
    ...jsonc.configs['flat/recommended-with-jsonc'],
    {
        files: ['package.json', 'package-lock.json', 'renovate.json', 'tsconfig.json'],
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
