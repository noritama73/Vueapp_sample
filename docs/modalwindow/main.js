Vue.component('modal', {
    template: `
    <div class="bg">
        <div class="modal">
            <div class="modal-header">
                <p class="modal-title">
                    <slot name="header">タイトル</slot>
                </p>
                <i class="modal-close fas fa-times" @click="$emit('close')"></i>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
    `
})

new Vue({
    el: '#app',
    data: {
        modal: {
            login: { isShow: false },
            terms: { isShow: false },
        }
    },
    methods: {
        open: function (modalName) {
            this.modal[modalName].isShow = true;
        },
        close: function (modalName) {
            this.modal[modalName].isShow = false;
        }
    }
});