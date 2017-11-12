<template>
  <div class="collection" v-if="collection.links">
    <CollectionItem v-for="(item, index) in collection.items" :key="index" :item="item" :links="true"></CollectionItem>
  </div>
  <ul class="collection" v-else :class="!!collection.header ? 'with-header' : ''">
    <li class="collection-header" v-if="!!collection.header"><h4>{{collection.header}}</h4></li>
    <CollectionItem v-for="(item, index) in collection.items" :key="index" :item="item"></CollectionItem>
  </ul>
</template>

<script>
  import CollectionItem from './CollectionItem.vue'

  export default {
    components: {
      CollectionItem
    },
    props: {
      collection: {
        type: Object,
        required: true
      }
    }
  }
</script>
