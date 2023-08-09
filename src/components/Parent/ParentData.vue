<template>
<div class="parent-wrapper">
    <ParentHeader/>
    <Info @update="updateName" type="text" name="Имя" placeholder="Введите имя" number='0' />
    <Info @update="updateAge" type="number" name="Возраст" placeholder="Введите возраст" number='0' />
</div>
</template>

<script>
import ParentHeader from 'Components/Parent/ParentHeader.vue';
import Info from 'Components/Info.vue';
export default {
    name: 'ParentData',
    components: {
        ParentHeader,
        Info
    },

}
</script>

<script setup>
import { ref } from 'vue';
import { update } from '../../helpers';
import { useStore } from 'vuex'
const store = useStore()
const names = ref([])
const ages = ref([]);
defineExpose({
    updateData,
});

function updateData() {
    store.commit('addParent', {names: names.value, ages: ages.value })
}

function updateName(val) {
    update(val,names.value)
}

function updateAge(val) {
    update(val,ages.value)
}
</script>



<style lang="scss" scoped>
@import 'Styles/_var.scss';

.parent-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding-top: 30px;  
}
</style>
