<template>
  <input type="datetime-local"
   class="form-control"
   :tabindex="calcindex"
   :value="modelValue"
   @input="$emit('update:modelValue', $event.target.value)"/>
</template>

<script>
import {form} from './common'
export default form({
})
</script>
