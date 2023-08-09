<template>
    <button type="submit">
        Сохранить
    </button>
</template>

<script>
    export default {
        name: 'ButtonSave'
    }
</script>

<style lang="scss" scoped>
@import 'Styles/_var.scss';

button {
    max-width: 120px;
    padding: 10px 20px;
    border-radius: 100px;
    font-size: 14px;
    background: $colorPrimary;
    color: $colorWhite;
    border: none;
    cursor: pointer;
}

</style>