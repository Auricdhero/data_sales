<template>
    <div>
        <h2>Your sign in page is under devlopment</h2>
        
        <div>
            <v-container>
                <v-card>
                    <v-tabs horizontal>
                        <v-tab>
                            <v-icon left> mdi-account </v-icon>
                            Sign Up
                        </v-tab>
                        <v-tab>
                            <v-icon left> mdi-login </v-icon>
                            Sign In
                        </v-tab>

                        <!-- SIGN UP -->
                        <v-tab-item>
                            <Signup />
                        </v-tab-item>

                        <!-- SIGN IN -->
                        <v-tab-item>
                            <Signin />
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-container>
        </div>


    </div>
</template>

<script>
export default {
    component: {
        
    },
    // name: 'Signin'

}
</script>

<style lang="scss" scoped></style>