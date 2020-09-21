<template>
    <div class="edit-form">
        <textarea rows="4" cols="80" v-model="message"></textarea>
    </div>
</template>

<script>
export default {
    name: 'EditForm',
    computed: {
        message: {
            get(){
                return this.$store.getters.message;
            },
            set(value){
                this.$store.dispatch('doUpdate', value)
            }
        }
    },
    methods: {
        doUpdate(event) {
            // input の値を持ってディスパッチ
            this.$store.dispatch('doUpdate', event.target.value)
        }
    }
}
</script>