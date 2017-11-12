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
