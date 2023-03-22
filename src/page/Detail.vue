<template>
  <C-Header/>
  <div class="container">
    <C-Message :messages="messages"/>
    <F-Card>
      <F-CardItem id="id" title="ID"><E-ReadOnlyText :value="id" id="id"/></F-CardItem>
      <F-CardItem id="form1" title="フォーム１" col="3"><E-InputText v-model="form.form1" id="form1" tabindex="1"/></F-CardItem>
      <F-CardItem id="form2" title="フォーム２" col="3"><E-InputSelect v-model="form.form2" id="form2" tabindex="2" :options="options"/></F-CardItem>
      <F-CardItem id="form3" title="フォーム３" col="3"><E-InputSelect v-model="form.form3" id="form3" tabindex="3" :options="options"/></F-CardItem>
      <F-CardItem id="form4" title="フォーム４"><E-InputDateTime v-model="form.form4" id="form4" tabindex="4"/></F-CardItem>
      <F-CardItem id="form5" title="フォーム５"><E-InputDate v-model="form.form5" id="form5" tabindex="5"/></F-CardItem>
    </F-Card>

    <F-AddTable :headers="['値１','値２','値３']" :body="body" v-slot="{rec,tabindex}" tabindex="6">
      <F-TableItem><E-InputText v-model="rec.val1" :tabindex="tabindex" colindex="3"/></F-TableItem>
      <F-TableItem><E-InputText v-model="rec.val2" :tabindex="tabindex" colindex="2"/></F-TableItem>
      <F-TableItem><E-InputSelect v-model="rec.val3" :tabindex="tabindex" colindex="1" :options="options"/></F-TableItem>
    </F-AddTable>

    <F-BlockButton>
      <E-Button @click="register" tabindex="7">登録</E-Button>
    </F-BlockButton>
  </div>
  <C-Overlay :isLoading="isLoading"/>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    }
  },
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
        {val1: "aaa", val2: "bbb", val3: "hoge"},
      ],
      options: {
        "hoge": "ほげ",
        "fuga": "ふが",
      },
      isLoading: false,
      messages: [
      ]
    }
  },
  methods: {
    register() {
      this.isLoading = true
      setTimeout(() => {
        console.log(JSON.stringify(this.$data, null, 2));
        this.messages.splice(0,this.messages.length)
        this.messages.push({type: "error", message: "ちゃんとしたエラーメッセージを書きましょう"})
        this.messages.push({type: "warning", message: "これはサンプルのメッセージです"})
        this.messages.push({message: "consoleにメッセージが出ています"})
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>