<template>
<div class="preview-page">
    <div class="parent-wrapper">
        <h5 class="person-title">Персональные данные</h5>
        <div v-if="parents.length !== 0" class="person-info">
            <div v-for="parent in parents" :key="parent.id">
                {{ parent.names }}, {{ parent.ages}} {{getAgeString(parent.ages)}}
            </div>
        </div>
    </div>
    <div class="child-wrapper">
        <h5 class="person-title">Дети</h5>
        <div v-if="children.length !== 0" class="person-info">
            <div class="children-item" v-for="child in children" :key="child.id">
                {{ child.names }}, {{ child.ages}} {{getAgeString(child.ages)}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    name: 'PreviewPage',
    computed: {
        ...mapState({
            parents: state => state.parent,
            children: state => state.child,
        }),
    }

}
</script>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex'
import { getAgeString } from '../helpers'
const store = useStore()

const checkStorageParent = ref(sessionStorage.getItem('parent') ? JSON.parse(sessionStorage.getItem('parent')) : [])
const checkStorageChild = ref(sessionStorage.getItem('child') ? JSON.parse(sessionStorage.getItem('child')) : [])

onMounted(function ()  {
    if (checkStorageParent.value.length !== 0 && checkStorageChild.value.length !== 0) {
        store.commit('getStore')
    }
})

</script>

<style lang="scss" scoped>
@import 'Styles/_var.scss';

.preview-page {
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding-top: 30px;

    .parent-wrapper,
    .child-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .person-title {
            font-size: 16px;
            font-weight: 500;
            color: $colorBlack;
        }

        .person-info {
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-size: 16px;
            font-weight: 700;
            color: $colorBlack;
        }

        .children-item {
            padding: 10px 20px;
            background-color: $colorBorderGray;
            width: fit-content;
        }
    }
}
</style>
