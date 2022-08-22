<template>
<div>
    <a  data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>

    <ul id="slide-out" class="sidenav sidenav-fixed ">
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

    <li ><a class="waves-effect" href="#/dashboard/alumnos"><i class="material-icons">people</i>Gestión de Alumnos</a></li>
    <li><a class="waves-effect" href="#/dashboard/agentes"><i class="material-icons">people</i>Gestión de Agentes</a></li>
    <li><a class="waves-effect" href="#!"><i class="material-icons">book</i>Administrar Cursos</a></li>
    <li><a class="waves-effect" href="#!"><i class="material-icons">assignment</i>Administrar Cargos</a></li>
    <li><a class="waves-effect" href="#!"><i class="material-icons">assignment_ind
</i>Usuarios</a></li>
    <li><a class="waves-effect" href="#!"><i class="material-icons">print</i>Reportes</a></li>
    <li><a class="waves-effect" href="#!"><i class="material-icons">settings</i>Configuracion</a></li>

  </ul> 
  </div>

</template>

<script>
    export default {
        name:'AppSidebar'
    }
</script>

<style lang="scss" scoped>

</style>