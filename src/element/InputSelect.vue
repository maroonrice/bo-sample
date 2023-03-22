<template>
  <select
   class="form-control"
   :value="modelValue"
   :tabindex="calcindex"
   @input="$emit('update:modelValue', $event.target.value)">
    <option v-for="(value, key) in options" :value="key">{{ value }}</option>
  </select>
</template>

<script>
import {form} from './common'
export default form({
  props: {
    'options': {
    },
  }
})
</script>
