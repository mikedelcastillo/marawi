<template lang="pug">
  #global-wrapper
    .splash-wrapper
      .background-wrapper
        video(loop muted autoplay poster="img/photoessay/1.jpg")
          source(src="videos/sitner.mp4" type="video/mp4")
      .overlay-wrapper
      .content-wrapper
        .center-wrapper
          .logos-wrapper
            img.theguidon(src="img/logos/theguidon.png")
            img.thecrusader(src="img/logos/thecrusader.png")
          .title-wrapper
            .title Strength and Resolve
            .subtitle Tales of recovery in the Islamic City
          .arrow-wrapper
            .line.line-1
            .line.line-2
    .section.paragraphs-wrapper
      .center-wrapper
        p On May 23, 2017, terrorist affiliates of the Islamic State laid siege to the Islamic City of Marawi, the provincial capital of Lanao del Sur and one of the most important urban centers in Muslim Mindanao. The terrorists spared none in their conquest of the city, killing wantonly and taking freely from the residents. Christians and Muslims alike were the victims of their cruel and inhumane actions.
        p But gradually, after months of fighting between government forces and the insurgents, Secretary of Defense Delfin Lorenzana declared the end of combat operations on October 23, 2017, and the rehabilitation program could begin in earnest.
        p In a joint project with The Crusader Publication, the student publication of Xavier University - Ateneo de Cagayan, The GUIDON looks into the situation in Marawi a year since the fated attack. The stories presented in this hub are the lived experiences of people affected by the siege and those trying to build back better from the carnage.
    .section.stories-wrapper
      .center-wrapper
        .subheading See the stories
        .stories
          story-item(v-for=`story in shared.database` :story=`story`)
    app-footer
</template>

<script>
export default {
  data(){
    return {
      shared: require('../data')
    };
  }
}
</script>

<style lang="sass" scoped>
  @import source/sass/variables

  .paragraphs-wrapper
    margin: 4em 0

  .content-wrapper
    display: flex
    justify-content: center
    align-items: center
    .center-wrapper
    .title-wrapper
      padding: 1em
      text-align: center
      margin: 4em 0
      .title
        font-family: $font-sans-serif
        text-transform: uppercase
        font-weight: 300
        letter-spacing: $letter-spacing
      .subtitle
        font-size: 2em
        font-family: $font-serif
        font-weight: 700
        font-style: italic
</style>
