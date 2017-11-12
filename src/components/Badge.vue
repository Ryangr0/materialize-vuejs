<template>
  <span class="badge" :class="getClasses" :data-badge-caption="caption">{{content}}</span>
</template>

<script>
  import BaseComponent from './mixins/BaseComponent.js'

  export default {
    props: {
      caption: {
        type: String,
        required: false
      }
    },
    mixins: [BaseComponent]
  }
</script>
