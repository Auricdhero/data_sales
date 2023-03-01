<template>
  <div>
    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.5,
      }"
      transition="fade-transition"
    >
      <v-parallax
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="text-h4 font-weight-thin mb-4">About</h1>
            <h4 class="subheading">Build your application today!</h4>
          </v-col>
        </v-row>
      </v-parallax>
    </v-lazy>
    <div>
      <v-container>
        <h6 class="text-muted text-center">What we do</h6>
        <v-spacer></v-spacer>
        <h2 class="text-center">What Service We Offer</h2>
        <v-spacer></v-spacer>
        <v-row>
          <v-col>
            <v-hover v-slot="{ hover }">
              <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                <v-img
                  :aspect-ratio="16 / 9"
                  :src="mtnLogo"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                      style="height: 100%"
                    >
                      GHS 20.00
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text class="pt-6" style="position: relative">
                  <v-btn
                    absolute
                    color="orange"
                    class="white--text"
                    fab
                    large
                    right
                    top
                  >
                    <v-icon>mdi-cart</v-icon>
                  </v-btn>
                  <div class="font-weight-light grey--text text-h6 mb-2">
                    For the perfect meal
                  </div>
                  <h3 class="text-h4 font-weight-light orange--text mb-2">
                    QW cooking utensils
                  </h3>
                  <div class="font-weight-light text-h6 mb-2">
                    Our Vintage kitchen utensils delight any chef.<br />
                    Made of bamboo by hand
                  </div>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
// import FlipCard from 'vue-flip-card'
import mtnLogo from '~/static/mtnLogo.jpeg'
export default {
  name: "About",
  components: [],
  data: () => ({
    isActive: false,
    mtnLogo
  }),
};
</script>