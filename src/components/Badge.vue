<template>
  <span class="badge" :class="getClasses" :data-badge-caption="caption">{{content}}</span>
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
      caption: {
        type: String,
        required: false
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
