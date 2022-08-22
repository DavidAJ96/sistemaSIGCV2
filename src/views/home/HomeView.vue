 
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
      <div class="row">
        <div class="col s6">
          <div class="stati turquoise left">
          <i class="material-icons md-55">group</i>
          <div>
            <b>1</b>
            <span>.turquoise left</span>
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