<template>
  <div class="card-action">
    <CardActionItem v-for="(item, index) in items" :key="index" :item="item"></CardActionItem>
  </div>
</template>

<script>
  import CardActionItem from './CardActionItem.vue'

  export default {
    props: ['items'],
    components: {
      CardActionItem
    }
  }
</script>
