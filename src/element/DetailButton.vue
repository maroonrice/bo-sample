<template>
  <button
   type="button"
   :tabindex="calcindex"
   :class='["btn", "btn-" + color]'
   @click="detail"
   ><span class="bi bi-three-dots"></span></button>
</template>

<script>
import {element} from './common'
export default element({
  props: {
    color: {
      type: String,
      default: "dark"
    },
    path: {
      type: String
    }
  },
  methods: {
    detail() {
      this.$router.push({path: this.path})
    }
  }
})
</script>
