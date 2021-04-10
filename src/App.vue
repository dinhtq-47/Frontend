<template>
  <div id="app">
    <router-view id="view"></router-view>

    <div id="test">
     <div class="row">
  <at-button hollow>Default</at-button>
  <at-button type="primary" hollow>Primary</at-button>
  <at-button type="success" hollow>Success</at-button>
  <at-button type="error" hollow>Error</at-button>
  <at-button type="warning" hollow>Warning</at-button>
  <at-button type="info" hollow>Info</at-button>
</div>
<div class="row">
  <at-button>Default</at-button>
  <at-button type="primary">Primary</at-button>
  <at-button type="success">Success</at-button>
  <at-button type="error">Error</at-button>
  <at-button type="warning">Warning</at-button>
  <at-button type="info">Info</at-button>
</div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      show: true,
    }
  },
  components: {
   
  },
  methods: {
  },
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px auto;
  max-width: 1920px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style-type: none;
}

#test {
  width: 100%;
  height: 2000px;
}
</style>
