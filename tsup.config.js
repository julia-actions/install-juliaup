import { defineConfig } from 'tsup'
export default defineConfig({
    bundle: true,
    clean: true,
    dts: false,
    entry: {
        index: 'src/entrypoint.ts'
    },
    format: ['esm'],
    minify: false,
    noExternal: [/.*/],
    outDir: 'dist',
    platform: 'node',
    sourcemap: false,
    splitting: false,
    target: 'node24'
})
