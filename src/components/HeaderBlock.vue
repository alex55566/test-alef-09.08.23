<template>
<div class="header-wrapper">
    <div class="header-block">
        <RouterLink to="/" class="left-side">
            <img src="../images/Header.png">
        </RouterLink>
        <div class="right-side">
            <RouterLink to="/" class="header-btn">
                Форма
            </RouterLink>
            <RouterLink to="/preview" class="header-btn">
                Превью
            </RouterLink>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'HeaderBlock'
}
</script>

<style lang="scss" scoped>
@import 'Styles/_var.scss';

.header-wrapper {
    border-bottom: 1px solid $colorHeaderLine;
}

.header-block {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1180px;
    width: 100%;
    padding: 25px 0px;


    .left-side,
    .right-side {
        width: 50%;
    }

    .right-side {
        display: flex;
        gap: 25px;
        .header-btn {
            font-size: 14px;
        }
    }

    .router-link-exact-active {
        color: $colorPrimary;
    }
}
</style>
