<template>
  <div id="app" class="flex flex-col h-screen">
    <!-- Top Bar Start Here -->
    <div class="top-bar border-b border-gray-500 bg-blue-100 flex items-center justify-between">
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
    <div class="tab-bar px-1 py-2 flex justify-between items-center">
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
        <ul class="flex items-center text-gray-700 text-sm ">
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
    <div class="menu-bar bg-blue-300">Menu Bar</div>
    <div class="worksheet bg-blue-700 flex-1">Worksheet</div>
    <div class="footer bg-blue-900">Footer</div>
  </div>
</template>

<style>
</style>
