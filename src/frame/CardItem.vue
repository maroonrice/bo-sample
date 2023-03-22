<template>
  <div :class='["col-sm-"+outer_col, "mb-2"]'>
    <div class="row">
      <label :for="id" :class="['col-sm-' + inner_col, 'col-form-label']">{{ title }}</label>
      <div :class="'col-sm-' + (12 - inner_col)">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: ""
    },
    col: {
      default: "1"
    }
  },
  computed: {
    outer_col() {
      const col = parseInt(this.col)
      return parseInt(12 / (isNaN(col) ? 12 : col))
    },
    inner_col() {
      return parseInt(12 / this.outer_col) * 2
    }
  }
}
</script>
