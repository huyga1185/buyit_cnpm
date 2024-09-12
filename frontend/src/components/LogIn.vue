
<script setup>
    import IconCircleXMark from './icons/IconCircleXMark.vue';
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
                error.value = 'Sai tên tài khoản hoặc mật khẩu.';
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

<template>
    <div class="bg">
        <div class="container">
            <div class="wrapper row">
                <div class="logo-section col-8">
                    <img src="../assets/logo.jpg" alt="buyitlogo" class="logo-section__img">
                </div>
                <div class="login-section col-4">
                    <h1 class="login-section__header">Đăng nhập</h1>
                    <form @submit.prevent="handleLogin">
                        <div class="login-section__items">            
                            <input type="text" id="username" v-model="username" placeholder="Tên đăng nhập" class="item__username">
                            <input type="password" v-model="password" placeholder="Mật khẩu" class="item__password" id="password">
                            <button type="submit" class="item__submit-btn"  :disabled="isDisable" :style="{ cursor: pointer, background: colorBtn}">Đăng nhập</button>
                            <div v-if="error" class="item__error"> 
                                <IconCircleXMark class="item__error-icon"/>
                                {{ error }}
                            </div>
                            <div class="item__resetpwd">
                                <p>
                                    <router-link to="/reset" class="item__link">Quên mật khẩu</router-link>
                                </p>
                            </div>
                            <div class="item__line">

                            </div>
                            <div class="item__signup-section">
                                <p class="item__signup">
                                    <label for="signup" class="signup__title">Bạn mới biết đến Buyit?</label>
                                    <router-link to="/signup" class="item__link" id="signup"> Đăng ký</router-link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .bg {
        background-color: var(--brand-color);
    }
    .wrapper {
        display: flex;
        padding: 50px 0 50px;
        align-items: center;
    }
    .logo-section__img {
        height: 350px;
    }
    .login-section {
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        background-color: var(--vt-c-white);        
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
        padding: 40px 20px 40px 20px;
    }
    .login-section__header {
        font-weight: 400;
        margin-bottom: 20px;
    }
    .login-section__items {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .item__username,
    .item__password {
        line-height: 1.4rem;
        font-size: 1.4rem;
        padding: 0 10px 0 10px;
        border-radius: 2px;
        border: 1px solid var(--vt-c-text-dark-3);
        outline: none;
        margin-bottom: 20px;
        height: 40px;
        
    }
    .item__username:focus,
    .item__password:focus {
        border: 1px solid  var(--vt-c-black-mute);
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1); 
    }
    
    .item__submit-btn {
        outline: none;
        border: none;
        background-color: var(--brand-color);
        color: var(--vt-c-white);
        font-size: 1.4rem;
        line-height: 1.4rem;
        height: 40px;
        margin-bottom: 20px;
        border-radius: 2px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    }
    .item__link {
        text-decoration: none;
        font-size: 1.4rem;
        line-height: 1.4rem;
        color: var(--vt-c-text-link-1);
        margin: 0 0 10px 0;   
    }
    .item__signup-section {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .signup__title {
        font-size: 1.4rem;
        line-height: 1.4rem;
    }
    #signup {
        color: var(--brand-color);
    }
    .item__error {
        padding: 10px;
        border: 1px solid rgb(249, 214, 218);
        background-color: rgb(255, 249, 249);
        font-size: 1.4rem;
        line-height: 1.4rem;
        margin-bottom: 15px;
    }
    .item__error-icon {
        height: 20px;
        width: 20px;
        fill: rgb(255, 66, 79);
        margin-right: 10px;
    }
</style>