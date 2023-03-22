import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import Header from "./components/Header.vue"
import Overlay from "./components/Overlay.vue"
import Message from "./components/Message.vue"

import AddTable from "./frame/AddTable.vue"
import PageTable from "./frame/PageTable.vue"
import TableItem from "./frame/TableItem.vue"
import Card from "./frame/Card.vue"
import CardItem from "./frame/CardItem.vue"
import BlockButton from "./frame/BlockButton.vue"

import ReadOnlyText from "./element/ReadOnlyText.vue"
import InputText from "./element/InputText.vue"
import InputDateTime from "./element/InputDateTime.vue"
import InputDate from "./element/InputDate.vue"
import InputSelect from "./element/InputSelect.vue"
import Button from "./element/Button.vue"
import DetailButton from "./element/DetailButton.vue"

createApp(App)
.component('C-Header', Header)
.component('C-Overlay', Overlay)
.component('C-Message', Message)
.component('F-AddTable', AddTable)
.component('F-PageTable', PageTable)
.component('F-TableItem', TableItem)
.component('F-Card', Card)
.component('F-CardItem', CardItem)
.component('F-BlockButton', BlockButton)
.component('E-ReadOnlyText', ReadOnlyText)
.component('E-InputText', InputText)
.component('E-InputDateTime', InputDateTime)
.component('E-InputDate', InputDate)
.component('E-InputSelect', InputSelect)
.component('E-Button', Button)
.component('E-DetailButton', DetailButton)
.use(router)
.mount('#app')
