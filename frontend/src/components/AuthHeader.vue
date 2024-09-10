<script setup>

</script>

<template>
    <header>
        <div class="container">
            <div class="header-logo-section">
                <div class="buyit-logo">
                    <img src="..//assets/logo.jpg" alt="buyit-logo" class="buyit-logo-icon">
                </div>
                <h1 class="header-title">Đăng nhập</h1>
            </div>
            <div class="customer-support">
                <a href="/" class="support-link">Bạn cần giúp đỡ?</a>
            </div>
        </div>
    </header>
</template>

<style scoped>
    header {
        padding: 20px 0 20px 0;
        /* background-color: var(--vt-c-text-dark-2); */
        box-shadow: 0 0 0 2px var(--vt-c-text-dark-2);
    }
    .container {
        display: flex;
        justify-content: space-between;
    }
    .header-logo-section {
        display: flex;
        align-items: center;
    }
    .header-title {
        height: 2.5rem;
        margin-left: 10px;
    }
    .buyit-logo-icon {
        height: 50px;
    }
    .customer-support {
        display: flex;
        align-items: center;
    }
    .support-link {
        text-decoration: none;
        color: var(--brand-color);
        line-height: 1.4rem;
        font-size: 1.4rem;
    }

</style>                                                                            