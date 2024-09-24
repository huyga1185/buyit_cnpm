<script setup>
    import products from "@/assets/jsondemo/demoProducts.json"
    import categories from "@/assets/jsondemo/demoCategory.json"
    const producta = products.product;
    const categorya = categories.category;
</script>

<template>
    <div class="category__wrapper">
        <div class="container">
            <div class="row">
                <div class="category__header col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <label>Danh mục</label>
                </div>
                <div class="category">
                    <div v-for="(category, index) in categorya" :key="index" class="category__item col-xl-1-1 col-lg-1-1 col-md-1-1 col-sm-1-1">
                        <router-link to="/" class="category__item-link">
                            <img :src="category['category_img']" alt="" class="category__item-img">
                            <div class="category__item-content">
                                <label class="category__item-name">{{ category.category_name }}</label>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="main">
        <div class="container">
            <div class="main row">
                <div v-for="(product, index) in producta" :key="index" class="col-6 col-md-4 col-lg-2">
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
    .main__item {
        display: block;
        height: 100%;
        border: 1px solid var(--vt-c-text-dark-3);
        background-color: var(--vt-c-white);
        text-decoration: none;
        color: var(--vt-c-black);
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
        /* scrollbar-width: none; */
    }
    .category::-webkit-scrollbar {
        /* display: none; */
    }
    .category__item-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--vt-c-black);
    }
    .category__wrapper {
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