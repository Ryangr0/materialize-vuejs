<template>
  <a v-if="links" class="collection-item" :href="item.href" :class="getClasses">{{item.content}}<Badge v-if="!!item.badge" :item="item.badge"></Badge></a>
  <li v-else class="collection-item" :class="getClasses">{{item.content}}<Badge v-if="!!item.badge" :item="item.badge"></Badge></li>
</template>

<script>
  import BaseComponent from './mixins/BaseComponent.js'
  import Badge from './Badge.vue'

  export default {
    components: {
      Badge
    },
    props: {
      links: Boolean
    },
    mixins: [BaseComponent]
  }
</script>
