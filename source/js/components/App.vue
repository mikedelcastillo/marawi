<template lang="pug">
  #global-wrapper
    transition(name="scale" mode="out-in")
      #loading-wrapper(v-if=`shared.loading`)
        .center-wrapper
          .spinner-wrapper
            .spinner
              .mask
                .circle
          .text
            .title Strength and Resolve
            .subtitle Tales of Recovery in the Islamic City
            .collab A joint project by The GUIDON and The Crusader
      router-view(v-else :key=`"view" + $route.params.id`)
</template>

<script>
export default {
  data(){
    return {
      shared: require('../data')
    };
  },
  methods: {
    load(){
      this.shared.loading = true;
      this.$http.get("https://script.google.com/macros/s/AKfycby_2P1y8J3Ay_i-ekDhhOu0lNykWrkeLYo07IVEPDgw301R23cc/exec")
      .then(res => {
        if(res.body){
          this.shared.loading = false;
          this.shared.database = res.body;
        } else throw new Error("No database!")
      })
      .catch(e => {
        location.reload();
      });
    }
  },
  mounted(){
    this.load();
  }
}
</script>

<style lang="sass">

</style>
