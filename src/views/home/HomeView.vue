 
<template>
    <div>
      <nav class="nav-extended indigo">
   
      <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a href="#test1">Novedades</a></li>
        <li class="tab"><a class="active" href="#test2">Estadisticas</a></li>
      </ul>
    </div>
  </nav>
  <div class="view-content">
    <div id="test1">dsdsds</div>
    <div id="test2">
      <div class="bootstrap-wrapper">

  <div class="row">
     <div class="col-md-3">
        <div class="stati turquoise ">
          <i class="icon-exclamation icons"></i>
          <div>
            <b>0</b>
            <span>.turquoise</span>
          </div> 
        </div>
      </div> 
  </div>
 
</div>
      

    </div>

  </div>


    </div>
</template>

<script>
 
    export default {
        name:'HomeView',
        mounted() {
      // eslint-disable-next-line no-undef
          var el = document.querySelectorAll('.tabs');
           // eslint-disable-next-line no-undef
         M.Tabs.init(el, {'swipeable':true});

    }
    }
</script>

<style lang="scss" scoped>

</style>