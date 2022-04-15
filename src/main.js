import { createApp } from 'vue'
import App from './App.vue'
import Container from 'vue-zzzzz'
// import Container from '../packages/index'
const app = createApp(App)
app.use(Container)

app.mount('#app')
