<template>
  <table class="table">
    <thead class="table-light">
      <tr class="align-middle">
        <th>
          <button class="btn btn-light border" @click="add" :tabindex="calcindex(1)"><span class="bi bi-plus"></span></button>
        </th>
        <th v-for="header in headers" scope="col">{{ header }}</th>
      </tr>
    </thead>    
    <tbody>
      <tr v-for="(rec, index) in body" class="align-middle">
        <td>
          <button class="btn btn-danger" @click="remove(index)" :tabindex="calcindex((index+1)*10)"><span class="bi bi-trash"></span></button>
        </td>
        <slot :rec="rec" :tabindex="calcindex((index+1)*10) / 1000"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
    },
    body: {
      type: Array,
    },
    tabindex: {
      default: undefined
    }
  },
  data() {
    return {}
  },
  methods: {
    add() {
      this.body.push({})
    },
    remove(index) {
      this.body.splice(index, 1)
    },
    calcindex(index) {
      const tabindex = parseInt(this.tabindex)
      return isNaN(tabindex) ? -1 : tabindex * 1000 + index
    }
  }
};
</script>