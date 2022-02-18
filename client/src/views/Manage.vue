<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="8" class="mx-auto">
        <v-list>
          <v-subheader inset>Posts</v-subheader>
          <v-list-item
            v-for="post in posts"
            :key="post._id"
          >
          <v-list-item-content>
            <v-list-item-title v-text="post.title"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action class="d-flex flex-row" sm="2">
              <v-btn icon color="green" :to="{ name: 'edit-post', params: { id: post._id } }">
                <v-icon>mdi-note-edit</v-icon>
              </v-btn>
              <v-btn icon color="red" @click="removePost(post._id)">
                <v-icon>mdi-note-remove</v-icon>
              </v-btn>
            </v-list-item-action>

          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api";

export default {
    name: "Manage",
    data() {
      return {
        posts:[],
      };
    },
    async created() {
      this.posts = await API.getAllPosts();
    },
    methods: {
      async removePost(id) {
        const response = await API.deletePost(id);
        this.$router.push( { name: 'home', params: { message: response.message } });
      }
    }
}
</script>

<style>

</style>