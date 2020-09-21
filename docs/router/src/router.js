import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './view/Home';
import ProductList from './view/ProductList'
import Product from './view/Product'
import ProductHome from './view/Product/Home'
import ProductReview from './view/Product/Review'
import ProductReviewDetail from './view/Product/ReviewDetail'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/product',
            component: ProductList,
        },
        {
            path: '/product/:id',
            component: Product,
            props: route => ({ id: Number(route.params.id) }),
            children: [
                {
                    name: 'product-home',
                    path: '',
                    component: ProductHome,
                },
                {
                    name: 'product-review',
                    path: 'review',
                    component: ProductReview,
                },
                {
                    name: 'revie-detail',
                    path: 'review/:rid',
                    component: ProductReviewDetail,
                    props: route => ({
                        rid: Number(route.params.rid)
                    })
                }
            ]
        }
    ]
})

export default router