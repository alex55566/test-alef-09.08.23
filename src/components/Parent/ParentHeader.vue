<template>
<span class="parent-title">Персональные данные</span>
</template>

<script>
export default {
    name: 'ParentHeader'

}
</script>

<style lang="scss" scoped>
@import 'Styles/_var.scss';
.parent-title {
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    color: $colorBlack;
    padding-bottom: 10px;
}
</style>
