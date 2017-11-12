<template>
  <span class="badge" :class="getClasses" :data-badge-caption="item.caption">{{item.content}}</span>
</template>

<script>
  import BaseComponent from './mixins/BaseComponent.js'

  export default {
    mixins: [BaseComponent]
  }
</script>
