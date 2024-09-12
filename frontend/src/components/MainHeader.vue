<script setup>
    import IconFacebook from './icons/IconFacebook.vue';
    import IconInstagram from './icons/IconInstagram.vue';
    import IconMagnifyingglass from './icons/IconMagnifyingglass.vue';
    import IconCartshopping from './icons/IconCartshopping.vue';
    import IconBell from './icons/IconBell.vue';
</script>

<template>
    <header class="header">
        <div class="container">
            <nav class="navbar">
                <ul class="navbar__list seller_option col-2-3">
                    <li class="navbar__item">
                        <router-link to="/" class="navbar__item-link link-hover">Kênh người bán</router-link>
                    </li>
                    <li class="navbar__item">
                        <span id="line">
                            |
                        </span>
                    </li>
                    <li class="navbar__item social-media-link col-5">
                        <span class="txt">Kết nối</span>
                        <a href="" class="navbar__item-icon "> <IconFacebook class="navbar__item-icon link-hover"/> </a>
                        <a href="" class="navbar__item-icon "> <IconInstagram class="navbar__item-icon link-hover"/> </a>
                    </li>
                </ul>

                <ul class="navbar__list login-signup-section col-2-3">
                    <li class="navbar__item notification_section">
                        <span class="navbar__item-link"><IconBell class="navbar__item-icon"/>Thông báo</span>
                        <div class="notification_popup">
                            <img src="../assets/empty_notification.png" alt="empty_notification" class="empty_notification-img">
                            <span class="empty_notification-des">Chưa có thông báo</span>
                        </div>
                    </li>
                    <li class="navbar__item">
                        <span id="line">|</span>
                    </li>
                    <li class="navbar__item ">
                        <router-link to="/signup" class="navbar__item-link link-hover">Đăng ký</router-link>
                    </li>
                    <li class="navbar__item">
                        <span id="line">|</span>
                    </li>
                    <li class="navbar__item ">
                        <router-link to="/login" class="navbar__item-link link-hover">Đăng nhập</router-link>
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
                                <input class="search-section__input" placeholder="Hôm nay bạn muốn tìm mua gì?" v-model="search_keyword">
                                <div class="search-section__history">
                                    <ul class="history__items">
                                        <li class="history__item">
                                            <router-link to="/" class="history__search-query-link">example.1 </router-link>
                                        </li>
                                        <li class="history__item"><router-link to="/" class="history__search-query-link">example.2</router-link></li>
                                        <li class="history__item"><router-link to="/" class="history__search-query-link">example.3</router-link></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <button type="submit" class="search-section__submit-search-btn">
                                <IconMagnifyingglass id="submit-search-btn-icon"/>
                            </button>
                        </form>

                    </div>
                </div>

                <div class="header-with-search__cart col-1">
                    <div class="cart-quick-view">
                        <router-link to="cart" > <IconCartshopping class="cart__icon" /> </router-link>
                        <div class="cart__pop-up">
                            <img src="../assets/empty_cart.png" alt="empty-cart" class="empty_cart-img">
                            <span class="empty_cart_des">Chưa có sản phẩm</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>
</template>

