<template>
<div class="container">
    <div class="block">
        <HeaderBlock />
        <div class="main">
            <router-view />
        </div>
        <FooterBlock />
    </div>
</div>
</template>

<script>
import HeaderBlock from 'Components/HeaderBlock.vue';
import FooterBlock from 'Components/FooterBlock.vue';
export default {
    name: 'MainPage',
    components: {
        HeaderBlock,
        FooterBlock,
    },
}
</script>

<style lang="scss" scoped>
@import 'Styles/_var.scss';

.container {
    display: flex;
    justify-content: center;
    height: 100%;
}

.block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    // max-width: 380px;
    width: 100%;
    min-height: 100%;
}


.main {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: 10px;
    margin: 0 auto;
    max-width: 650px;
    width: 100%;
}
</style>
