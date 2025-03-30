import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/assets/main.scss'

const app = createApp(App)

app.use(router)

// 配置 Element Plus 组件全局使用中文
app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
