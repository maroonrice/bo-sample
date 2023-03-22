<template>
  <div id="loading" class="position-fixed top-0 start-0 w-100 h-100" v-show="isLoading">
    <div class="position-absolute w-100 h-100 bg-light opacity-50"></div>
    <div class="text-center position-absolute top-50 start-50 w-100 translate-middle">
      <div class="spinner-border text-dark" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
