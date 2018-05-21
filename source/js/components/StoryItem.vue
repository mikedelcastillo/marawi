<template lang="pug">
  router-link.story-item(:to=`{ name: 'story', params: {id: story.id} }`)
    .background-wrapper(:style="{backgroundImage:`url(${story.thumbnail_url})`}")
      .overlay-wrapper
      .icon-wrapper(:style=`bg(story)`)
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
  },
  methods: {
    bg(story){
      const style = {};

      if(story.type_id == "video"){
        style.backgroundImage = `url(img/assets/video.png)`;
      }

      if(story.type_id == "photoessay"){
        style.backgroundImage = `url(img/assets/photo.png)`;
      }

      return style;
    }
  }
}
</script>

<style lang="sass">

</style>
