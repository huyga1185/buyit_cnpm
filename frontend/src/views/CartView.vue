<script setup>
    import CartHeader from '@/components/CartHeader.vue';
    import MainFooter from '@/components/MainFooter.vue';
    import CartBar from '@/components/CartBar.vue';
    import CartStore from '@/components/CartStore.vue';
</script>

<template>
    <CartHeader class="cart__header"/>
    <div class="cart__main">
        <CartBar class="main__bar"/>
        <CartStore class="main__store"></CartStore>
    </div>
    <MainFooter class="cart__footer"/>
</template>

<style>
    .cart__main {
        background-color: var(--vt-c-text-dark-3);
        height: 100vh;
        padding-top: 20px;
    }
    .main__bar {
        margin-bottom: 10px;
    }
</style>