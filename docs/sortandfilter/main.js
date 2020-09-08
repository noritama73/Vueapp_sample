const items = [
    { id:1, name: "リンゴ", price:100, colorName: '赤', colorCode: 'red' },
    { id:2, name: "ミカン", price:150, colorName: 'オレンジ', colorCode: 'orange' },
    { id:3, name: "ブドウ", price:300, colorName: '紫', colorCode: 'purple' },
    { id:4, name: "バナナ", price:50, colorName: '黄', colorCode: 'yellow' },
    { id:5, name: "メロン", price:550, colorName: '緑', colorCode: 'green' },
    { id:6, name: "スイカ", price:400, colorName: '緑', colorCode: 'green' },
    { id:7, name: "トマト", price:120, colorName: '赤', colorCode: 'red' },
    { id:8, name: "レモン", price:110, colorName: '黄', colorCode: 'yellow' },
    { id:9, name: "イチゴ", price:200, colorName: '赤', colorCode: 'red' },
    { id:10, name: "モモ", price:150, colorName: 'ピンク', colorCode: 'pink' },
]

Vue.filter('formatCurrency', function (value) {
    return '￥' + String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

var app = new Vue({
    el: '#app',
    data: {
        sort: {
            key: '',
            isAsc: false
        },
        filter: {
            name: '',
            price: [],
            color: []
        }
    },
    computed: {
        result: function() {
            let list = items.slice();
            if (this.sort.key) {
                list.sort((a, b) => {
                    a = a[ this.sort.key ];
                    b = b[ this.sort.key ];
                    return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1);
                });
            }
            if (this.filter.name) {
                list = list.filter(item => item.name.indexOf(this.filter.name) > -1);
            }
            if (this.filter.price.length > 0) {
                list = list.filter(item => {
                    if (this.filter.price.indexOf('under') > -1) {
                        if (item.price < 200) {
                            return true;
                        }
                    }
                    if (this.filter.price.indexOf('over') > -1) {
                        if (item.price >= 200) {
                            return true;
                        }
                    }
                    return false;
                })
            }
            return list;
        }
    },
    methods: {
        sortBy: function (key) {
            this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : true;
            this.sort.key = key;
        },
        sortClass: function (key) {
            return this.sort.key === key ? `sort ${this.sort.isAsc ? 'asc' : 'desc'}` : '';
        }
    }
})