<template>
  <input type="text"
   class="form-control"
   :tabindex="calcindex"
   :value="modelValue"
   @input="$emit('update:modelValue', $event.target.value)"
   @keydown.enter="enter"/>
</template>

<script>
import {form} from './common'
export default form({
})
</script>
