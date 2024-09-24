<script setup>
    import IconFacebook from './icons/IconFacebook.vue';
    import IconInstagram from './icons/IconInstagram.vue';
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="row customer-support">
                        <h5 class="customer-support-header">Chăm sóc khách hàng</h5>
                        <router-link to="/" class="customer-support-link">Trung tâm trợ giúp</router-link>
                        <router-link to="/" class="customer-support-link">Hướng dẫn mua hàng</router-link>
                        <router-link to="/" class="customer-support-link">Hướng dẫn bán hàng</router-link>
                        <router-link to="/" class="customer-support-link">Thanh toán</router-link>
                        <router-link to="/" class="customer-support-link">Vận chuyển</router-link>
                        <router-link to="/" class="customer-support-link">Trả hàng & Hoàn tiền</router-link>
                        <router-link to="/" class="customer-support-link">Chăm sóc khách hàng</router-link>
                        <router-link to="/" class="customer-support-link">Chính sách bảo hành</router-link>
                    </div>
                </div>
                <div class="col">
                    <div class="row about-us">
                        <h5 class="about-us-header">Về Buyit</h5>
                        <router-link to="/" class="about-us-link">Giới thiệu về Buyit</router-link>
                        <router-link to="/" class="about-us-link">Tuyển dụng</router-link>
                        <router-link to="/" class="about-us-link">Kênh người bán</router-link>
                        <router-link to="/" class="about-us-link">Chính sách bảo mật</router-link>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <h5>Thanh Toán</h5>
                        <div class="row payment-methods">
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="../assets/paymentunit/americanexpress.png" alt="americanexpress" class="payment-img">
                            </div>
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="../assets/paymentunit/mastercard.png" alt="mastercard" class="payment-img">
                            </div>
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="../assets/paymentunit/visa.png" alt="visa"  class="payment-img">
                            </div>
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="../assets/paymentunit/cod.png" alt="cod" class="payment-img">
                            </div>
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="../assets/paymentunit/jcb.png" alt="jcb" class="payment-img">
                            </div>
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="../assets/paymentunit/tragop.png" alt="tragop" class="payment-img">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <h5>Đơn vị vận chuyển</h5>
                        <div class="row">
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="..//assets/shippingunit/ahamove.png" alt="ahamove" class="shipping-unit-img">
                            </div>
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="..//assets/shippingunit/be.png" alt="be" class="shipping-unit-img">
                            </div>
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="..//assets/shippingunit/bestexpress.png" alt="bestexpress" class="shipping-unit-img">
                            </div>
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="..//assets/shippingunit/ghn.png" alt="ghn" class="shipping-unit-img">
                            </div>
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="..//assets/shippingunit/ghtk.png" alt="ghtk" class="shipping-unit-img">
                            </div>
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="..//assets/shippingunit/grabexpress.png" alt="grabexpress" class="shipping-unit-img">
                            </div>
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="..//assets/shippingunit/j&t.png" alt="j&t" class="shipping-unit-img">
                            </div>
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="..//assets/shippingunit/ninjavan.png" alt="ninjavan" class="shipping-unit-img">
                            </div>
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="..//assets/shippingunit/vnpost.png" alt="vnpost" class="shipping-unit-img">
                            </div>
                            <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                <img src="..//assets/shippingunit/vtpost.png" alt="vtpost" class="shipping-unit-img">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <h5>Theo dõi chúng tôi trên</h5>
                        <a href="/" class="social-media-link"><IconFacebook class="social-media-icon"/> Facebook</a>
                        <a href="/" class="social-media-link"><IconInstagram class="social-media-icon"/> Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        background-color: var(--vt-c-text-dark-2);
        padding-bottom: 50px;
        padding-top: 50px;
        /* min-height: 100vh; */
    }
    .payment-img,
    .shipping-unit-img {
        padding: 3px;
        margin-bottom: 10px;
        background-color: var(--vt-c-white);
        box-shadow: 1px 3px 3px var(--vt-c-text-dark-3);
    }
    .customer-support-link,
    .about-us-link,
    .social-media-link {
        text-decoration: none;
        line-height: 1.4rem;
        font-size: 1.4rem;
        color: var(--vt-c-text-light-2);
        transition: 0.2s;
        margin-top: 15px;
    }

    .customer-support-link:hover,
    .about-us-link:hover,
    .social-media-link:hover {
        color: var(--brand-color);
    }
    .social-media-icon  {
        fill: var(--vt-c-text-light-2);
        width: 15px;
        height: 15px;
    }
</style>
