import { createRouter, createWebHistory } from 'vue-router';
import FormPage from 'Pages/FormPage.vue'
import PreviewPage from 'Pages/PreviewPage.vue'


const routes = [
    {
        path: '/',
        component: FormPage,
        name: 'main'
    },
    {
        path: '/preview',
        component: PreviewPage,
        name: 'preview'
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'main' }
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),

})

export default router