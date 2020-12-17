<template>
  <div id="app" class="flex flex-col h-screen overflow-hidden">
    <!-- Top Bar Start Here -->
    <logoheader></logoheader>
    <!-- Top Bar End Here -->
    <!-- Header Menu -->
    <headermenu></headermenu>
    <!-- Header Menu -->
    <div class="worksheet bg-gray-300 flex-1 flex flex-col overflow-y-auto py-2">
      <router-view class="view"></router-view>
    </div>
    <div class="footer border-t border-gray-400 bg-white-custom-2 h-10 text-center py-2 text-sm font-thin text-gray-custom">Copyright&copy; Koyo Royo 2020</div>
  </div>
</template>
<script>

import LogoHeader from './components/template/LogoHeader.vue';
import HeaderMenu from './components/template/HeaderMenu.vue';
export default {
  components: {
    
    logoheader : LogoHeader, 
    headermenu : HeaderMenu,
  },
  
  methods : {},
  
}
</script>
<style>
  .highcharts-credits{
    display: none;
  }
</style>
