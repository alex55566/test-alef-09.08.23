<template>
    <div class="footer-block">
        all rights reserved
    </div>
</template>

<script>
    export default {
        name: 'FooterBlock'
    }
</script>

<style lang="scss" scoped>
@import 'Styles/_var.scss';
.footer-block {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    padding: 30px 0px;
    background: $colorGrey;
}
</style>