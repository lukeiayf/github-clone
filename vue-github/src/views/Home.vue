<template>
  <Repos :searchString="homeSearchString"/>
</template>

<script>
import Repos from '../components/Repos'
export default {
  data () {
    return {
      homeSearchString: 'lukeiayf'
    }
  },
  components: {
    Repos
  }
}
</script>