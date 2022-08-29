<template>
<div>
    <a  data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>

    <ul id="slide-out" class="sidenav sidenav-fixed collapsible ">
    <li><div class="user-view">
      <div class="background">
        <img src="@/assets/office.jpg">
      </div>
      <a href="#user"><img class="circle" src="@/assets/yuna.jpg"></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a class="subheader">Menu Principal</a></li>
    <li><div class="divider"></div></li>
  <li v-for="item in menu" :key="item.name">
     <ul class="collapsible collapsible-accordion">
        <li>
          <a :href="'#/dashboard/'+item.link" v-if="item.children.length <1" class="collapsible-header waves-effect waves-light" tabindex="0"><i class="material-icons">{{item.icon}}</i>{{item.name}}</a>
          <a   v-if="item.children.length >0" class="collapsible-header waves-effect waves-light" tabindex="0"><i class="material-icons">{{item.icon}}</i>{{item.name}}</a>
          <div class="collapsible-body" v-if="item.children.length > 0">
              <ul>
                <li v-for="submenu in item.children" :key="submenu.name"><a :href="'#/dashboard/'+submenu.link"><div class="material-icons" style="vertical-align: -2px;font-size:15px">panorama_fish_eye
</div> {{submenu.name}}</a></li>

                </ul>
           </div>
        </li>
    </ul>
 </li>
 
  </ul> 
  </div>

</template>
 

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  declare let M:any
  @Component
  export default class AppSidebar extends Vue {
    menu: any = [];
    created(){
      this.menu = require('@/assets/menu.json');
    }
    mounted(){
      
      M.AutoInit();  

    }
  }
</script>

<style scoped>

</style>

<style   scoped>

</style>