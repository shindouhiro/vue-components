import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // 主要用于alias文件路径别名
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: 'lib', //打包输入目录
        lib: {
            entry: resolve(__dirname, './packages/index.js'),
            name: 'container',
            fileName: () => `container.js`,
        },
    },
})
