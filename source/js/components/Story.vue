<template lang="pug">
  #global-wrapper
    .splash-wrapper
      .background-wrapper(:style="{backgroundImage:`url(${story.cover_url})`}")
      .overlay-wrapper
      .content-wrapper
        .center-wrapper
          //- .logos-wrapper
          //-   img.theguidon(src="img/logos/theguidon.png")
          //-   img.thecrusader(src="img/logos/thecrusader.png")
          .title-wrapper
            .type {{story.type_name}}
            .title {{story.title}}
            .byline {{story.byline}}
    .section(v-if=`story.type == "video"`)
      .center-wrapper
        .video-wrapper
    .story-content(v-else v-html=`story.body`)
</template>

<script>
export default {
  props: ["id"],
  data(){
    return {
      shared: require('../data'),
      story: {}
    };
  },
  mounted(){
    let story = this.shared.database.find(s => s.id == this.id);

    if(!story){
      this.$router.push("/");
      return;
    }

    this.story = story;
  }
}
</script>

<style lang="sass" scoped>
  @import source/sass/variables

  .content-wrapper
    display: flex
    justify-content: center
    align-items: flex-end
    .center-wrapper
      max-width: $max-width
      width: 100% - $perc * 2
      .type
        font-family: $font-sans-serif
        font-weight: 300
        letter-spacing: $letter-spacing
        text-transform: uppercase
        opacity: 0.5
        font-style: italic
        font-size: 0.8em
      .title
        font-size: 2em
        font-weight: 400
        font-family: $font-serif
        margin: 0.2em 0
      .byline
        opacity: 0.5

</style>
