<template>
  <ReposComponent :searchString="language"/>
</template>

<script>
import ReposComponent from '../components/ReposComponent'
export default {
  props: ['user'],
  components: {
    ReposComponent
  }
}
</script>

<style>
</style>