import Container from './container/index.vue'

export const install = (app) => {
    app.component('Container', Container)
}

export default {
    version: 'test',
    install,
    Container,
}
