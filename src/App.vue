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

    <h2>Breadcrumbs</h2>
    <div class="row">
      <Breadcrumbs :items="breadcrumbs"></Breadcrumbs>
    </div>

    <hr />

    <h2>Buttons</h2>
    <Btn :item="button"></Btn>
    <hr />
    <div class="row">
      <h2>Card</h2>
    </div>

    <div class="row">
      <div class="col s12">
        <Card :item="card"></Card>
      </div>
    </div>

    <div class="row">
      <h2>Chips</h2>
    </div>
    <div class="row">
      <div class="col s12">
        <Chip :item="chip1"></Chip>
        <Chip :item="chip2"></Chip>
      </div>
    </div>

    <hr />

    <div class="row">
      <h2>Form</h2>
    </div>
    <div class="row">
      <h3>Textfields</h3>
    </div>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <FormText :item="formText"></FormText>
          <FormText :item="formText"></FormText>
          <FormText :item="formText"></FormText>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Badge from './components/Badge.vue'
  import Btn from './components/Button.vue'
  import Breadcrumbs from './components/Breadcrumbs.vue'
  import Card from './components/Card.vue'
  import Collection from './components/Collection.vue'
  import Chip from './components/Chip.vue'
  import FormText from './components/Form/Text.vue'

  export default {
    name: 'app',
    components: {
      Badge,
      Btn,
      Breadcrumbs,
      Card,
      Collection,
      Chip,
      FormText
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
        breadcrumbs: [
          {
            text: 'test1',
            classes: ['testclass1']
          },
          {
            text: 'test2',
            href: 'test2href',
            classes: ['testclass2']
          },
          {
            text: 'test3',
            href: 'test3href',
            classes: ['testclass3']
          }
        ],
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
        },
        chip1: {
          src: 'testsrc',
          text: 'testtext1'
        },
        chip2: {
          src: 'testsrc',
          text: 'testtext1',
          closable: true
        },
        formText: {
          id: 'test12345',
          placeholder: 'test',
          validate: false,
          label: 'Label'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/css/app.scss";
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>

