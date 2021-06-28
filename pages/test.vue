<template>
  <div>
    <h1>Testing</h1>
    <ul class="ul" style="color:white">
      <li v-for="data in data" :key="data.id">
        {{ data.id }}
      </li>
      <!-- {{
        data[0]
      }} -->
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  //   data() {
  //     return {
  //       datas: []
  //     };
  //   },
  apollo: {
    // $client:'aawe',
    data: gql`
      query data {
        data: pairs(first: 10) {
          id
        }
      }
    `
  }
};
// console.log(this.data);
</script>

<style lang="scss" scoped>
.ul {
  margin-top: 20px;
  margin-left: 20px;
  padding: 20px;
}
</style>
