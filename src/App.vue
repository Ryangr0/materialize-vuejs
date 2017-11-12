<template>
  <div id="app">
    <h1>Components</h1>
    <hr />
    <h2>Collection</h2>
    <h3>Normal</h3>
    <Collection :collection="collectionNormal"></Collection>
    <h3>links</h3>
    <Collection :collection="collectionLinks"></Collection>
    <hr />
    <h2>Badges</h2>
    <Badge :classes="badge.classes" :content="badge.content" :caption="badge.caption"></Badge>
  </div>
</template>

<script>
  import Collection from './components/Collection.vue'
  import Badge from './components/Badge.vue'

  export default {
    name: 'app',
    components: {
      Collection,
      Badge
    },
    data: function () {
      return {
        collectionNormal: {
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
        },
        collectionLinks: {
          header: 'Collection header',
          links: true,
          items: [
            {
              content: 'Item content',
              href: 'test'
            },
            {
              content: 'Item content 2'
            }
          ]
        },
        badge: {
          classes: ['blue', 'new'],
          content: 'test',
          caption: 'caption'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/css/app.scss";
</style>
