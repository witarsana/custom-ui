<template>
  <div id="app" class="flex flex-col h-screen overflow-hidden">
    <!-- Top Bar Start Here -->
    <div class="top-bar border-b border-gray-400 bg-blue-50 flex items-center justify-between">
      <div class="logo w-24 bg-blue-1000 py-1 text-white text-center">Custom UI</div>
    </div>
    <!-- Top Bar End Here -->
    <!-- Tab Bar Start Here -->
    <div class="tab-bar px-1 py-2 flex bg-gray-50 justify-between items-center">
      <!-- User -->
      <div class="user border-r border-gray-200">
        <ul class="mr-3">
          <li>
            <a class="flex items-center text-gray-600" href="#">
              <img src="./assets/img/avatar2.jpg" class="w-6 h-6 rounded-full flex-none" alt="">
              <span class="text-xs px-1 py-1 font-medium mr-2">John Doe</span>
              <button class="focus:outline-none">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                </svg>
              </button>
            </a>
          </li>
        </ul>
      </div>
      <!-- User End Here -->
      <!-- Tab Title Start-->
      <div class="tab-title flex-1 ml-3">
        <ul class="flex items-center text-gray-custom text-xs font-bold ">
          <li class="px-3 py-1 hover:bg-gray-500 rounded-full"><a href="#">Dashboard</a></li>
          <li class="px-3 py-1 ml-2 text-white bg-blue-1000 rounded-full"><a href="#">Master Data</a></li>         
          <li class="px-3 py-1 ml-2 hover:bg-blue-1000 hover:text-white rounded-full"><a href="#">Manajemen RAB</a></li>
          <li class="px-3 py-1 ml-2 hover:bg-blue-1000 hover:text-white rounded-full"><a href="#">Laporan</a></li>
          <li class="px-3 py-1 ml-2 hover:bg-blue-1000 hover:text-white rounded-full"><a href="#">Pengaturan</a></li>
          <li class="px-3 py-1 ml-2 hover:bg-blue-1000 hover:text-white rounded-full"><a href="#">Help</a></li>
          
        </ul>
      </div>
      <!-- Tab Title End Here-->
      <!-- User Message Start Here -->
      <div class="message">
        <ul class="flex items-center text-gray-700">
          <li class="px-2">
            <a href="#" class="hover:text-gray-900">
              <svg width="24" height="24" viewBox="0 0 48 48"><title>ic_notifications_none_48px</title>
                <g fill="#618dfa">
                    <path fill="#618dfa" d="M24 44c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4zm12-12V22c0-6.15-3.27-11.28-9-12.64V8c0-1.66-1.34-3-3-3s-3 1.34-3 3v1.36c-5.73 1.36-9 6.49-9 12.64v10l-4 4v2h32v-2l-4-4zm-4 2H16V22c0-4.97 3.03-9 8-9s8 4.03 8 9v12z"></path>
                </g>
              </svg>
            </a>
          </li>
          <li class="px-2">
            <a href="#" class="hover:text-gray-900">
              <svg width="22" height="22" viewBox="0 0 24 24"><title>ic_message_24px</title>
                  <g fill="#618dfa">
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                  </g>
              </svg>
            </a>
          </li>
          <li class="px-2">
            <a href="#" class="hover:text-gray-900">
              <svg width="22" height="22" viewBox="0 0 24 24"><title>ic_settings_24px</title>
                  <g fill="#618dfa">
                      <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
                  </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <!-- User Message End Here -->
    </div>
    <!-- Tab Bar End Here -->
    <!-- Menu Bar Start Here -->
    <div class="menu-bar text-xs font-semibold bg-gray-50 text-gray-75 ">
      <ul class="flex items-center px-1 py-2 border-b border-gray-400 shadow-2xl">
        <li class="">
          <a href="#" class="flex hover:text-white hover:bg-blue-1000 rounded px-1 py-2 items-center flex-col">
            <span class="">
              <svg class="fill-current"  width="30" height="30" viewBox="0 0 48 48"><title>ic_home_48px</title>                 
                <path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z"></path>                
              </svg>
            </span>
            <span class="text-xs">Beranda</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex hover:text-white hover:bg-blue-1000 rounded px-1 py-2 items-center flex-col">
            <span >
              <svg class="fill-current"  width="30" height="30" viewBox="0 0 48 48"><title>ic_show_chart_48px</title>                 
                <path d="M7 36.99l12-12.03 8 8 17-19.12-2.82-2.83L27 26.96l-8-8L4 33.99z"></path>                
              </svg>
            </span>
            <span>Chart</span>
          </a>
        </li>
        <li class="border-r h-16 w-2 border-gray-300"></li>
        <li class="">
          <a href="#" class="flex hover:text-white hover:bg-blue-1000 rounded px-1 py-2 items-center flex-col">
            <span class="">
              <svg class="fill-current" width="30" height="30" viewBox="0 0 48 48"><title>ic_shopping_basket_48px</title>                 
                  <path d="M34.42 18L25.66 4.89c-.38-.58-1.02-.85-1.66-.85-.64 0-1.28.28-1.66.85L13.58 18H4c-1.1 0-2 .9-2 2 0 .19.03.37.07.54l5.07 18.54C7.61 40.76 9.16 42 11 42h26c1.84 0 3.39-1.24 3.85-2.93l5.07-18.54c.05-.16.08-.34.08-.53 0-1.1-.9-2-2-2h-9.58zM18 18l6-8.8 6 8.8H18zm6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>                 
              </svg>
            </span>
            <span >Belanja</span>
          </a>
        </li>
        
        <li class="">
          <a href="#" class="flex hover:text-white hover:bg-blue-1000 rounded px-1 py-2 items-center flex-col">
            <span class="">
              <svg class="fill-current" width="30" height="30" viewBox="0 0 48 48"><title>ic_format_list_numbered_48px</title>                  
                  <path d="M4 34h4v1H6v2h2v1H4v2h6v-8H4v2zm2-18h2V8H4v2h2v6zm-2 6h3.6L4 26.2V28h6v-2H6.4l3.6-4.2V20H4v2zm10-12v4h28v-4H14zm0 28h28v-4H14v4zm0-12h28v-4H14v4z"></path>
              </svg>
            </span>
            <span >Kategori</span>
          </a>
        </li>
        <li class="">
          <a href="#" class="flex hover:text-white hover:bg-blue-1000 rounded px-1 py-2 items-center flex-col">
            <span class="">
              <svg class="fill-current" width="30" height="30" viewBox="0 0 48 48"><title>ic_style_48px</title>                  
                <path d="M5.06 39.31l2.69 1.11V22.37L2.9 34.08c-.84 2.03.13 4.38 2.16 5.23zm39-7.42L34.14 7.96c-.62-1.5-2.08-2.43-3.61-2.46-.53-.01-1.07.09-1.6.3L14.2 11.9c-1.5.62-2.42 2.07-2.46 3.6-.01.54.08 1.08.3 1.61l9.91 23.93c.63 1.52 2.1 2.44 3.66 2.46.52 0 1.04-.09 1.55-.3l14.73-6.1c2.03-.84 3.01-3.18 2.17-5.21zM15.75 17.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4 22c0 2.2 1.8 4 4 4h2.91l-6.91-16.68V39.5z"></path>                  
              </svg>
            </span>
            <span >Item</span>
          </a>
        </li>
        <li class="border-r h-16 w-2 border-gray-300"></li>
        <li class="">
          <a href="#" class="flex hover:text-white hover:bg-blue-1000 rounded px-1 py-2 items-center flex-col">
            <svg class="fill-current" width="30" height="30" viewBox="0 0 48 48"><title>ic_layers_48px</title>                
                <path d="M23.99 37.08L9.24 25.61 6 28.13l18 14 18-14-3.26-2.53-14.75 11.48zM24 32l14.73-11.45L42 18 24 4 6 18l3.26 2.53L24 32z"></path>               
            </svg>
            <span >Jabatan</span>
          </a>
        </li>
        <li class="">
          <a href="#" class="flex hover:text-white hover:bg-blue-1000 rounded px-1 py-2 items-center flex-col">
            <span class="">
              <svg class="fill-current" width="30" height="30" viewBox="0 0 48 48"><title>ic_people_outline_48px</title>                  
                <path d="M33 26c-2.41 0-6.15.67-9 2.01-2.85-1.34-6.59-2.01-9-2.01-4.33 0-13 2.17-13 6.5V38h44v-5.5c0-4.33-8.67-6.5-13-6.5zm-8 9H5v-2.5c0-1.07 5.12-3.5 10-3.5s10 2.43 10 3.5V35zm18 0H28v-2.5c0-.91-.4-1.72-1.04-2.44C28.73 29.46 30.89 29 33 29c4.88 0 10 2.43 10 3.5V35zM15 24c3.87 0 7-3.14 7-7s-3.13-7-7-7c-3.86 0-7 3.14-7 7s3.14 7 7 7zm0-11c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm18 11c3.87 0 7-3.14 7-7s-3.13-7-7-7c-3.86 0-7 3.14-7 7s3.14 7 7 7zm0-11c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"></path>                  
              </svg>
            </span>
            <span >Pegawai</span>
          </a>
        </li>
        <li class="">
          <a href="#" class="flex hover:text-white hover:bg-blue-1000 rounded px-1 py-2 items-center flex-col">
            <span class="">
              <svg class="fill-current" width="30" height="30" viewBox="0 0 48 48"><title>ic_portrait_48px</title>                  
                <path d="M24 24.5c2.48 0 4.5-2.01 4.5-4.5 0-2.48-2.02-4.5-4.5-4.5s-4.5 2.02-4.5 4.5c0 2.49 2.02 4.5 4.5 4.5zm9 8c0-3-6-4.5-9-4.5s-9 1.5-9 4.5V34h18v-1.5zM38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H10V10h28v28z"></path>                  
              </svg>
            </span>
            <span >Pengguna</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- Menu Bar End Here -->
    <div class="worksheet bg-gray-300 flex-1 flex flex-col overflow-y-auto">
      <div></div>
      <div class="paper-work flex h-12 justify-between items-center bg-white px-3 border border-gray-400 py-2 mx-auto w-11-5/12 my-3">        
        <h1 class="uppercase font-bold text-lg text-blue-1000">Dashboard</h1>
        <span class="text-blue-1000 text-sm ">Home | Dashboard</span>
      </div>
      <div class="paper-work flex  justify-between items-center mx-auto w-11-5/12 my-3">
        <div class="card bg-blue-1000 px-4  flex flex-col py-2 flex-wrap w-3-5/12 h-40 text-white rounded shadow-2xl ">
          <div class="crad-title text-base font-semibold">APBDES</div>
          <div class="flex justify-between items-center">
            <div class="caption flex-1">
              <span class="block text-4xl">20,000 K</span>
              <span class="block text-sm italic">Peningkatan 30% dari sebelumnya</span>
            </div>
            <div class="icon w-16">
              <svg class="fill-current" width="60" height="60" viewBox="0 0 48 48"><title>ic_shopping_basket_48px</title>                 
                  <path d="M34.42 18L25.66 4.89c-.38-.58-1.02-.85-1.66-.85-.64 0-1.28.28-1.66.85L13.58 18H4c-1.1 0-2 .9-2 2 0 .19.03.37.07.54l5.07 18.54C7.61 40.76 9.16 42 11 42h26c1.84 0 3.39-1.24 3.85-2.93l5.07-18.54c.05-.16.08-.34.08-.53 0-1.1-.9-2-2-2h-9.58zM18 18l6-8.8 6 8.8H18zm6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>                
              </svg>
            </div>
          </div>
        </div>
        <div class="card bg-teal-500 px-4 flex flex-col py-2 flex-wrap w-3-5/12 h-40 text-white rounded shadow-2xl ">
          <div class="crad-title text-base font-semibold">Dana Serapan</div>
          <div class="flex justify-between items-center">
            <div class="caption flex-1">
              <span class="block text-4xl"><span class="font-bold">80</span> %</span>
              <span class="block text-sm italic">Peningkatan 10% dari sebelumnya</span>
            </div>
            <div class="icon w-16">
              <svg class="fill-current" width="50" height="50" viewBox="0 0 284.929 284.929"><title>thin-arrowheads-pointing-down</title><path d="M135.899 167.877c1.902 1.902 4.093 2.851 6.567 2.851s4.661-.948 6.562-2.851L282.082 34.829c1.902-1.903 2.847-4.093 2.847-6.567s-.951-4.665-2.847-6.567L267.808 7.417c-1.902-1.903-4.093-2.853-6.57-2.853-2.471 0-4.661.95-6.563 2.853L142.466 119.622 30.262 7.417c-1.903-1.903-4.093-2.853-6.567-2.853-2.475 0-4.665.95-6.567 2.853L2.856 21.695C.95 23.597 0 25.784 0 28.262c0 2.478.953 4.665 2.856 6.567l133.043 133.048z"></path><path d="M267.808 117.053c-1.902-1.903-4.093-2.853-6.57-2.853-2.471 0-4.661.95-6.563 2.853L142.466 229.257 30.262 117.05c-1.903-1.903-4.093-2.853-6.567-2.853-2.475 0-4.665.95-6.567 2.853L2.856 131.327C.95 133.23 0 135.42 0 137.893c0 2.474.953 4.665 2.856 6.57l133.043 133.046c1.902 1.903 4.093 2.854 6.567 2.854s4.661-.951 6.562-2.854l133.054-133.046c1.902-1.903 2.847-4.093 2.847-6.565 0-2.474-.951-4.661-2.847-6.567l-14.274-14.278z"></path></svg>
            </div>
          </div>
        </div>
        <div class="card bg-orange-600 px-4 flex flex-col py-2 flex-wrap w-3-5/12 h-40 text-white rounded shadow-2xl ">
          <div class="crad-title text-base font-semibold">Kegiatan</div>
          <div class="flex justify-between items-center">
            <div class="caption flex-1">
              <span class="block text-4xl"><span class="font-bold">150</span> Kegiatan</span>
              <span class="block text-sm italic">Peningkatan 10% dari sebelumnya</span>
            </div>
            <div class="icon w-16">
              <svg class="fill-current" width="60" height="60" viewBox="0 0 48 48"><title>ic_timeline_48px</title>
                <path d="M46 16c0 2.2-1.8 4-4 4-.36 0-.7-.04-1.02-.14l-7.12 7.1c.1.32.14.68.14 1.04 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-.36.04-.72.14-1.04l-5.1-5.1c-.32.1-.68.14-1.04.14s-.72-.04-1.04-.14l-9.1 9.12c.1.32.14.66.14 1.02 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.36 0 .7.04 1.02.14l9.12-9.1c-.1-.32-.14-.68-.14-1.04 0-2.2 1.8-4 4-4s4 1.8 4 4c0 .36-.04.72-.14 1.04l5.1 5.1c.32-.1.68-.14 1.04-.14s.72.04 1.04.14l7.1-7.12c-.1-.32-.14-.66-.14-1.02 0-2.2 1.8-4 4-4s4 1.8 4 4z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="paper-work px-4 py-4 justify-between items-center bg-white border border-gray-400  mx-auto w-11-5/12 my-3">
        <span class="block text-blue-1000 text-lg"><span class="font-bold">APBDES</span></spam> Dalam Grafik</span>
        <span class="block">
          <highcharts :options="chartOptions"></highcharts>
        </span>
      </div>
    </div>
    <div class="footer border-t border-gray-400 bg-white-custom-2 h-10 text-center py-2 text-sm font-thin text-gray-custom">Copyright&copy; Koyo Royo 2020</div>
  </div>
</template>
<script>
import {Chart} from 'highcharts-vue'
export default {
  components: {
    highcharts: Chart 
  },
  data() {
    return {
      chartOptions: {
        chart: {
          
        },
        title : {
          text : '',
        },
        series: [{
          data: [1,3,5,3,2,6,8,15,2,5,7] // sample data
        }]
      }
    }
  }
}
</script>
<style>
  .highcharts-credits{
    display: none;
  }
</style>
