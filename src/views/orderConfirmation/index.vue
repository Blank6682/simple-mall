<template>
    <div class="warper">
        <TopArea></TopArea>
        <ProductList />
        <Confirmation />
    </div>
</template>

<script>
import TopArea from './TopArea.vue';
import ProductList from './ProductList.vue';
import Confirmation from './Confirmation.vue';
export default {
    name: "OrderConfirmation",
    components: { Confirmation, ProductList, TopArea },

}
</script>

<style lang="scss" scoped>
</style>
