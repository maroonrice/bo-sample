<template>
  <button
   type="button"
   :tabindex="calcindex"
   :class='["btn", "btn-" + color]'
   ><slot></slot></button>
</template>

<script>
import {element} from './common'
export default element({
  props: {
    color: {
      type: String,
      default: "primary"
    }
  }
})
</script>
