<!--  -->
<template>
  <div class="page-home">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell
          v-for="n in 10"
          :title="'内容 ' + n"
        />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell
          v-for="n in 4"
          :title="'测试 ' + n"
        />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell
          v-for="n in 6"
          :title="'选项 ' + n"
        />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '1'
    }
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>