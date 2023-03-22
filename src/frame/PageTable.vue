<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-end">
      <li class="page-item" v-if="1 < page">
        <a class="page-link" href="#" @click="page = page - 1" :tabindex="calcindex(1)">Previous</a>
      </li>
      <template v-for="c in Math.ceil(body.length / numCountPerPage)">
        <li class="page-item" v-if="page - numMaxPageNum <= c && c <= page + numMaxPageNum && page != c">
          <a class="page-link" href="#" @click="page = c" tabindex="-1">{{ c }}</a>
        </li>
        <li class="page-item active" aria-current="page" v-if="page == c">
          <span class="page-link">{{ c }}</span>
        </li>
      </template>
      <li class="page-item" v-if="page < Math.ceil(body.length / numCountPerPage)">
        <a class="page-link" href="#" @click="page = page + 1" :tabindex="calcindex(2)">Next</a>
      </li>
    </ul>
  </nav>
  <table class="table">
    <thead class="table-light">
      <tr class="align-middle">
        <th v-for="header in headers" scope="col">{{ header }}</th>
      </tr>
    </thead>    
    <tbody>
      <template v-for="(rec, index) in body">
        <tr class="align-middle" v-if="(page-1) * numCountPerPage <= index && index < page * numCountPerPage">
          <slot :rec="rec" :tabindex="calcindex((index+1)*10) / 1000"></slot>
        </tr>
      </template>
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
    },
    countPerPage: {
      default: 20
    },
    maxPageNum: {
      default: 2
    }
  },
  computed: {
    numCountPerPage() {
      const num = parseInt(this.countPerPage)
      return isNaN(num) ? 20 : num
    },
    numMaxPageNum() {
      const num = parseInt(this.maxPageNum)
      return isNaN(num) ? 2 : num
    },
  },
  data() {
    return {
      page: 1
    }
  },
  methods: {
    calcindex(index) {
      const tabindex = parseInt(this.tabindex)
      return isNaN(tabindex) ? -1 : tabindex * 1000 + index
    }
  }
};
</script>