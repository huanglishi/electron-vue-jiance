<template>
  <div id="wrapper1">
    内容区
     <a-button type="primary">Primary</a-button>
  </div>
</template>

<script>
import Vue from 'vue'
 import { Button } from 'ant-design-vue'
  Vue.component(Button.name, Button)
  export default {
    name: 'landing-page',
    methods: {
    }
  }
</script>

<style>
  /* @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro'); */

  /* * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } */


</style>
