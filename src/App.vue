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
      <Badge :item="badge"></Badge>
    </div>
    <hr />
    <h2>Buttons</h2>
    <Btn :item="button"></Btn>
    <hr />
    <div class="row">
      <h2>Card</h2>
    </div>
    <div class="row">
      <div class="col s12 m7">
        <Card :item="card"></Card>
      </div>
    </div>
  </div>
</template>

<script>
  import Badge from './components/Badge.vue'
  import Btn from './components/Button.vue'
  import Card from './components/Card.vue'
  import Collection from './components/Collection.vue'

  export default {
    name: 'app',
    components: {
      Badge,
      Btn,
      Card,
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
              href: 'test',
              badge: {
                classes: ['blue', 'new'],
                content: 'test',
                caption: 'caption'
              }
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
              href: 'test',
              badge: {
                classes: ['blue', 'new'],
                content: 'test',
                caption: 'caption'
              }
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
        },
        card: {
          classes: ['test-card-1'],
          image: {
            classes: ['test-cart-2'],
            url: 'testurl',
            title: 'TestTitle1'
          },
          content: {
            classes: ['test-card-3'],
            title: 'TestTitle2',
            text: 'TestText1'
          },
          actions: [
            {
              classes: ['test-card-4'],
              href: 'TestHref',
              text: 'TestText1'
            }
          ]
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/css/app.scss";
</style>
