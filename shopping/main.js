const products = [
    { id:1, title: 'Hide and Attack', price:1200, qty:1, image: './pic/LACM-14987.jpg' },
    { id:2, title: 'ラビットファー', price:1300, qty:1, image: './pic/MTW03_H1.jpg' },
    { id:3, title: 'Free Turn', price:1400, qty:1, image: './pic/content_TrySail_Free_Turn_期間生産限定盤_1.jpg' },
    { id:4, title: 'forever friends', price:1200, qty:1, image: './pic//forever friends.png' },
    { id:5, title: 'World Changer', price:1300, qty:1, image: './pic/world changer.jpg' },
    { id:6, title: 'Chrono-rexica', price:1500, qty:1, image: './pic/クロノレキシカ.jpg' }
]

Vue.filter('formatCurrency', function (value) {
    return '￥' + String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

Vue.component('shopping-cart', {
    template: `
    <table class= "table table-cart">
        <tr>
            <th class="" colspan="4"><i class="fas fa-shopping-cart"></i>ショッピングカート</th>
        </tr>
        <tr v-for="(item, index) in items">
            <td>{{ item.title }}</td>
            <td>{{ item.qty }} 点</td>
            <td>{{ item.price | formatCurrency }}</td>
            <td>
                <a href="#" @click.stop.prevent="remove(index)"><i class="fas fa-times-circle"></i>削除</a>
            </td>
        </tr>
    <tr class="cartinfo">
        <td colspan="2">合計</td>
        <td colspan="2">{{ total| formatCurrency}}</td>
    </tr>
    </table >
    `,
    props: ['items'],
    computed: {
        total: function () {
            let total = 0;
            this.items.forEach(item => {
                total += (item.price * item.qty);
            });
            return total;
        }
    },
    methods: {
        addToCart(itemToAdd) {
            let existance = false;

            this.cartItems.forEach(item => {
                if (item.id === itemToAdd.id) {
                    existance = true;
                    item.qty += Number(itemToAdd.qty);
                }
            });
            if (existance === false) {
                this.cartItems.push(Vue.util.extend({}, itemToAdd));
            }

            itemToAdd = 1;
        },
        remove(index) {
            this.items.splice(index, 1)
        }
    }
})

var vm = new Vue({
    el: '#app',
    data: {
        cartItems: [],
        items: products
    },
    computed: {
        total: function () {
            let total = 0;
            this.cartItems.forEach(item => {
                total += (item.price * item.qty);
            });
            return total;
        }
    },
    methods: {
        addToCart(itemToAdd) {
            let existance = false;

            this.cartItems.forEach(item => {
                if (item.id === itemToAdd.id) {
                    existance = true;
                    item.qty += Number(itemToAdd.qty);
                }
            });
            if (existance === false) {
                this.cartItems.push(Vue.util.extend({}, itemToAdd));
            }

            itemToAdd = 1;
        },
        remove(index) {
            this.cartItems.splice(index, 1)
        }
    }
})