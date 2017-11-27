<template>
  <div class="input-field col s12">
    <input :placeholder="item.placeholder" :id="item.id" type="password" :class="getClasses + (item.validate ? ' validate' : '')">
    <label :for="item.id">{{item.label}}</label>
  </div>
</template>

<script>
  import BaseComponent from '../mixins/BaseComponent.js'

  export default {
    mixins: [BaseComponent],
    mounted: function() {
    }
  }
</script>
