<template lang="pug">
  router-link.story-item(:to=`{ name: 'story', params: {id: story.id} }`)
    .background-wrapper(:style="{backgroundImage:`url(${story.thumbnail_url})`}")
      .overlay-wrapper
    .details-wrapper
      .top
        .type {{story.type_name}}
      .bottom
        .title {{story.title}}
        .byline {{story.byline}}
</template>

<script>
export default {
  props: ["story"],
  data(){
    return {
      shared: require('../data')
    };
  }
}
</script>

<style lang="sass">

</style>
