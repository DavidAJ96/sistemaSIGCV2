<template>
    <div class=" row">
        <div class="main s12">
 <TopBar></TopBar>
         <router-view></router-view>
s
        </div>
       

        

    </div>
</template>

<script lang="ts">
    declare let M:any
import TopBar from "./components/TopBar.vue"
    export default {
    name: "MainLayout",
    components: { TopBar },
    mounted(){
        M.AutoInit();
    }
}
</script>

<style  scoped>



</style>