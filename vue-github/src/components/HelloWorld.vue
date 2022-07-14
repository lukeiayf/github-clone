<template>
  <h3>{{repository}}</h3>
</template>

<script>
import { Sample } from '../queries/sample'
export default {
  apollo: {
    repository: Sample
  },
  data () {
    return {
      repository: []
    }
  }
}
</script>

<style>

</style>