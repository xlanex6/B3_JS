<template>
  <button class="px-4 py-1" 
  
  :class="{'bg-red-500': warning, 'bg-green-500': success}"
  
  >
    <slot/>  
    <!-- text ecrit depuis le parent -->
  </button>
</template>

<script>
// import { computed } from '@vue/reactivity';

export default {
  props: {
    size: {
      type: String,
      validator: (value) => {
        return ['S','M','XL'].includes(value)
      },
      default: 'M'
    },
    warning: {
      type: Boolean,
    },
    success: {
      type: Boolean,
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
