<script setup>
    import IconFacebook from './icons/IconFacebook.vue';
    import IconInstagram from './icons/IconInstagram.vue';
    import IconMagnifyingglass from './icons/IconMagnifyingglass.vue';
    import IconCartshopping from './icons/IconCartshopping.vue';
</script>

<template>
    <header class="header">
        <div class="container">
            <nav class="navbar">
                <ul class="navbar__list">
                    <li class="navbar__item">
                        Kết nối
                        <a href="" class="navbar__item-icon"> <IconFacebook class="navbar__item-icon"/> </a>
                        <a href="" class="navbar__item-icon"> <IconInstagram class="navbar__item-icon"/> </a>
                    </li>
                </ul>

                <ul class="navbar__list login-signup-section">
                    <li class="navbar__item ">
                        <router-link to="/" class="navbar__item-link">Đăng ký</router-link>
                    </li>
                    <li class="navbar__item ">
                        <router-link to="/login" class="navbar__item-link ">Đăng nhập</router-link>
                    </li>
                </ul>
            </nav>

            <div class="header-with-search">
                <div class="header-with-search__buyit-logo">
                    <router-link to="/" class="buyit-logo-img"><img src="../assets/logo.jpg" alt="Buyit" class="buyit-logo-img"></router-link>
                </div>

                <div class="header-with-search__search-section">
                    <div class="search-section">
                        <form class="search-section__wrapper">
                            <div class="search-section__input-wrap">
                                <input class="search-section__input" placeholder="Hôm nay bạn muốn tìm mua gì?" v-model="search_keyword"></input>
                            </div>
                            <button type="submit" class="search-section__submit-search-btn">
                                <IconMagnifyingglass id="submit-search-btn-icon"/>
                            </button>
                        </form>
                    </div>
                </div>

                <div class="header-with-search__cart col-1">
                    <router-link to="cart" > <IconCartshopping class="cart__icon" /> </router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
    .header {
        background-image: linear-gradient(0, rgb(218, 40, 120), var(--brand-color));
    }
    .navbar__list {
        list-style-type: none;
        margin: 0;
    }
    .navbar__item {
        font-size: 1.4rem;
        line-height: 1rem;
        display: flex;
        align-items: center;
        min-height: 20px;
    }
    .navbar__item-icon {
        width: 20px;
        height: 20px;
    }
    .navbar__item-link {
        text-decoration: none;
        color: var(--vt-c-white);
        font-size: 1.4rem;
        line-height: 1rem;
    }
    .header-with-search__cart {
        display: flex;
        justify-content: center;
    }
    .cart__icon {
        width: 25pxx;
        height: 25px;
        fill: var(--vt-c-white);
    }
    .header-with-search {
        display: flex;
        margin-bottom: 10px;
        align-items: center;
    }
    .header-with-search__search-section {
        /* background-color: var(--vt-c-white); */
        flex: 1;
    }
    .buyit-logo-img {
        height: 60px;
        margin-right: 10px;
    }
    .search-section {
        background-color: var(--vt-c-white);
        border-radius: 2px;
    }
    .search-section__wrapper {
        display: flex;
        align-items: center;
    }
    .search-section__input-wrap{
        flex: 1;
    }
    .search-section__input {
        width: 100%;
        font-size: 1.6rem;
        line-height: 3.2rem;
        border: 0;
    }
    .search-section__submit-search-btn {
        width: 60px;
        height: 35px;
        outline: 0;
        border: 0;
        border-radius: 2px;
        background-color: var(--brand-color);
        margin: 1px;
        transition: 0.2s;
    }
    .search-section__submit-search-btn:hover {
        background-color: var(--hover-brand-color);
    }
    #submit-search-btn-icon {
        width: 20px;
        height: 20px;
        fill: var(--vt-c-white);
    }
    .login-signup-section {
        display: flex;   
    }
</style>