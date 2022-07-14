<template>
  <ReposComponent :searchString="homeSearchString"/>
</template>

<script>
import ReposComponent from '../components/ReposComponent'
export default {
  data () {
    return {
      homeSearchString: ''
    }
  },
  components: {
    ReposComponent
  }
}
</script>