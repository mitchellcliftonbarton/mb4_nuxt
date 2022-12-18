<template>
  <div class="page-wrap grid grid-cols-12 push-nav px-6 lg:p-8">
    <div class="wrapper col-span-12 lg:col-span-10 lg:col-start-3 mb-80">
      <div class="about mb-32">
        <h1 class="mb-12 text-red">Info</h1>
        <div class="formatted">
          <div>
            <a href="mailto:mitchellcliftonbarton@gmail.com" v-html="spanify('mitchellcliftonbarton@gmail.com')"></a>
            <br>
            <a target="_blank" rel="noopener" href="https://www.instagram.com/mitchellcliftonbarton/" v-html="spanify('Instagram')"></a>
            <br>
            <br>
            <p v-html="spanify('Mitchell Barton is an artist based in Salt Lake City, Utah, USA.')"></p>
            <br>
            <a target="_blank" rel="noopener" href="https://cold-rice.info/" v-html="spanify('Cold Rice')"></a>
            <br>
            <a target="_blank" rel="noopener" href="https://washer-dryer-projects.com/" v-html="spanify('Washer/Dryer Projects')"></a>
          </div>
        </div>
      </div>

      <div class="education mb-32">
        <h2 class="mb-12 text-red" v-html="spanify('Education')"></h2>
        <p><span class="pr-6" v-html="spanify('2017')"></span><span v-html="spanify('BFA, Brigham Young University')"></span></p>
      </div>

      <div class="exhibitions mb-32">
        <h2 class="mb-12 text-red" v-html="spanify('Select Exhibitions')"></h2>
        <div class="flex mb-8">
          <p class="pr-6" v-html="spanify('2020')"></p>
          <div>
            <p v-html="spanify('“A Concert” - Arcade on Stadium, Provo, UT (Solo Exhibition)')"></p>
          </div>
        </div>
        <div class="flex mb-8">
          <p class="pr-6" v-html="spanify('2019')"></p>
          <div>
            <p v-html="spanify('“The Flat File: Year Seven” - Tiger Strikes Asteroid, Brooklyn, NY')"></p>
            <p v-html="spanify('“Press Refresh” - The Wrong Biennale (4th Edition), Online')"></p>
            <p v-html="spanify('“Dancing In Peckham” - Peckham24, London, UK')"></p>
          </div>
        </div>
        <div class="flex mb-8">
          <p class="pr-6" v-html="spanify('2018')"></p>
          <div>
            <p v-html="spanify('“Yellow-Light Fruit” - Pal Gallery, Provo, UT (Solo Exhibition)')"></p>
            <p v-html="spanify('“Freestylez” - Tropical Contemporary, Eugene, OR (Solo Exhibition)')"></p>
            <p v-html="spanify('“Statewide Competition” - Bountiful Davis Arts Center, Bountiful UT')"></p>
            <p v-html="spanify('“Self Reflection” - NIDA International Photography Symposium, Nida, Lithuania')"></p>
            <p v-html="spanify('“Numerology” - Humble Arts Foundation, Online - Curated by Roula Seikaly and Jon Feinstein')"></p>
            <p v-html="spanify('“Generation Loss” - Pal Gallery, Provo, UT')"></p>
          </div>
        </div>
        <div class="flex mb-8">
          <p class="pr-6" v-html="spanify('2017')"></p>
          <div>
            <p v-html="spanify('“Utah Ties” - CUAC, Salt Lake City, UT - Curated by Mary Leigh Cherry')"></p>
            <p v-html="spanify('“Alternative Facts” - Humble Arts Foundation, Online')"></p>
            <p v-html="spanify('“HUGE” - Mestizo Gallery, Salt Lake City, UT')"></p>
            <p v-html="spanify('“Year in Reverse” - Humble Arts Foundation, Online')"></p>
            <p v-html="spanify('“Black Sand White Sand Gray Sand” - BANAL BANAL, Online')"></p>
          </div>
        </div>
        <div class="flex mb-8">
          <p class="pr-6" v-html="spanify('2016')"></p>
          <div>
            <p v-html="spanify('“There Then Here Now” - Gallery 303, Provo, UT - Curated by Daniel Everett')"></p>
            <p v-html="spanify('“I Love Kanye” - Humble Arts Foundation, Online - Curated by Amani Olu')"></p>
          </div>
        </div>

        <div class="flex">
          <p class="pr-6" v-html="spanify('2015')"></p>
          <div>
            <p v-html="spanify('“Utah Ties” - CUAC, Salt Lake City, UT - Curated by Mara McCarthy')"></p>
          </div>
        </div>
      </div>

      <div class="online mb-32">
        <h2 class="mb-12 text-red" v-html="spanify('Online')"></h2>
        <div class="formatted">
          <p><a target="_blank" rel="noopener" href="https://www.point.app/article/when-the-nba-gets-absurd-a-conversation-with-mitchell-barton" v-html="spanify('Point | Intersection')"></a></p>
          <p><a target="_blank" rel="noopener" href="https://dergreif-online.de/guest-room/monica-allende/" v-html="spanify('Def Grief')"></a></p>
          <p><a target="_blank" rel="noopener" href="https://www.phasesmag.com/mitchell-barton/selected-works-42/" v-html="spanify('Phases Magazine')"></a></p>
          <p><a target="_blank" rel="noopener" href="https://anewnothing.com/mitchell-barton-eric-edvalson/" v-html="spanify('A New Nothing')"></a></p>
          <p><a target="_blank" rel="noopener" href="http://brutalistwebsites.com/2mass.info/" v-html="spanify('Brutalist Websites')"></a></p>
          <p><a target="_blank" rel="noopener" href="http://selfpublishbehappy.com/2017/10/a-little-bit-cooler-by-mitchel-barton/" v-html="spanify('Self Publish Be Happy')"></a></p>
          <p><a target="_blank" rel="noopener" href="http://brutalistwebsites.com/mitchellbarton.com/" v-html="spanify('Brutalist Websites')"></a></p>
          <p><a target="_blank" rel="noopener" href="http://www.daily-lazy.com/2020/12/mitchell-barton-at-arcade-on-stadium.html" v-html="spanify('Daily Lazy')"></a></p>
          <p><a target="_blank" rel="noopener" href="https://www.inthein-between.com/mitchell-barton-a-concert/" v-html="spanify('In The In-Between')"></a></p>
        </div>
      </div>

      <div class="publications">
        <h2 class="mb-12 text-red" v-html="spanify('Publications')"></h2>
        <div class="formatted">
          <p v-html="spanify('“Three Basketball Games”, Self-published')"></p>
          <p v-html="spanify('“Freestylez”, Self-published')"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import utils from '@/mixins/utils.js'

export default {
  mixins: [utils],
  head () {
    return {
      title: 'Mitchell Barton | Info'
    }
  },
  computed: {
    ...mapState({
      about: state => state.siteData.infoPage.data.about_text,
      online: state => state.siteData.infoPage.data.online_publications
    })
  }
}
</script>
