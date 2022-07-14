<template>
  <v-container grid-list-md text-xs-center>
    <div v-if="$apollo.loading">
      <v-progress-circular
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>

    </div>
    <v-layout row wrap v-else>
      <v-flex v-for="i in search.user" :key="i.id" xs3>
        <v-card>
          <v-card-title class="cardColor white--text justify-center">
            <h2>{{i.user.name}}</h2>
            <h2>/{{i.user.login}}</h2>
            <h3>{{i.user.repositories.totalCount}} <v-icon>Number of repositories</v-icon></h3>
            <a v-bind:href="i.user.url" target="_blank">
            <v-btn flat color="primary">View User Page</v-btn>
          </a>
          </v-card-title>
          <v-avatar
          :size="100"
          color="grey lighten-4"
        >
          <img :src="i.user.avatarUrl" alt="avatar">
        </v-avatar>
        <v-card-actions v-for="j in user.repositories.edges.node" :key="j.edges.node.id" class="justify-center">
          <h3>{{j.edges.node.name}} <v-icon>Repository name</v-icon></h3>
          <h3>{{j.edges.node.description}} <v-icon>Repository description</v-icon></h3>
        </v-card-actions>
        </v-card>
        <v-spacer></v-spacer>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { GET_REPO_DETAILS} from '../queries/getRepoDetailsQuery';
export default {
  props: ['searchString'],
  data () {
    return {
      search: [],
      queryString: ''
    }
  },
  apollo: {
    search: {
      query: GET_REPO_DETAILS,
      variables () {
        return {
          queryString:'user:' + this.searchString,
        }
      }
    }
  }
}
</script>

<style>
.cardHeight {
  height: 120px;
}
</style>