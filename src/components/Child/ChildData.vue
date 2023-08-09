<template>
<div class="child-wrapper">
    <div class="child-wrapper__header">
        <div :class="[{'is-visible': showInputs}, 'is-hidden']">
            <ChildHeader />
        </div>
        <button v-if="showBtn" @click="showFields">
            <svg class="logo-plus" style="width: 24px; height: 24px;">
                <use xlink:href="../../images/sprite.svg#plus"></use>
            </svg>
            <span>Добавить ребенка</span>
        </button>
    </div>
    <div class="child-wrapper__item" v-if="showInputs">
        <div v-for="item in quantity.slice(0,currentQuantity)" :key="item.id" class="child-wrapper__inner" :class="'inner-'+item.id">
            <div class="child-wrapper__inner--item" v-if="item.show">
            <Info @update="updateName" type="text" name="Имя" placeholder="Введите имя" :number=item.id />
            <Info @update="updateAge" type="number" name="Возраст" placeholder="Введите возраст" :number=item.id />
            </div>
            <button @click="hideRow(item)">Удалить</button>
        </div>
    </div>
</div>
</template>

<script>
import ChildHeader from 'Components/Child/ChildHeader.vue';
import Info from 'Components/Info.vue';
import { update } from '../../helpers';
import {
    mapState
} from 'vuex';
export default {
    name: 'ChildtData',
    components: {
        ChildHeader,
        Info
    },
    computed: {
        ...mapState({
            children: state => state.child,
            maxRowLength: state => state.maxRowLength,
            quantity: state => state.quantity,
        }),
    }

}
</script>

<script setup>
import {
    ref
} from 'vue';
import { useStore } from 'vuex'
const store = useStore()
let currentQuantity = ref(0);
const showInputs = ref(false);
let showBtn = ref(true);
const names = ref([])
const ages = ref([]);
defineExpose({
    updateData,
});

function updateData() {
    store.commit('addChild', {names: names.value, ages: ages.value })
}

function updateName(val) {
    update(val,names.value)
}

function updateAge(val) {
    update(val,ages.value)
}

function showFields() {
    showInputs.value = true
    store.commit('showRow')
    currentQuantity.value +=1
    if (currentQuantity.value === 5) {
        showBtn.value = false
    }
 
}

function hideRow(el) {
    store.commit('hideRow', el)
    currentQuantity.value -=1
    names.value = names.value.filter(elem => elem.id !== el.id)
    ages.value = ages.value.filter(elem => elem.id !== el.id)
    showBtn.value = true
}
</script>

<style lang="scss" scoped>
@import 'Styles/_var.scss';

.child-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .is-hidden {
            visibility: hidden;
        }

        .is-visible {
            visibility: visible;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: $colorPrimary;
            background: unset;
            border: 2px solid $colorPrimary;
            border-radius: 100px;
            padding: 10px 20px;
            cursor: pointer;
        }
    }

    &__item {
        display: flex;
        flex-direction: column;
        gap: 15px;

    }

    &__inner {
        display: flex;
        justify-content: space-between;
        width: 100%;

        button {
            background: unset;
            border: unset;
            color: $colorPrimary;
            cursor: pointer;
        }

        &--item {
            display: flex;
            gap: 15px;
        }
    }
}
</style>
