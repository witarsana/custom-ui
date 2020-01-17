<template>
  <div id="app" class="flex flex-col h-screen overflow-hidden">
    <!-- Top Bar Start Here -->
    <div class="top-bar border-b border-gray-500 bg-white-custom flex items-center justify-between">
      <div class="logo w-24 bg-blue-1000 py-1 text-white text-center">Ribon UI</div>
      <div class="space flex-1 bg-white-custom"></div>
      <div class="accent flex px-2">
        <div class="w-4 h-4 bg-green-600 rounded-full"></div>
        <div class="w-4 h-4 ml-3 bg-yellow-600 rounded-full"></div>
        <div class="w-4 h-4 ml-3 bg-red-600 rounded-full"></div>
      </div>
    </div>
    <!-- Top Bar End Here -->
    <!-- Tab Bar Start Here -->
    <div class="tab-bar px-1 py-2 flex bg-white-custom-2 justify-between items-center">
      <!-- User -->
      <div class="user border-r border-gray-200">
        <ul class="mr-3">
          <li>
            <a class="flex items-center text-gray-600" href="#">
              <img src="./assets/img/avatar2.jpg" class="w-6 h-6 rounded-full flex-none" alt="">
              <span class="text-xs px-1 py-1 font-medium mr-2">John Doe</span>
              <button class="">
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
        <ul class="flex items-center text-gray-custom text-sm ">
          <li class="px-3 py-1 hover:bg-gray-500 rounded-full"><a href="#">Home</a></li>
          <li class="px-3 py-1 ml-2 font-bold text-white bg-blue-1000 rounded-full"><a href="#">Insert</a></li>         
          <li class="px-3 py-1 ml-2 hover:bg-gray-500 rounded-full"><a href="#">Page Layout</a></li>
          <li class="px-3 py-1 ml-2 hover:bg-gray-500 rounded-full"><a href="#">References</a></li>
          <li class="px-3 py-1 ml-2 hover:bg-gray-500 rounded-full"><a href="#">Review</a></li>
          <li class="px-3 py-1 ml-2 hover:bg-gray-500 rounded-full"><a href="#">View</a></li>
          <li class="px-3 py-1 ml-2 hover:bg-gray-500 rounded-full"><a href="#">Section</a></li>
          <li class="px-3 py-1 ml-2 hover:bg-gray-500 rounded-full"><a href="#">Tools</a></li>
        </ul>
      </div>
      <!-- Tab Title End Here-->
      <!-- User Message Start Here -->
      <div class="message">
        <ul class="flex items-center text-gray-700">
          <li class="px-2">
            <a href="#" class="hover:text-gray-900">
              <svg class="fill-current" width="20" height="20" viewBox="0 0 24 24"><title>ic_email_24px</title>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>  
              </svg>
            </a>
          </li>
          <li class="px-2">
            <a href="#" class="hover:text-gray-900">
              <svg class="fill-current"  width="20" height="20" viewBox="0 0 24 24"><title>ic_notifications_active_24px</title>                 
                <path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"></path>      
              </svg>
            </a>
          </li>
          <li class="px-2">
            <a href="#" class="hover:text-gray-900">
              <svg class="fill-current" width="20" height="20" viewBox="0 0 24 24">                  
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>                  
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <!-- User Message End Here -->
    </div>
    <!-- Tab Bar End Here -->
    <div class="menu-bar bg-white-custom-2 text-gray-custom ">
      <ul class="flex items-center px-1 py-2 shadow-2xl">
        <li class="">
          <a href="#" class="flex hover:text-gray-900 rounded hover:bg-gray-500 px-2 py-2 items-center flex-col">
            <span class="">
              <svg  width="35" height="35" viewBox="0 0 48 48"><title>ic_home_48px</title>                 
                <path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z"></path>                
              </svg>
            </span>
            <span class="text-sm">Home</span>
          </a>
        </li>
        <li class="border-r border-gray-300">
          <a href="#" class="flex hover:text-gray-900 rounded hover:bg-gray-500 px-2 py-2 items-center flex-col">
            <span class="">
              <svg  width="35" height="35" viewBox="0 0 48 48"><title>ic_show_chart_48px</title>                 
                <path d="M7 36.99l12-12.03 8 8 17-19.12-2.82-2.83L27 26.96l-8-8L4 33.99z"></path>                
              </svg>
            </span>
            <span class="text-sm">Dashboard</span>
          </a>
        </li>
        <li class="">
          <a href="#" class="flex hover:text-gray-900 rounded hover:bg-gray-500 px-2 py-2 items-center flex-col">
            <span class="">
              <svg  width="35" height="35" viewBox="0 0 48 48"><title>ic_whatshot_48px</title>
                
                <path d="M27 1.34s1.48 5.3 1.48 9.6c0 4.12-2.7 7.47-6.83 7.47s-7.25-3.34-7.25-7.47l.05-.72C10.43 15.03 8 21.23 8 28c0 8.84 7.16 16 16 16s16-7.16 16-16c0-10.79-5.19-20.41-13-26.66zM23.42 38c-3.56 0-6.45-2.81-6.45-6.28 0-3.25 2.09-5.53 5.63-6.24s7.2-2.41 9.23-5.15c.78 2.58 1.19 5.3 1.19 8.07 0 5.29-4.3 9.6-9.6 9.6z"></path>
                
              </svg>
            </span>
            <span class="text-sm">Type</span>
          </a>
        </li>
        
        <li class="">
          <a href="#" class="flex hover:text-gray-900 rounded hover:bg-gray-500 px-2 py-2 items-center flex-col">
            <span class="">
              <svg  width="35" height="35" viewBox="0 0 48 48"><title>ic_attach_money_48px</title>   
                <path d="M23.6 21.8c-4.54-1.18-6-2.39-6-4.29 0-2.18 2.01-3.71 5.4-3.71 3.56 0 4.88 1.7 5 4.2h4.42c-.13-3.45-2.24-6.59-6.42-7.62V6h-6v4.32c-3.88.85-7 3.35-7 7.22 0 4.62 3.83 6.92 9.4 8.26 5.01 1.2 6 2.95 6 4.83 0 1.37-.97 3.57-5.4 3.57-4.12 0-5.75-1.85-5.96-4.2h-4.41c.25 4.38 3.52 6.83 7.37 7.66V42h6v-4.3c3.89-.75 7-3 7-7.11 0-5.66-4.86-7.6-9.4-8.79z"></path>
    
              </svg>
            </span>
            <span class="text-sm">Salary</span>
          </a>
        </li>
        <li class="">
          <a href="#" class="flex hover:text-gray-900 rounded hover:bg-gray-500 px-2 py-2 items-center flex-col">
            <span class="">
              <svg width="35" height="35" viewBox="0 0 48 48"><title>ic_check_48px</title>                 
                <path d="M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z"></path>                  
              </svg>
            </span>
            <span class="text-sm">Insurance</span>
          </a>
        </li>
        <li class="">
          <a href="#" class="flex hover:text-gray-900 rounded hover:bg-gray-500 px-2 py-2 items-center flex-col">
            <span class="">
              <svg width="35" height="35" viewBox="0 0 48 48"><title>ic_people_outline_48px</title>                  
                <path d="M33 26c-2.41 0-6.15.67-9 2.01-2.85-1.34-6.59-2.01-9-2.01-4.33 0-13 2.17-13 6.5V38h44v-5.5c0-4.33-8.67-6.5-13-6.5zm-8 9H5v-2.5c0-1.07 5.12-3.5 10-3.5s10 2.43 10 3.5V35zm18 0H28v-2.5c0-.91-.4-1.72-1.04-2.44C28.73 29.46 30.89 29 33 29c4.88 0 10 2.43 10 3.5V35zM15 24c3.87 0 7-3.14 7-7s-3.13-7-7-7c-3.86 0-7 3.14-7 7s3.14 7 7 7zm0-11c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm18 11c3.87 0 7-3.14 7-7s-3.13-7-7-7c-3.86 0-7 3.14-7 7s3.14 7 7 7zm0-11c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"></path>                  
              </svg>
            </span>
            <span class="text-sm">Employee</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="worksheet bg-gray-custom-2 flex-1 overflow-y-auto"></div>
    <div class="footer bg-white-custom-2 h-10 text-center py-2 text-sm font-thin text-gray-custom">Copyright Koyo Royo 2019</div>
  </div>
</template>

<style>
</style>
