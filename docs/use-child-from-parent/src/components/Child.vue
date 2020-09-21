<template>
    <div v-show="isShow">
        <p>ここは子コンポーネント</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow: false
        }
    },
    methods: {
        openChild(){
            isShow = !isShow
        }
    }
};
</script>

<style>

</style>