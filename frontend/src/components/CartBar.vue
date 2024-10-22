<script setup>

</script>

<template>
    <div class="cart__bar-wrapper">
        <div class="container bar-wrapper">
            <div class="bar__main row">
                <div class="main__check-all col">
                    <input type="checkbox" name="checkAll" id="checkAll">
                </div>
                <div class="main__item-name col-7">
                    <label class="item-name">Sản phẩm</label>
                </div>
                <div class="main__item-price col-1">
                    <label class="item-price">Đơn giá</label>
                </div>
                <div class="main__item-qty col-1">
                    <div class="item-qty">Số lượng</div>
                </div>
                <div class="main__item-total-price col-1">
                    <div class="item-total-price">Thành tiền</div>
                </div>
                <div class="main__action col-1">
                    <div class="action">Thao tác</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .bar-wrapper {
        background-color: var(--vt-c-white);
        padding: 20px 0 20px;
        border-radius: 4px;
    }
    .main__check-all {
        display: flex;
        justify-content: end;
    }
    .item-price,
    .item-name,
    .item-qty,
    .item-total-price,
    .action {
        font-size: 1.4rem;
        line-height: 1.6rem;
    }
</style>