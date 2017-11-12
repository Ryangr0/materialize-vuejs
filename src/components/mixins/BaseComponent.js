export default {
  props: {
    item: {
      type: Object,
      default: function () {
        return {
          classes: []
        }
      }
    }
  },
  computed: {
    getClasses: function () {
      if (this.item.classes !== undefined) {
        return this.item.classes.join(' ')
      } else {
        return ''
      }
    }
  }
}
