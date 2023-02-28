<template>
  <v-app>
    <theHeader />
    <v-main>
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container fluid style="height: 100%;"><Nuxt /> </v-container>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  // components: ['theHeader', ]
};
</script>
