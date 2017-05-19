<template id="template">
  <div id="layout">
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  export default {
    template: '#template',
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #fff;
  }
</style>
