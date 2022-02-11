<template>
  <v-app id="inspire">
    <Aside />

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view>
        
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import Aside from './components/Aside';
  export default {
    components: {
      Aside
    },
    data: () => ({ drawer: null }),
  }
</script>