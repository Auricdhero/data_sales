<template>
    <div class="mt-15" style="height: 41.5em;">
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
</template>

<script>
export default{
    // components:['signin', 'signup']
}
</script>

<style lang="scss" scoped></style>