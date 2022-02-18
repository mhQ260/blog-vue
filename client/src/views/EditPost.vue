<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Edit Post</v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
            <v-text-field label="Title" v-model="post.title" prepend-icon="mdi-note" :rules="rules"></v-text-field>       
            <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
            <v-textarea label="Text" v-model="post.text" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
            <v-file-input @change="selectFile" show-size counter multiple label="Image"></v-file-input>
            <v-img width="200" :src="`http://localhost:5000/images/${post.image}`"></v-img>
            <v-btn type="submit" class="mt-6" color="primary">Update Post</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from '../api';

export default {
    name: "EditPost",
    data() {
      return {
        rules: [(value) =>!!value || "Field is required!"],
        post: {
          title: "",
          category: "",
          text: "",
          image: ""
        },
        image: "",
      };
      },
    async created() {
        const response = await API.getPost(this.$route.params.id);
        this.post = response;
    },
    methods: {
      selectFile(file) {
        this.image = file[0];
      },
      async updateForm() {
        const formData = new FormData();
        formData.append('title', this.post.title);
        formData.append('category', this.post.category);
        formData.append('text', this.post.text);
        formData.append('image', this.image);
        
        if(this.$refs.form.validate()){
          const response = await API.updatePost(this.$route.params.id, formData);
          this.$router.push({ name: 'home', params: { message: response.message } });
        }
      },
    },
}
</script>

<style>

</style>