<style scoped>
    .header {
        background-image: linear-gradient(0, rgb(218, 40, 120), var(--brand-color));
        position: sticky;
        top: 0;
        z-index: 999;
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
        fill: var(--vt-c-white);
    }
    .navbar__item-link {
        text-decoration: none;
        color: var(--vt-c-white);
        font-size: 1.4rem;
        line-height: 1.4rem;
        transition: 0.2s;
    }
    .link-hover:hover {
        color: var(--vt-c-text-dark-3);
        fill: var(--vt-c-text-dark-3);
    }
    .header-with-search__cart {
        display: flex;
        justify-content: center;
        position: relative;
    }
    .cart__icon {
        width: 25px;
        height: 25px;
        fill: var(--vt-c-white);
        /* position: relative; */
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
        position: relative;
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
        justify-content: space-around;
    }
    #line {
        color: var(--vt-c-text-dark-2);
        font-size: 1.4rem;
        line-height: 1.4rem;
        cursor: default;
    }
    .txt {
        font-size: 1.4rem;
        line-height: 1.4rem;
        color: var(--vt-c-white);
        cursor: default;
    }
    .seller_option {
        display: flex;
        justify-content: space-around;
    }
    .social-media-link {
        justify-content: space-between;
    }
    .cart__pop-up {
        display: none;
        position: absolute;
        top: 140%;
        right: 30%;
        min-width: 450px;
        min-height: 250px;
        background-color: var(--vt-c-white);
        border-radius: 2px;
        box-shadow: 1px 1px 1px var(--vt-c-text-dark-3);
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transform-origin: 95% top;
        animation: popUpScale ease 0.5s;
        z-index: 1000;
    }
    .empty_cart-img {
        height: 150px;
        margin-bottom: 10px;
    }
    .empty_cart_des {
        font-size: 1.4rem;
        line-height: 1.4rem;
        color: var(--vt-c-black-soft);
    }
    .cart__pop-up::after {
        content: " ";
        position: absolute;
        min-width: 200px;
        min-height: 20px;
        top: -5%;
        right: -1%;
        background-color: transparent;
    }
    .cart__pop-up::before {
        content: " ";
        position: absolute;
        /* background-color: red; */
        top: -4%;
        right: 0%;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 15px solid var(--vt-c-white);
        border-radius: 1px;
    }
    .cart-quick-view:hover .cart__pop-up,
    .cart-quick-view:focus-within .cart__pop-up {
        display: flex;
    }
    .notification_section {
        display: flex;
        cursor: pointer;
        position: relative;
    }
    .notification_popup {
        display: none;
        position: absolute;
        top: 165%;
        right: 0%;
        width: 450px;
        height: 350px;
        background-color: var(--vt-c-white);
        border-radius: 2px;
        box-shadow: 1px 1px 1px var(--vt-c-text-dark-2);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform-origin: 90% top;
        animation: popUpScale ease 0.5s;
        z-index: 1001;
    }
    .notification_popup::after {
        content: " ";
        position: absolute;
        min-width: 100px;
        min-height: 30px;
        top: -5%;
        right: -0%;
        background-color: transparent;
    }
    .notification_popup::before {
        content: " ";
        position: absolute;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 15px solid var(--vt-c-white);
        top: -3.33337%;
        right: 3%;
        border-radius: 2px;
    }
    .empty_notification-img {
        height: 150px;
        margin-bottom: 10px;
    }
    .empty_notification-des {
        color: var(--vt-c-black-soft);
        font-size: 1.4rem;
        line-height: 1.4rem;
    }
    .notification_section:hover .notification_popup,
    .notification_section:focus-within .notification_popup {
        display: flex;
    }
    .navbar__item-link:hover .navbar__item-icon,
    .notification_section:hover .navbar__item-icon,
    .notification_section:hover .navbar__item-link {
        fill: var(--vt-c-text-dark-3);
        color: var(--vt-c-text-dark-3);
    }
    .search-section__history {
        display: none;
        position: absolute;
        background-color: var(--vt-c-white);
        width: 92%;
        top: 110%;
        border-radius: 2px;
        box-shadow: 1px 1px 1px var(--vt-c-text-dark-2);
        z-index: 1000;
        cursor: pointer;
    }
    .history__items {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .history__item {
        width: 100%;
        min-height: 35px;
        display: flex;
        align-items: center;
        padding-left: 20px;
    }
    .history__item:hover {
        background-color: var(--vt-c-text-dark-2);
    }
    .history__search-query-link {
        color: var(--vt-c-black-mute);
        text-decoration: none;
        font-size: 1.4rem;
        line-height: 1.4rem;
    }
    .search-section__input:focus + .search-section__history {
        display: block;
    }
</style>