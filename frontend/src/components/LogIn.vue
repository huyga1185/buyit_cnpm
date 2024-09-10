<template>
    <div class="login-section">
        <h2>Đăng nhập</h2>
        <form @submit.prevent="handleLogin">
            <div class="login-section__items">            
                <input type="text" id="username" v-model="username" placeholder="Tên đăng nhập" class="item__username">
                <input type="password" v-model="password" placeholder="Mật khẩu" class="item__password" id="password">
                <button type="submit" class="item__submit-btn"  :disabled="isDisable" :style="{ cursor: pointer, background: colorBtn}">Đăng nhập</button>
                <p v-if="error" class="item__error"> {{ error }}</p>
                <div class="item__resetpwd">
                    <p>
                        <router-link to="/reset" class="item__link">Quên mật khẩu</router-link>
                    </p>
                </div>
                <div class="item__line">

                </div>
                <div class="item__signup">
                    <p>
                        <label for="signup">Bạn mới biết đến Buyit?</label>
                        <router-link to="/" class="item__link" id="signup"> Đăng ký</router-link>
                    </p>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
    import {ref, watch} from 'vue';
    const username = ref('');
    const password = ref('');
    const error = ref('');
    var isDisable = ref(true);
    var pointer = ref('not-allowed');
    var colorBtn = ref('var(--disable-brand-color)');


    const handleLogin = async () => {
        error.value = '';
        try {
            //example login logic
            if (username.value == 'user' && password.value == 'password') {
                alert('login successful!');
            } else {
                error.value = 'Invalid username or password';
            }
        } catch (err) {
            error.value = 'An error occurred during log-in';
        }
    }

    function toggleButton() {
        if (username.value != '' && password.value != '') {
            isDisable.value = false;
            pointer.value = 'pointer';
            colorBtn.value = 'var(--brand-color)';
        }
        else {
            isDisable.value = true;
            pointer.value = 'not-allowed';
            colorBtn.value = 'var(--disable-brand-color)';
        }
    }

    watch([username, password], () => {
        toggleButton();
    })

</script>

<style scoped>
    .login-section {
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 400px;
    }
    .login-section__items {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .item__link {
        text-decoration: none;
    }
    .item__submit-btn {
        outline: none;
        border: none;
        background-color: var(--brand-color);
        color: var(--vt-c-white);
    }
    #signup {
        color: var(--brand-color);
    }
</style>