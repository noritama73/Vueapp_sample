Vue.component('errors', {
    props: ['errors'],
    template: `
        <div class="errors" v-if="errors">
            <div class="error" v-for="error in errors">{{error}}</div>
        </div>
    `
})

new Vue({
    el: '#app',
    data: {
        name: '',
        zip: '',
        prefecture: '',
        address: '',
        building: '',
        interests: [''],
        interestsMaxCount: 3,
        errors: {
            name: [],
            zip: [],
            prefecture: [],
            address: [],
            interests: []
        },
        isShow: false,
    },
    methods: {
        zipToAddress: function () {
            var self = this;
            new YubinBango.Core(this.zip, function (addr) {
                if (addr.region_id) {
                    self.prefecture = addr.region;
                    self.address = addr.locality + addr.street;
                } else {
                    self.errors.zip.push('該当する住所がありません')
                }
            });
        },
        addInterests: function () {
            this.interests.push('');        
        },
        removeInterests: function (index) {
            this.interests.splice(index, 1);
        },
        validate: function () {
            var errors = {
                name: [],
                zip: [],
                prefecture: [],
                address: [],
                interests: [],
            };
            var can = true;
            if (!this.name) {
                errors.name.push('必須項目が入力されていません');
                can = false;
            }
            if (!this.zip) {
                errors.zip.push('必須項目が入力されていません');
                can = false;
            } else {
                if (!this.zip.match(/\d{3}-?\d{4}/)) {
                    errors.zip.push('書式が正しくありません');
                    can = false;
                }
            }
            if (!this.prefecture) {
                errors.prefecture.push('必須項目が入力されていません');
                can = false;
            }
            if (!this.address) {
                errors.address.push('必須項目が入力されていません');
                can = false;
            }
            if (this.interests <= 1 && !this.interests[0]) {
                errors.interests.push('必須項目が入力されていません');
                can = false;
            }
            this.errors = errors;
            if (can) {
                this.isShow = true;
            }
        },
        close: function () {
            this.isShow = false;
        },
        afterLeave: function () {
            this.src = null;
        },
    },
    computed: {
        canAddInterests: function () {
            return this.interests.length < this.interestsMaxCount;
        },
        canRemoveInterests: function () {
            return this.interests.length > 1;
        },
    },
})