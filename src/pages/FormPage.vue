<template>
<form v-on:submit="sendData">
    <ParentData ref="parent"/>
    <ChildData ref="child"/>
    <ButtonSave />
</form>
</template>

<script>
import ParentData from 'Components/Parent/ParentData.vue';
import ChildData from 'Components/Child/ChildData.vue';
import ButtonSave from 'Components/ButtonSave.vue';
export default {
    name: 'FormPage',
    components: {
        ParentData,
        ChildData,
        ButtonSave
    },

}
</script>

<script setup>
import { ref } from 'vue';

const parent = ref(null)
const child = ref(null)

const sendData = (e) => {
    e.preventDefault()
      parent.value.updateData()
      child.value.updateData()
}

</script>

<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

</style>
