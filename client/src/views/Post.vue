<template>
  <v-container>
      <v-row>
          <v-col sm="10" class="pa-4 mx-auto">
              <v-card class="pa-2">
                  <v-img height="500" :src="`http://localhost:5000/images/${post.image}`"></v-img>
                  <v-card-actions class="pb-0">
                      <v-row class="mt-1 mx-1">
                          <v-col sm="2">
                              <v-btn small outlined color="primary">{{ post.category }}</v-btn>
                          </v-col>
                      </v-row>
                  </v-card-actions>
                  <v-card-subtitle class="headline">
                      <h3>{{ post.title }}</h3>
                  </v-card-subtitle>
                  <v-card-text>
                      <p>{{ post.text }}</p>
                  </v-card-text>
                  <v-card-text class="grey--text">
                      <p>{{ post.created }}</p>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import API from '../api';
export default {
    data() {
        return {
            post: {},
        };
    },
    async created() {
        const response = await API.getPost(this.$route.params.id);
        this.post = response;
    }
}
</script>

<style>

</style>