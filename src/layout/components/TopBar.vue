<template>
           <nav class="nav-extended indigo">
    <div class="nav-wrapper">
            <AppSidebar></AppSidebar>

      <a href="#" class="brand-logo">
        <img src="@/assets/logo.png"  >
        ESETP 760</a>
     
    </div>
     
  </nav>

</template>

<script>
import AppSidebar from './AppSidebar.vue';
    export default {
    name: "TopBar",
    components: { AppSidebar, }
}
</script>

<style lang="scss" scoped>

</style>