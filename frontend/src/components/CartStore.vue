<script setup>
    import IconMessage from './icons/IconMessage.vue';
    import IconStore from './icons/IconStore.vue';
</script>

<template>
    <div class="cart__store-wrapper">
        <div class="container store-wrapper">
            <div class="store__main">
                <div class="main__checkbox col-1">
                    <input type="checkbox" name="shopCheck" id="shopCheck">
                </div>
                <div class="main__shop-name">
                    <RouterLink to="/" class="shop-name__link">
                        <IconStore class="shop-name__icon"></IconStore>    
                        <label class="shop-name">example shop name</label>
                    </RouterLink>
                </div>
                <div class="main__shop-message">
                    <RouterLink to="/"><IconMessage class="shop-message__icon"></IconMessage></RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .store-wrapper {
        padding: 20px 0 20px;
        background-color: var(--vt-c-white);
        border-radius: 3px;
    }
    .store__main {
        display: flex;
    }
    .main__checkbox {
        display: flex;
        justify-content: end;
    }
    .shop-name {
        font-size: 1.4rem;
        line-height: 1.6rem;
    }
    .shop-message__icon {
        fill: var(--brand-color);
        height: 1.4rem;
    }
    .shop-name__link {
        display: flex;
        flex-direction: row;
    }
    .shop-name__icon {
        height: 1.4rem;
        margin-right: 1.2rem;
    }
</style>