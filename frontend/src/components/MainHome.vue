<script setup>
    import products from "@/assets/jsondemo/demoProducts.json"
    import categories from "@/assets/jsondemo/demoCategory.json"
    import IconAngleLeft from "./icons/IconAngleLeft.vue";
    import IconAngleRight from "./icons/IconAngleRight.vue";
    const producta = products.product;
    const categorya = categories.category;
</script>

<template>
    <div class="category__section">
        <div class="container">
            <div class="category__wrapper row">
                <div class="category__header col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <label>Danh mục</label>
                </div>
                <button class="category__button-turn-left">
                        <icon-angle-left class="button__icon"/>
                </button>
                <div class="category">
                    <div v-for="(category, index) in categorya" :key="index" class="category__item col">
                        <router-link to="/" class="category__item-link">
                            <img :src="category['category_img']" alt="" class="category__item-img">
                            <div class="category__item-content">
                                <label class="category__item-name">{{ category.category_name }}</label>
                            </div>
                        </router-link>
                    </div>
                </div>
                <button class="category__button-turn-right">
                        <icon-angle-right class="button__icon"/>
                </button>
            </div>
        </div>
    </div>
    <div class="main">
        <div class="container">
            <div class="main row">
                <div v-for="(product, index) in producta" :key="index" class="main__items col-6 col-md-4 col-lg-3 col-xl-2">
                    <router-link to="/" class="main__item">
                        <img :src="product['img-url']" alt="product image" class="main__item-img">
                        <div class="main__item-content">
                            <label class="main__item-name"> {{ product.title }} </label>
                            <label class="main__item-price">₫ {{ product.price }}</label>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .main {
        background-color: rgb(245, 245, 245);
    }
    .col-2 {
        padding: 5px;
    }
    .main__items {
        padding-bottom: calc(var(--bs-gutter-x) * .5);
        padding-top: calc(var(--bs-gutter-x) * .5);
    }
    .main__item {
        display: block;
        height: 100%;
        border: 2px solid var(--vt-c-text-dark-3);
        background-color: var(--vt-c-white);
        text-decoration: none;
        color: var(--vt-c-black);
        position: relative;
    }
    .main__item:hover {
        box-shadow: 2px 0px 5px 3px var(--vt-c-text-dark-2);
    }
    .main__item::before {
        content: '';
        position: absolute;
        display: block;
        background-color: transparent;
        width: 100%;
        height: 100%;
    }
    .main__item-img {
        width: 100%;
    }
    .main__item-content {
        padding: .8rem;
    }
    .main__item-name {
        font-size: 1.4rem;
        line-height: 2rem;
        display: -webkit-box;   /* Hiển thị dưới dạng một box linh hoạt (WebKit) */
        -webkit-box-orient: vertical;   /* Thiết lập box theo chiều dọc (WebKit) */
        -webkit-line-clamp: 3;  /* Giới hạn số lượng dòng hiển thị (WebKit) */
        overflow: hidden;   /* Ẩn phần văn bản vượt quá số dòng */
        text-overflow: ellipsis;    /* Hiển thị dấu ba chấm "..." */
        white-space: normal;    /* Cho phép văn bản xuống dòng bình thường */

        /* Cung cấp hỗ trợ cho các trình duyệt khác với tiêu chuẩn line-clamp */
        line-clamp: 3;  /* Giới hạn số lượng dòng hiển thị theo tiêu chuẩn */
        box-orient: vertical;   /* Hỗ trợ cho các trình duyệt tuân theo chuẩn */
        margin-bottom: 8px;
    }
    .main__item-price {
        font-size: 1.6rem;
        line-height: 1.6rem;
        color: var(--brand-color);
    }
    .category {
        display: grid;
        overflow-x: auto;
        grid-auto-flow: column;
        grid-template-rows: auto auto;
        grid-auto-columns: 10.15rem;
        padding: 0;
        scrollbar-width: none;
    }
    .category__wrapper {
        position: relative;
    }
    .category__wrapper::before {
        position: absolute;
        content: '';
        width: 50px;
        height: 50px;
        top: 50%;
        left: -2%;
        background-color: transparent;
        border-radius: 50%;
    }
    .category__wrapper::after {
        content: '';
        position: absolute;
        width: 50px;
        height: 50px;
        top: 50%;
        left: 98%;
        background-color: transparent;
        border-radius: 50%;
        z-index: 1;
    }
    .category__wrapper:hover .category__button-turn-left {
        top: 50%;
        left: -2%;
        width: 50px;
        height: 50px;
        animation: popUpScale 0.2s ease;
        z-index: 2;
    }
    .category__wrapper:hover .category__button-turn-right {
        top: 50%;
        left: 98%;
        width: 50px;
        height: 50px;
        animation: popUpScale 0.2s ease;
        z-index: 2;
    }
    .button__icon {
        fill: inherit;
        width: 40%;
    }
    .category__button-turn-left {
        position: absolute;
        border: none;
        border-radius: 50%;
        top: 55%;
        left: -1%;
        width: 30px;
        height: 30px;
        background-color: var(--vt-c-white);
        box-shadow: -2px 0px 5px 2px var(--vt-c-text-dark-3);
        /* position: relative; */
    }
    .category__button-turn-right{
        position: absolute;
        border: none;
        border-radius: 50%;
        top: 55%;
        left: 99%;
        width: 30px;
        height: 30px;
        background-color: var(--vt-c-white);
        box-shadow: 2px 0px 5px 2px var(--vt-c-text-dark-3);
    }
    .category::-webkit-scrollbar {
        display: none;
    }
    .category__item-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--vt-c-black);
    }
    .category__section {
        padding-bottom: 25px;
    }
    .category__header {
        border: 1px solid var(--vt-c-text-dark-3);
        height: 5rem;
        display: flex;
        align-items: center;
    }
    .category__header label {
        font-size: 2.25rem;
        line-height: 2.75rem;
        font-weight: 350;
    }
    .category__item {
        border: 1px solid var(--vt-c-text-dark-3);
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }
    .category__item-img {
        border-radius: 50%;
        max-width: 60%;
        margin-bottom: 8px;
        cursor: pointer;
    }
    .category__item-name {
        font-size: 1.4rem;
        line-height: 1.6rem;
        cursor: pointer;
    }
    .main__item-name, .main__item-price {
        cursor: pointer;
    }
</style>