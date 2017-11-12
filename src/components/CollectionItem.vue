<template>
  <a v-if="links" :href="item.href" class="collection-item">{{item.content}}</a>
  <li v-else class="collection-item">{{item.content}}</li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    links: Boolean
  }
}
</script>
