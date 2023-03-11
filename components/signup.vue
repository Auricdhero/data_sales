<template>
  <v-form v-model="valid" @submit.prevent="signup">
    <v-container>
      <v-col>
        <v-col>
          <v-col>
            <v-text-field v-model="username" :rules="nameRules" :counter="10" label="User Name" require></v-text-field>
          </v-col>
          <v-text-field v-model="fullName" :rules="nameRules" :counter="30" label="Enter Full Name"
            required></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="phone" :rules="nameRules" :counter="10" label="Phone" require></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="email" :rules="nameRules" :counter="30" label="Email Address" required></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password"
            hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
        </v-col>
      </v-col>
      <v-row>

      </v-row>
      <v-checkbox v-model="checkbox" :rules="[(v) => !!v || 'You must agree to continue!']" label="Do you agree?"
        required></v-checkbox>

      <v-btn color="blue" class="mr-4" @click="signup"> Sign Up </v-btn>

    </v-container>
  </v-form>
</template>

<script>
// import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database"
// import { getDatabase, ref, set } from "firebase/database";
import * as firebase from 'firebase/app'

export default {
  name: "Signup",
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      email: "",
      fullName: "",
      username: "",
      password: "",
      phone: "",
      snackbar: false,
      snackbarText: 'No error message',
      nameRules: [],
      checkbox: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods: {
    async signup() {
      // const app = firebase()
      const database = getDatabase()
      let that = this
      // let user;
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user", user);
          set(ref(database, 'user/' + user.uid), {
            username: this.username,
            email: this.email,
            fullname: this.fullName,
            phone: this.phone
          })
        }).catch((error => {
          console.log('error', error);
        }))
    },
  },
};
</script>
