<template>
  <div class="card" :class="getClasses">
    <CardImage v-if="!!item.image" :item="item.image"></CardImage>
    <CardContent v-if="!!item.content" :item="item.content"></CardContent>
    <CardActions v-if="!!item.actions" :items="item.actions"></CardActions>
  </div>
</template>

<script>
  import BaseComponent from './mixins/BaseComponent.js'
  import CardActions from './CardActions.vue'
  import CardContent from './CardContent.vue'
  import CardImage from './CardImage.vue'

  export default {
    components: {
      CardActions,
      CardContent,
      CardImage
    },
    mixins: [BaseComponent]
  }
</script>
