<template>
    <div class="login-section">
        <h2>Đăng nhập</h2>
        <form @submit.prevent="handleLogin">
            <div class="login-section__items">            
                <input type="text" id="username" v-model="username" placeholder="Tên đăng nhập" class="item__username">
                <input type="password" v-model="password" placeholder="Mật khẩu" class="item__password" id="password">
                <button type="submit" class="item__submit-btn"  :disabled="isDisable" >Đăng nhập</button>
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
                        <router-link class="item__link" id="signup"> Đăng ký</router-link>
                    </p>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue';
    const username = ref('');
    const password = ref('');
    const error = ref('');
    const isDisable = ref(true);

    const handleLogin = async () => {
        error.value = '';
        try {
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
        if (username.value != '' && password.value != '')
            isDisable = false;
    }

    function showText() {
        if (username.value != '')
            console.log(username.value);
    }

    watch([username, password], () => {
        toggleButton();
        showText();
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
    #signup {
        color: rgb(218, 28, 92);
    }
</style>