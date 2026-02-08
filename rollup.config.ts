// Based on:
// https://github.com/actions/typescript-action/blob/71adddfabc70f9400e5f696e6b59a1531d062085/rollup.config.ts
// License: MIT

// See: https://rollupjs.org/introduction/

import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

const config = {
    input: 'src/entrypoint.ts',
    output: {
        esModule: true,
        file: 'dist/index.js',
        format: 'es',
        sourcemap: true
    },
    plugins: [typescript(), nodeResolve({ preferBuiltins: true }), commonjs()]
}

export default config
