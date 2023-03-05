<template>
  <v-card flat>
    <v-container>
      <v-text-field v-model="email" :rules="nameRules" :counter="30" label="Email" required></v-text-field>
      <br />
      <navDrawer :username="this.username"></navDrawer>
      <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password"
        hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
      <NuxtLink to="">Forgot password?</NuxtLink><br /><br />
      <v-btn color="purple" class="mr-4" @click="login"> Log In </v-btn><v-divider></v-divider>
      <v-snackbar :timeout="4000" v-model="snackbar" absolute bottom center>
        {{ snackbarText }}
      </v-snackbar>
    </v-container>
  </v-card>
</template>

<script>


export default {
  name: "signin",
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      snackbar: false,
      snackbarText: 'No error message',
      email: "",
      name: "",
      nameRules:[],
      password: "",
      username: "Torkornoo",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods: {
    async login() {
      let that = this
      this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
        .catch(function (error) {
          that.snackbarText = error.message
          that.snackbar = true
        }).then((user) => {
          //we are signed in
          console.log("We are logged in", user);
          $nuxt.$router.push('/')
        })
    },

    async forgotPassword() {
      let that = this
      this.$fire.auth.sendPasswordResetEmail(this.email)
        .then(function () {
          that.snackbarText = 'reset link sent to ' + that.email
          that.snackbar = true
        })
        .catch(function (error) {
          that.snackbarText = error.message
          that.snackbar = true
        })
    }
  },
};
</script>

