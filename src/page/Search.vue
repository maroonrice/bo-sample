<template>
  <C-Header/>
  <div class="container">
    <C-Message :messages="messages"/>
    <F-Card>
      <F-CardItem id="form1" title="フォーム１" :col="4"><E-InputText v-model="form.form1" id="form1" tabindex="1"/></F-CardItem>
      <F-CardItem id="form2" title="フォーム２" :col="4"><E-InputSelect v-model="form.form2" id="form2" tabindex="2" :options="options"/></F-CardItem>
      <F-CardItem id="form3" title="フォーム３" :col="4"><E-InputSelect v-model="form.form3" id="form3" tabindex="3" :options="options"/></F-CardItem>
      <F-CardItem id="form4" title="フォーム４"><E-InputDateTime v-model="form.form4" id="form4" tabindex="4"/></F-CardItem>
      <F-CardItem id="form5" title="フォーム５"><E-InputDate v-model="form.form5" id="form5" tabindex="5"/></F-CardItem>
    </F-Card>

    <F-BlockButton>
      <E-Button @click="search" tabindex="6">検索</E-Button>
    </F-BlockButton>

    <F-PageTable :headers="['値１','値２','値３','詳細']" :body="body" v-slot="{rec,tabindex}" tabindex="7" countPerPage="10">
      <F-TableItem>{{ rec.val1 }}</F-TableItem>
      <F-TableItem>{{ rec.val2 }}</F-TableItem>
      <F-TableItem>{{ rec.val3 }}</F-TableItem>
      <F-TableItem><E-DetailButton class="d-block w-100" :path="'/detail/' + rec.val1" :tabindex="tabindex" colindex="1"></E-DetailButton></F-TableItem>
    </F-PageTable>

  </div>
  <C-Overlay :isLoading="isLoading"/>
</template>

<script>
import axiosBase from 'axios'
const axios = axiosBase.create({
  baseURL: 'http://localhost:5173',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'  
});

export default {
  data() {
    return {
      form: {
        form1: "",
        form2: "fuga",
        form3: "hoge",
        form4: "",
        form5: "",
      },
      body: [
      ],
      options: {
        "hoge": "ほげ",
        "fuga": "ふが",
      },
      isLoading: false,
      messages: []
    }
  },
  methods: {
    search() {
      this.isLoading = true
      axios.get('/search.json')
      .then((response) => {
        this.body.splice.apply(this.body,[0, this.body.length].concat(response.data))
      })
      .finally(() => {
        setTimeout(() => {
          this.isLoading = false
          }, 1000)
      })
    }
  }
}
</script>