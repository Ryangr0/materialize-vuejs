<template>
  <div id="app">
      <h1>Components</h1>
      <Collection :collection="collection"></Collection>
  </div>
</template>

<script>
  import Collection from './components/Collection.vue'

  export default {
    name: 'app',
    components: {
      Collection
    },
    data: function () {
      return {
        collection: {
          header: 'Collection header',
          links: false,
          items: [
            {
              content: 'Item content',
              href: 'test'
            },
            {
              content: 'Item content 2'
            }
          ]
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="scss">
  @import "./assets/css/app.scss";
</style>
