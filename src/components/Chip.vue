<template>
  <div class="chip" :class="getClasses">
    <img :src="item.src" :alt="item.alt">
    {{item.text}}
    <i v-if="item.closable" class="close material-icons">close</i>
  </div>
</template>

<script>
  import BaseComponent from './mixins/BaseComponent.js'

  export default {
    props: {
      closable: Boolean
    },
    mixins: [BaseComponent]
  }
</script>
