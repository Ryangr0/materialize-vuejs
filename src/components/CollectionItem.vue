<template>
  <a v-if="links" class="collection-item" :href="item.href" :class="getClasses">{{item.content}}</a>
  <li v-else class="collection-item" :class="getClasses">{{item.content}}</li>
</template>

<script>
  import BaseComponent from './mixins/BaseComponent.js'

  export default {
    props: {
      links: Boolean
    },
    mixins: [BaseComponent]
  }
</script>
