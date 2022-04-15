```javascript
yarn create vite 
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/160008/1650000658061-65e62aff-85c7-458d-8639-993ca1e24dfe.png#clientId=u83be803a-3be0-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=122&id=u7bf8525a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=122&originWidth=348&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30365&status=done&style=none&taskId=u41fbe1a0-2332-4916-87cb-c42b068ad0d&title=&width=348)

- index.vue
```javascript
<template>
    <div>
        {{ msg }}
    </div>
</template>
<script setup>
defineProps({
    msg: {
        type: String,
        default: 'hello',
    },
})
</script>

```

- index.js
```javascript
import Container from './container/index.vue'

export const install = (app) => {
    app.component('Container', Container)
}

export default {
    version: 'test',
    install,
    Container,
}

```

- vite.config.js
```javascript
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

```

- package.json
```javascript
{
  "name": "vue-container",//import npm 名字
  "private": false,//私有设置为false
  "version": "0.0.1",
  "main": "lib/container.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "build": "^0.1.4",
    "vue": "^3.2.25",
    "vue-contaienr": "^0.0.1"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^2.3.1",
    "vite": "^2.9.2"
  }
}
```
+ 打包
  
```
yarn build
```
- 发布到npm
```javascript
npm login
npm publish
```

+ 发布完项目下载使用
  
```
yarn add vue-container
```

### 第一种
+ main.js
```
import contaienr from 'vue-container'
app.use(container)
````

+ App.vue
```
<Container msg="hello world">
```

### 第二种
+ App.vue
import { Container } from 'vue-container'
```
<Container msg="hello world">
```
