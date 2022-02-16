<template>
  <v-container>
    <v-alert border="left" close-text="Close" color="green" dark dismissible v-if="this.$route.params.message">
      {{ this.$route.params.message }}
    </v-alert>
    <v-row>
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
        <v-card class="pa-1" :to="{ name: 'post', params: {id: post._id} }">
          <v-img height="250" :src="`http://localhost:5000/images/${post.image}`"></v-img>
          <v-btn class="ml-4 mt-3" small outlined color="blue">
            {{ post.category }}
          </v-btn>
          <v-card-title class="headline">
            {{ post.title }}
          </v-card-title>
          <v-card-text class="py-0">
            <p>{{ post.text.substring(0, 80) + "..." }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api";

export default {
    name: "Home",
    data() {
      return {
        posts: [],
      };
    },
    async created() {
      this.posts = await API.getAllPosts();      
    }
}
</script>

<style>

</style>