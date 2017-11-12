<template>
  <nav>
    <div class="nav-wrapper">
      <div class="col s12">
        <BreadcrumbItem v-for="(item, index) in items" :key="index" :item="item"></BreadcrumbItem>
      </div>
    </div>
  </nav>
</template>

<script>
  import BreadcrumbItem from './BreadcrumbItem'
  export default {
    components: {
      BreadcrumbItem
    },
    props: ['items']
  }
</script>
