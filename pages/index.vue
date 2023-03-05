<template>
  <div class="mt-15">
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin mb-4">
            Get your data at an affordable price.
          </h1>
          <h4 class="subheading">Build your application today!</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <v-spacer></v-spacer>
    <v-container>
      <h2 class="text-center">About Jessco</h2>
      <p class="text-center">
        We offer airtime and data bundles for MTN and AirtelTigo
      </p>
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-card-text>
              <p class="text-h4 text--primary">Automated</p>
              <div class="text--primary">
                We are fully automated so we deliver our services easily and
                faster. <br /><br /><br /><br />
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4" @click="reveal = true">
                Learn More
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%"
              >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">Origin</p>
                  <p>
                    late 16th century (as a noun denoting a place where alms
                    were distributed): from medieval Latin eleemosynarius, from
                    late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                    ‘compassion’
                  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn text color="teal accent-4" @click="reveal = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-card-text>
              <p class="text-h4 text--primary">Reliable</p>
              <div class="text--primary">
                This portal is fully optimized for reliability and
                dependability. <br />
                You get 100% value of any transaction you make here.
                <br /><br />
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4" @click="reveal = true">
                Learn More
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%"
              >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">Origin</p>
                  <p>
                    late 16th century (as a noun denoting a place where alms
                    were distributed): from medieval Latin eleemosynarius, from
                    late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                    ‘compassion’
                  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn text color="teal accent-4" @click="reveal = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-card-text>
              <p class="text-h4 text--primary">Customer Support</p>
              <div class="text--primary">
                Our Customer service is just a click away. Our customers are
                premium to us. <br />
                Do not hesitate to contact us on anything. Thus our transactions
                are attended to within 3 to 5 mins.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4" @click="reveal = true">
                Learn More
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%"
              >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">Origin</p>
                  <p>
                    late 16th century (as a noun denoting a place where alms
                    were distributed): from medieval Latin eleemosynarius, from
                    late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                    ‘compassion’
                  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn text color="teal accent-4" @click="reveal = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-spacer></v-spacer>

    <v-container>
      <h2 class="text-center">Data Packages</h2>
      <br />
      <v-row>
        <v-col cols="4" v-for="(products, index) in products" :key="index">
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="600">
              <v-img
                :aspect-ratio="16 / 9"
                v-if="products.image"
                :src="products.image.url"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal text-h2 white--text text-center"
                    style="height: 100%"
                  >
                    <p class="text-center mt-15 ml-13">
                      {{ products.price.formatted_with_symbol }}
                    </p>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative">
                <v-btn
                  absolute
                  color="blue"
                  class="white--text"
                  fab
                  large
                  right
                  top
                  @click="addToCart(product.id, 1)"
                >
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
                <h3 class="text-h4 font-weight-light orange--text mb-2">
                  {{ products.name }}
                </h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import commerce from "~/common/commerce";
import mtnLogo from "~/static/mtnLogo.jpeg";
import tigoLogo from "~/static/airteltigo.png";
import voda from "~/static/vodaLogo.png";
// import { mapActions } from 'vuex'

export default {
  name: "IndexPage",
  props: ["product"],
  data: () => ({
    mtnLogo,
    tigoLogo,
    voda,
  }),

  async asyncData({ $commerce }) {
    const merchant = await $commerce.merchants.about();
    const { data: categories } = await $commerce.categories.list();
    const { data: products } = await $commerce.products.list();

    return {
      merchant,
      categories,
      products,
    };
  },

  
};
</script>
