<script setup>
    import { ref, watch } from 'vue';
    import IconArrowBack from './icons/IconArrowBack.vue';

    var isDisable = ref(true);
    var cursor = ref('not-allowed');
    var color = ref('var(--disable-brand-color)');
    var error = ref('');
    var mail = ref('');

    const handleReset = async () => {
        error.value = '';
        try {
            //example reset logic
            if (mail.value == 'user') {
                alert('account was found!');
            } else {
                error.value = 'account not found';
            }
        } catch (err) {
            error.value = 'An error occurred during reset-password';
        }
    }

    function toggleButton() {
        if (mail.value != '') {
            isDisable = false;
            cursor = 'pointer';
            color = 'var(--brand-color)';
        } else {
            isDisable = true;
            cursor = 'not-allowed';
            color = 'var(--disable-brand-color)';
        }
    }
    watch(mail, () => {
        toggleButton();
    })
</script>

<template>
    <div class="body__forgotpw-section">
        <div class="body__navbar">
            <div class="body__back-func">
                <router-link to="/">
                    <icon-arrow-back id="icon"/>
                </router-link>
            </div>
            <div class="body__title-wrapper">
                <div class="body__title">
                    <h3>Đặt lại mật khẩu</h3>
                </div>
            </div>
        </div>
        <form class="body__forgotpw" @submit.prevent="handleReset()">
            <div class="body__forgotpw-wrapper">
                <input type="text" placeholder="Email" class="body__forgotpw-input" v-model="mail">
            </div>
            <button type="submit" class="body__forgotpw-btn" :disabled="isDisable" v-bind:style="{cursor: cursor, background: color}">TIẾP THEO</button>
            <p v-if="error" class="item__error"> {{ error }}</p>
        </form>
    </div>
</template>

<style scoped>
    #icon {
        width: 20px;
        height: 20px;
        fill: black;
    }
</style>