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
    <div>
      <Badge :classes="badge.classes" :content="badge.content" :caption="badge.caption"></Badge>
    </div>
    <hr />
    <h2>Buttons</h2>
    <Btn :classes="button.classes" :content="button.content"></Btn>
  </div>
</template>

<script>
  import Badge from './components/Badge.vue'
  import Btn from './components/Button.vue'
  import Collection from './components/Collection.vue'

  export default {
    name: 'app',
    components: {
      Badge,
      Btn,
      Collection
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
        },
        button: {
          classes: ['waves-effect', 'waves-light'],
          content: 'test'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/css/app.scss";
</style>
