<template>
  <v-toolbar dark color="primary">
    <v-toolbar-title class="white--text">
      <v-btn @click="redirectToHome" icon>
      </v-btn>GitHub Graphql
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-text-field
      placeholder="please enter the Github Username"
      v-model="searchUser"
      ></v-text-field>

    <v-btn @click="searchForData" icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      searchUser: ''
    }
  },
  methods: {
    redirectToHome () {
      this.$router.push('/')
    },
    searchForData () {
      this.$router.push('/search/' + this.searchUser)
      this.searchUser = ''
    }
  }
}
</script>

<style>
</style>