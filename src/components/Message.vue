<template>
  <template v-for='(message,index) in messages'>
    <div class="alert d-flex align-items-center alert-dismissible fade show" :class="getColor(message.type)" role="alert">
        <span class="bi me-2" :class="getIcon(message.type)" style="font-size:24px;"></span>
        <div>{{ message.message }}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" tabindex="-1" @click="remove(index)"></button>
    </div>
  </template>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array
    }
  },
  methods: {
    remove(index) {
      this.messages.splice(index,1)
    },
    getIcon(type) {
      switch(type) {
        case "error":
        case "warning":
          return "bi-exclamation-triangle-fill"
        default:
          return "bi-check-circle-fill"
      }
    },
    getColor(type) {
      switch(type) {
        case "error":
          return "alert-danger"
        case "warning":
          return "alert-warning"
        default:
          return "alert-primary"
      }
    }
  }
}
</script>
