<template>
  <v-app>
    <v-main>
      <ToolBar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar'
export default {
  name: 'App',
  components: {
    ToolBar
  },
  data: () => ({
    //
  }),
};
</script>
