<template>
<div class="info">
    <div>{{ props.name }}</div>
    <input :type=props.type v-model="input" @input="$emit('update', {id: props.number, value: $event.target.value})" :placeholder=props.placeholder />
</div>
</template>

<script>
export default {

}
</script>

<script setup>
import { onMounted, ref, computed } from 'vue';
const input = ref("");
const props = defineProps({
    name: String,
    placeholder: String,
    number: String,
    type: String,
})
</script>

<style lang="scss" scoped>
@import 'Styles/_var.scss';

.info {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 260px;
    padding: 8px 16px;
    border: 1px solid $colorBorderGray;

    div {
        font-size: 13px;
        line-height: 120%;
        color: $colorGreyText;
    }

    input {
        border: none;
        padding: unset;

        &::placeholder {
            font-size: 13px;

        }

        &:focus {
            outline: none;
        }
    }
}
</style>
