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
            isDisable.value = false;
            cursor.value = 'pointer';
            color.value = 'var(--brand-color)';
        } else {
            isDisable.value = true;
            cursor.value = 'not-allowed';
            color.value = 'var(--disable-brand-color)';
        }
    }
    watch(mail, () => {
        toggleButton();
    })
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <div class="body__forgotpw-section">
                <div class="body__navbar">
                    <div class="body__back-func">
                        <router-link to="/login">
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
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        display: flex;
        justify-content: center;
        padding: 150px 0 150px;
    }
    #icon {
        width: 20px;
        height: 20px;
        fill: var(--brand-color);
    }
    .body__content {
    margin: 0 auto;
    width: 1040px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.body__forgotpw-section {
    display: flex;
    flex-direction: column;
    width: 500px;
    min-height: 275px;
    border-radius: 4px;
    box-shadow: 0 3px 10px #00000024;
    box-sizing: border-box;
}

.body__navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
}

.body__back-func {
    min-width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fa-solid {
    color: var(--primary-color);
    font-size: 2rem;
}

.body__title-wrapper {
    flex: 1;
    display: flex;
    justify-content: left;
}

.body__title {
    width: calc(100% - 80px);
    display: flex;
    justify-content: center;
}

.body__title h3 {
    font-size: 2rem;
    font-weight: 500;
}

.body__forgotpw {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 80px 64px;
}

.body__forgotpw-wrapper {
    min-height: 60px;
}

.body__forgotpw-input {
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 1.4rem;
    line-height: 1.4rem;
}

.body__forgotpw-btn {
    background-color: var(--brand-color);
    border: none;
    color: var(--vt-c-white);
    height: 40px;
    cursor: pointer;
    font-size: 1.6rem;
    transition: 0.2s;
}

.body__forgotpw-btn:hover {
    background-color: var(--disable-brand-color);
}
</style>