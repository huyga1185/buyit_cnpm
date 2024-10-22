<script setup>
    import IconFacebook from './icons/IconFacebook.vue';
    import IconInstagram from './icons/IconInstagram.vue';
    import IconBell from './icons/IconBell.vue';
    import IconMagnifyingglass from './icons/IconMagnifyingglass.vue';
    import IconCircleQuestion from './icons/IconCircleQuestion.vue';
    import IconCircleUser from './icons/IconCircleUser.vue';
</script>

<template>
    <div class="wrapper">
        <header class="header">
            <section class="navbar">
                <div class="container">
                    <div class="navbar__left-section col-xl-2-3 col-lg-3 col-md-4 col-sm-5 col-esm-6">
                        <div class="left-section__seller-centre col-xl-6 col-lg-6 col-md-6 col-sm-6 col-esm-6">
                            <router-link to="/" class="seller-centre__link">Kênh người bán</router-link>
                        </div>
                        <div class="left-section__line col">
                            |
                        </div>
                        <div class="navbar__social-media col-xl-5 col-lg-5 col-md-5 col-sm-5 col-esm-5">
                            <span class="social-media__title col-xl-6 col-lg-6 col-md-6 col-sm-6">Kết nối</span>
                            <a href="/" class="social-media__link col-xl-3 col-lg-3 col-md-3 col-sm-3"><IconFacebook class="link__icon"/></a>
                            <a href="/" class="social-media__link col-xl-3 col-lg-3 col-md-3 col-sm-3"><IconInstagram class="link__icon"/></a>
                        </div>
                    </div>
                    <div class="navbar__right-section col-xl-2-3 col-lg-4 col-md-5 col-sm-7 col-esm-6">
                        <div class="right-section__notification col-xl-5 col-lg-5 col-md-5 col-sm-5 col-esm-5">
                            <router-link to="/notification" class="notification__link">
                                <IconBell class="link__icon"/>
                                <span class="link__title">Thông báo</span>
                            </router-link>  
                            <div class="notification__popup">
                                    <img src="../assets/empty_notification.png" alt="empty_notification" class="empty_notification-img">
                                    <span class="empty_notification-des">Chưa có thông báo</span>
                            </div>
                        </div>
                        <div class="right-section__help col-xl-4 col-lg-4 col-md-4 col-sm-4 col-esm-4">
                            <router-link to="/" class="help__link">
                                <IconCircleQuestion class="link__icon"/>
                                <span class="link__title">Hỗ trợ</span>
                            </router-link>
                        </div>
                        <div class="right-section__user col-xl-3 col-lg-3 col-md-3 col-sm-3 col-esm-3">
                            <router-link to="/user" class="user__link">
                                <IconCircleUser class="link__icon"/>
                                <span class="link__title">Your_username</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="main-header">
                <div class="container">
                    <div class="main-header__wrapper">
                        <div class="header__wrapper col-xl-2-7 col-lg-4 col-md-5 col-sm-6 col-esm-6">
                            <router-link to="/" class="header__logo col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <img src="../assets/logo.jpg" alt="buyit" class="logo__img">
                            </router-link>
                            <div class="header__line col">
                                |
                            </div>
                            <div class="header__title col-xl-5 col-lg-5 col-md-5 col-sm-5">
                                <span>Giỏ hàng</span>
                            </div>
                        </div>
                        <div class="header__search-bar-wrapper col-xl-5">
                            <form action="" class="search-bar__form col-12">
                                <input type="text" class="form__searchbox col-10" placeholder="Bạn muốn mua gì hôm nay?">
                                <button class="form__submit-btn col-2"> <IconMagnifyingglass style="height: 1.4rem; fill: var(--vt-c-white);"/> </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    </div>
</template>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        /* margin-bottom: 20px; */
    }
    .navbar {
        background-image: linear-gradient(0, rgb(235, 76, 147), var(--brand-color));
    }
    .navbar__left-section,
    .navbar__social-media,
    .navbar__right-section,
    .right-section__notification,
    .notification__link,
    .right-section__help,
    .help__link,
    .right-section__user,
    .user__link {
        display: flex;
    }
    .seller-centre__link,
    .left-section__line,
    .social-media__title,
    .link__title {
        font-size: 1.3rem;
        line-height: 1.6rem;
        color: var(--vt-c-white);
    }
    .seller-centre__link,
    .notification__link,
    .help__link,
    .user__link {
        text-decoration: none;
    }
    .right-section__notification {
        position: relative;
    }
    .right-section__notification:hover .notification__popup {
        display: flex;
    }
    .right-section__notification::before {
        content: " ";
        position: absolute;
        width: 80px;
        height: 20px;
        background-color: transparent;
        top: 104%;
    }
    .notification__popup::before {
        content: " ";
        position: absolute;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 15px solid var(--vt-c-white);
        /* box-shadow: 2px 3px 2px var(--vt-c-text-dark-3); */
        top: -4%;
        right: 5%;
        border-radius: 2px;
        z-index: 1002;
    }
    .notification__popup::after {
        content: " ";
        position: absolute;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 15px solid var(--vt-c-text-dark-3);
        /* box-shadow: 2px 3px 2px var(--vt-c-text-dark-3); */
        top: -4%;
        right: 5%;
        border-radius: 2px;
        z-index: 1001;
    }
    .notification__popup {
        display: none;
        /* display: flex; */
        position: absolute;
        top: 180%;
        right: 10%;
        width: 450px;
        height: 350px;
        background-color: var(--vt-c-white  );
        border-radius: 2px;
        box-shadow: 1px 1px 1px var(--vt-c-text-dark-2);
        border: 1px solid var(--vt-c-text-dark-3);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform-origin: 90% top;
        animation: popUpScale ease 0.5s;
        z-index: 1001;
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
    .link__icon {
        margin-right: 5px;
    }
    .main-header {
        height: 10rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }
    .main-header__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header__wrapper {
        display: flex;
        flex: 1;
        align-items: center;
    }
    .header__line {
        font-size: 3.5rem;
        line-height: 4rem;
        font-weight: 50;
        color: var(--brand-color);
    }
    .header__title span {
        font-size: 2.5rem;
        line-height: 3rem;
        color: var(--brand-color);
    }
    .link__icon {
        fill: var(--vt-c-white);
        height: 1.6rem;
    }
    .logo__img {
        height: 5rem;
    }
    .search-bar__form {
        display: flex;
        height: 4rem;
    }
    .form__searchbox {
        /* height: 4rem; */
        flex: 1;
        border: 2px solid var(--brand-color);
        border-radius: 1px;
        font-size: 2rem;
        line-height: 2.5 rem;
    }
    .form__submit-btn {
        height: 4rem;
        /* flex: 1; */
        border: none;
        border-radius: 0px 1px 1px 0px;
        background-color: var(--brand-color);
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>