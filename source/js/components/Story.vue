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
          router-link.return(to="/") ◀ See all stories
          .title-wrapper
            .type {{story.type_name}}
            .title {{story.title}}
            .byline {{story.byline}}
    .section(v-if=`story.type_id == "video"`)
      .center-wrapper
        .video-wrapper
          .spacer
          iframe(:src=`story.iframe_url` frameborder="0" allow="autoplay; encrypted-media" allowfullscreen)
    .story-content(v-else v-html=`story.body`)
    .section.stories-wrapper
      .center-wrapper
        .subheading See all the stories
        .stories
          story-item(v-for=`story in shared.database` :story=`story`)
    app-footer
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

  .video-wrapper
    margin-top: 4em
    width: 100%
    .spacer
      width: 100%
      padding-bottom: 56.25%
      background-color: #111
    iframe
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      width: 100%
      height: 100%
      border: 0

  .stories-wrapper
    margin-top: 5em

  .content-wrapper
    display: flex
    justify-content: center
    align-items: flex-end
    .center-wrapper
      max-width: $max-width
      width: 100% - $perc * 2
      .return
        margin-bottom: 3em
        text-transform: uppercase
        letter-spacing: $letter-spacing
        opacity: 0.25
        cursor: pointer
        text-decoration: none
        display: block
        color: white
        &:hover
          opacity: 1
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
