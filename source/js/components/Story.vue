<template lang="pug">
  #global-wrapper
    div {{id}} {{shared}}
</template>

<script>
export default {
  props: ["id"],
  data(){
    return {
      shared: require('../data')
    };
  }
}
</script>

<style lang="sass">

</style>
