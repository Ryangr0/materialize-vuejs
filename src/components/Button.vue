<template>
  <a class="btn" :class="getClasses">{{content}}</a>
</template>

<script>
  export default {
    props: {
      classes: {
        type: Array,
        required: false,
        default: function () {
          return []
        }
      },
      content: {
        type: String,
        required: false
      }
    },
    computed: {
      getClasses: function () {
        return this.classes.join(' ')
      }
    }
  }
</script>
