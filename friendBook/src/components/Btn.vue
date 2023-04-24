<template>
  <button class="px-4 py-1 bg-gray-100 hover:bg-slate-200" :style="sizeStyle">
    <slot/>  
    <!-- text ecrit depuis le parent -->
  </button>
</template>

<script>
import { computed } from '@vue/reactivity';

export default {
  props: {
    size: {
      type: String,
      validator: (value) => {
        return ['S','M','XL'].includes(value)
      },
      default: 'M'
    }
  },
  computed: {
    sizeStyle() {
      const baseStyle = {
        'S': {
          fontSize: "12px",
          padding: "6px 12px"
        },
        'M': {
          fontSize: "18px",
          padding: "12px 18px"
        },
        'XL': {
          fontSize: "24px",
          padding: "18px 24px"
        },
      }

      return baseStyle[this.size]
    }
  }
}
</script>
<style>


</style>
