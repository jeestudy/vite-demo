import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default ({ mode }) => {

  return defineConfig({

    server: {
      host: true, // 监听所有host包括局域网
      port: 8000
    },

   // @ --> src目录
   resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },

    plugins: [
      vue(),
    ],
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment'
    },
    // 解决：Inline JavaScript is not enabled. Is it set in your options 问题
    css: {
      postcss: {},
      preprocessorOptions: {
        less: {
          // DO NOT REMOVE THIS LINE
          javascriptEnabled: true
        }
      }
    }
  })
}
