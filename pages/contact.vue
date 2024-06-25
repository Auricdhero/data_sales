<template>
  <div>
    <div class="mt-12 form-cont" style="height: 100vh;">
      <h1 class="text-center">Get In Touch</h1>
      <v-spacer></v-spacer>
      <v-container>
        <v-form class="form">
          <div class="name-field">
            <v-label>Name</v-label>
            <v-text-field v-model="username" label="Nathan Fletcher" single-line solo></v-text-field>
          </div>
          <div class="phone-field">
            <v-label>Phone</v-label>
            <v-text-field v-model="phone" label="0244444444" single-line solo></v-text-field>
          </div>
          <div class="email-field">
            <v-label>Email</v-label>
            <v-text-field v-model="email" label="nathanfletcher@gmail.com" single-line solo></v-text-field>
          </div>
          <div class="message-field">
            <v-label>Your Message</v-label>
            <v-textarea v-model="message" solo name="input-7-4" label="Message"></v-textarea>
          </div><br>
          <div class="submit-btn">
            <v-btn @click.prevent="writeUserData" class="ma-2" outlined block color="blue">
              Submit<v-icon right>mdi-arrow-right</v-icon>
            </v-btn><br>
          </div>
        </v-form>
      </v-container>
    </div>
  </div>
</template>
<script>
import { getDatabase, ref, set } from "firebase/database";

export default {

  data() {
    return {
      message: '',
      username: '',
      email: '',
      phone: ''
    }
  },
  methods: {
    writeUserData () { 
      const db = getDatabase();
      set(ref(db, 'messages/' + this.username), {
        username: this.username,
        email: this.email,
        messsage:this.message,
        phone:this.phone
      });
    }
  }
}
</script>
<style></style>
