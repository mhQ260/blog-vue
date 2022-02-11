<template>
  <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            BlogVue
          </v-list-item-title>
          <v-list-item-subtitle>
            mhQ260
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item-group color="primary">
            <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.link" link
            >
              <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
       </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
         items: [
            { text: 'Home Page', icon: 'mdi-home', link: "/" },
            { text: 'Add Post', icon: 'mdi-plus-circle', link: "/post/add" },
            { text: 'Manage', icon: 'mdi-cog', link: "/manage" },
            { text: 'About Project', icon: 'mdi-information', link: "/about" },
            ],
    }),
}
</script>

<style>

</style>