<template>
    <div>
        <div class="parent">
            <p>ここは親コンポーネント</p>
            <button class="button-outline" @click="open">開く</button>
        </div>
        <div class="child">
            <Child ref="child"/>
        </div>
    </div>
</template>

<script>
import Child from './Child'
export default {
    components: {
        "Child" : Child
    },
    methods: {
        open(){
            this.$refs.child.openChild()
        }
    }
}
</script>

<style>

</style>