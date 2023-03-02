<template>
  <v-app>
    <v-main>
      <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          color="white"
          elevate-on-scroll
          scroll-target="#scrolling-techniques-7"
        >
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

          <v-toolbar-title>Jessco</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn rounded color="primary" dark> Get Started </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group v-model="group">
              <v-btn to="/" plain>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-btn>
            </v-list-item-group>
            <v-list-item-group>
              <v-btn to="/about" plain>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>About</v-list-item-title>
              </v-btn>
            </v-list-item-group>
            <v-list-item-group>
              <v-btn to="/contact" plain>
                <v-list-item-icon>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Contact</v-list-item-title>
              </v-btn>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <v-sheet
          id="scrolling-techniques-7"
          class="overflow-y-auto"
          max-height="796"
        >
          <v-container fluid style="height: 100%">
            <Nuxt />
            <theFooter />
          </v-container>
        </v-sheet>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  // components: ['theHeader', ]
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
<style>
</style>
