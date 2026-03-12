import { defineConfig } from 'tsup'
export default defineConfig({
    bundle: true,
    clean: true,
    dts: false,
    entry: {
        index: 'src/entrypoint.ts'
    },
    format: ['cjs'],
    minify: false,
    noExternal: [/.*/],
    outExtension() {
        return {
            js: '.cjs'
        }
    },
    outDir: 'dist',
    platform: 'node',
    sourcemap: false,
    splitting: false,
    target: 'node24'
})
