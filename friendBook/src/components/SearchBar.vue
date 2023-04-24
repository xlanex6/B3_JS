<template>
    <input type="text" placeholder="recherche" class="w-1/2 px-2 py-1 mx-4 my-6 border rounded-md border-neutral-200 outline-purple-500" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    >

</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}

</script>


