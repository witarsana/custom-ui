<template>
  <div>
    <div class="paper-work flex h-12 justify-between items-center px-2 border py-2 mx-auto w-11-5/12">        
      <h1 class="uppercase font-bold text-lg text-blue-1000">Dashboard</h1>
      <span class="text-blue-1000 text-sm ">Home | Dashboard</span>
    </div>
      <div class="paper-work flex flex-col md:flex-row xl:flex-row  justify-between items-center mx-auto w-11-5/12 ">
        <div class="card-container w-full md:w-2/4 xl:w-1/4 mb-4 md:mb-0 xl:mb-0 px-2 text-white">
          <div class="card flex flex-col bg-blue-500 shadow-lg ">
            <div class="card-main px-2 py-2 flex justify-between items-center">
              <div class="card-left flex-1">
                <div class="card-title text-base font-semibold">SALES</div>
                <span class="block text-2xl md:text-2xl xl:text-4xl">20,000 K</span>
                <span class="block text-sm italic">Increased 30% from last month</span>
              </div>
              <div class="card-right">
                <svg class="fill-current" width="60" height="60" viewBox="0 0 48 48">                 
                    <path d="M34.42 18L25.66 4.89c-.38-.58-1.02-.85-1.66-.85-.64 0-1.28.28-1.66.85L13.58 18H4c-1.1 0-2 .9-2 2 0 .19.03.37.07.54l5.07 18.54C7.61 40.76 9.16 42 11 42h26c1.84 0 3.39-1.24 3.85-2.93l5.07-18.54c.05-.16.08-.34.08-.53 0-1.1-.9-2-2-2h-9.58zM18 18l6-8.8 6 8.8H18zm6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>                
                </svg>
              </div>
            </div>
            <a href="#" class="card-footer hover:opacity-75 text-sm py-2 block flex items-center justify-center bg-transparent bg-blue-600 text-center">
              <span class="mr-1">More info</span>
              <svg class="fill-current"  width="16" height="16" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"></path><path  d="M5.543 11.043l1.414 1.414L11.414 8 6.957 3.543 5.543 4.957 8.586 8z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="card-container w-full md:w-2/4 xl:w-1/4 mb-4 md:mb-0 xl:mb-0 px-2 text-white">
          <div class="card flex flex-col bg-orange-500 shadow-lg ">
            <div class="card-main px-2 py-2 flex justify-between items-center">
              <div class="card-left flex-1">
                <div class="card-title text-base font-semibold">ORDER</div>
                <span class="block text-2xl md:text-2xl xl:text-4xl">15,500 K</span>
                <span class="block text-sm italic">Increased 25% from last month</span>
              </div>
              <div class="card-right">
               <svg class="fill-current" x="0px" y="0px"
                width="60" height="60"
                viewBox="0 0 24 24"
                style=""><path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"></path></svg>
              </div>
            </div>
            <a href="#" class="card-footer hover:opacity-75 text-sm py-2 block flex items-center justify-center bg-transparent bg-orange-600 text-center">
              <span class="mr-1">More info</span>
              <svg class="fill-current"  width="16" height="16" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"></path><path  d="M5.543 11.043l1.414 1.414L11.414 8 6.957 3.543 5.543 4.957 8.586 8z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="card-container w-full md:w-2/4 xl:w-1/4 mb-4 md:mb-0 xl:mb-0 px-2 text-white">
          <div class="card flex flex-col bg-green-500 shadow-lg ">
            <div class="card-main px-2 py-2 flex justify-between items-center">
              <div class="card-left flex-1">
                <div class="card-title text-base font-semibold">COST</div>
                <span class="block text-2xl md:text-2xl xl:text-4xl">1000 K</span>
                <span class="block text-sm italic">75% Cost Decrease</span>
              </div>
              <div class="card-right">
                <svg class="fill-current" width="50" height="50" viewBox="0 0 284.929 284.929"><title>thin-arrowheads-pointing-down</title><path d="M135.899 167.877c1.902 1.902 4.093 2.851 6.567 2.851s4.661-.948 6.562-2.851L282.082 34.829c1.902-1.903 2.847-4.093 2.847-6.567s-.951-4.665-2.847-6.567L267.808 7.417c-1.902-1.903-4.093-2.853-6.57-2.853-2.471 0-4.661.95-6.563 2.853L142.466 119.622 30.262 7.417c-1.903-1.903-4.093-2.853-6.567-2.853-2.475 0-4.665.95-6.567 2.853L2.856 21.695C.95 23.597 0 25.784 0 28.262c0 2.478.953 4.665 2.856 6.567l133.043 133.048z"></path><path d="M267.808 117.053c-1.902-1.903-4.093-2.853-6.57-2.853-2.471 0-4.661.95-6.563 2.853L142.466 229.257 30.262 117.05c-1.903-1.903-4.093-2.853-6.567-2.853-2.475 0-4.665.95-6.567 2.853L2.856 131.327C.95 133.23 0 135.42 0 137.893c0 2.474.953 4.665 2.856 6.57l133.043 133.046c1.902 1.903 4.093 2.854 6.567 2.854s4.661-.951 6.562-2.854l133.054-133.046c1.902-1.903 2.847-4.093 2.847-6.565 0-2.474-.951-4.661-2.847-6.567l-14.274-14.278z"></path></svg>
              </div>
            </div>
            <a href="#" class="card-footer hover:opacity-75 text-sm py-2 block flex items-center justify-center bg-transparent bg-green-600 text-center">
              <span class="mr-1">More info</span>
              <svg class="fill-current"  width="16" height="16" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"></path><path  d="M5.543 11.043l1.414 1.414L11.414 8 6.957 3.543 5.543 4.957 8.586 8z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="card-container w-full md:w-2/4 xl:w-1/4 mb-4 md:mb-0 xl:mb-0 px-2 text-white">
          <div class="card flex flex-col bg-red-500 shadow-lg ">
            <div class="card-main px-2 py-2 flex justify-between items-center">
              <div class="card-left flex-1">
                <div class="card-title text-base font-semibold">GROWTH</div>
                <span class="block text-2xl md:text-2xl xl:text-4xl">25%</span>
                <span class="block text-sm italic">5000 New Stores World Wide</span>
              </div>
              <div class="card-right">
                <svg class="fill-current" width="60" height="60" viewBox="0 0 48 48"><title>ic_timeline_48px</title>
                  <path d="M46 16c0 2.2-1.8 4-4 4-.36 0-.7-.04-1.02-.14l-7.12 7.1c.1.32.14.68.14 1.04 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-.36.04-.72.14-1.04l-5.1-5.1c-.32.1-.68.14-1.04.14s-.72-.04-1.04-.14l-9.1 9.12c.1.32.14.66.14 1.02 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.36 0 .7.04 1.02.14l9.12-9.1c-.1-.32-.14-.68-.14-1.04 0-2.2 1.8-4 4-4s4 1.8 4 4c0 .36-.04.72-.14 1.04l5.1 5.1c.32-.1.68-.14 1.04-.14s.72.04 1.04.14l7.1-7.12c-.1-.32-.14-.66-.14-1.02 0-2.2 1.8-4 4-4s4 1.8 4 4z"></path>
                </svg>
              </div>
            </div>
            <a href="#" class="card-footer hover:opacity-75 text-sm py-2 block flex items-center justify-center bg-transparent bg-red-600 text-center">
              <span class="mr-1">More info</span>
              <svg class="fill-current"  width="16" height="16" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"></path><path  d="M5.543 11.043l1.414 1.414L11.414 8 6.957 3.543 5.543 4.957 8.586 8z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <!-- Chart -->
      <div class="paper-work flex flex-col md:flex-row xl:flex-row  justify-between items-center mx-auto w-11-5/12 mt-5">
        <!-- <div class="card-container w-full md:w-full xl:w-1/2 mb-2 md:mb-2 xl:mb-0 px-2 text-white">
          <div class="card flex flex-col bg-white shadow-lg px-4 py-2">
            <span class="block text-blue-1000 text-lg"><span class="font-bold">SALES</span> Monthly</span>
            <span class="block mt-4">
              <highcharts :options="chartOptions"></highcharts>
            </span>
          </div>
        </div> -->
        <!-- Chart -->
        <div class="card-container w-full md:w-full xl:w-4/6 mb-2 md:mb-2 xl:mb-0 px-2 text-white">
          <div class="card flex flex-col bg-white shadow-lg px-4 py-2">
            <span class="block text-blue-1000 text-lg font-semibold flex items-center">
              <svg class="fill-current" width="25" height="25" viewBox="0 0 48 48"><title>ic_public_48px</title>
                  
                      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2 35.86C14.11 38.88 8 32.16 8 24c0-1.23.15-2.43.42-3.58L18 30v2c0 2.21 1.79 4 4 4v3.86zm13.79-5.07C35.28 33.17 33.78 32 32 32h-2v-6c0-1.1-.9-2-2-2H16v-4h4c1.1 0 2-.9 2-2v-4h4c2.21 0 4-1.79 4-4v-.83c5.86 2.37 10 8.11 10 14.83 0 4.16-1.6 7.94-4.21 10.79z"></path>
                
              </svg>
              <span class="flex-1 ml-2">Operating System User</span> 
            </span>
            <span class="block mt-4">
              <highcharts :options="chartOptions2"></highcharts>
            </span>
          </div>
        </div>
        <!-- Chart -->
        <!-- Chat -->
         <div class="card-container w-full md:w-full xl:w-2/6 mb-2 md:mb-2 xl:mb-0 px-2 text-white">
          <div class="card flex  flex-col bg-white shadow-lg px-4 py-2 ">
            <span class="block  text-blue-1000 text-lg font-semibold flex items-center">
              <svg class="fill-current" width="25" height="25" viewBox="0 0 48 48">                
                <path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 18h24v4H12v-4zm16 10H12v-4h16v4zm8-12H12v-4h24v4z"></path>   
              </svg>
              <span class="flex-1 ml-2">Chat</span> 
            </span>
            <div class="mt-4 w-full h-85 overflow-hidden flex flex-col">
              <ul class="chat flex-1 overflow-y-auto">
                <li class="flex my-2">
                  <span><img class="w-10 mx-2 rounded-full" src="../assets/img/avatars/user4-128x128.jpg"></span>
                  <span class="chat-content flex-1">
                    <p class="bg-blue-500 text-sm rounded-lg px-2 py-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laborum harum quos doloremque numquam sapiente.
                    </p>
                    <span class="block text-center font-semibold text-gray-custom mt-2 text-xxs">20/01/2020 | 11:40</span>
                  </span>
                </li>
                <li class="flex my-2 mt-4">
                  <span class="chat-content flex-1">
                    <p class="bg-green-500 text-sm rounded-lg px-2 py-2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quasi consequuntur optio voluptate quo enim deserunt iste illo harum nostrum.
                    </p>
                     <span class="block text-center font-semibold text-gray-custom mt-2 text-xxs">20/01/2020 | 11:40</span>
                  </span>
                  <span><img class="w-10 mx-2 rounded-full" src="../assets/img/avatars/user5-128x128.jpg"></span>
                </li>
                <li class="flex my-2 mt-4">
                  <span><img class="w-10 mx-2 rounded-full" src="../assets/img/avatars/user4-128x128.jpg"></span>
                  <span class="chat-content flex-1">
                    <p class="bg-blue-500 text-sm rounded-lg px-2 py-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laborum harum quos doloremque numquam sapiente.
                    </p>
                    <span class="block text-center font-semibold text-gray-custom mt-2 text-xxs">20/01/2020 | 11:40</span>
                  </span>
                </li>
                <li class="flex my-2 mt-4">
                  <span class="chat-content flex-1">
                    <p class="bg-green-500 text-sm rounded-lg px-2 py-2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quasi consequuntur optio voluptate quo enim deserunt iste illo harum nostrum.
                    </p>
                     <span class="block text-center font-semibold text-gray-custom mt-2 text-xxs">20/01/2020 | 11:40</span>
                  </span>
                  <span><img class="w-10 mx-2 rounded-full" src="../assets/img/avatars/user5-128x128.jpg"></span>
                </li>
              </ul>
              <div class="input-chat h-8 mt-2 shadow-inner">
                <input type="text" placeholder="Write something and press enter to send.." class="w-full text-sm text-gray-custom h-full px-2 py-2 focus:outline-none border border-gray-300">
              </div>
            </div>
          </div>
        </div>
        <!-- Chat -->
      </div>
      <!-- Chart -->
      
  </div>
</template>

<script>
export default {
  name: 'home',
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
      },
      chartOptions2: {
        chart: {
          type: 'bar'
          },
          title: {
              text: ''
          },
          xAxis: {
              categories: ['Android', 'IOS', 'Chrome OS']
          },
          yAxis: {
              title: {
                  text: 'Month'
              }
          },
          series: [{
              name: 'Old Version',
              color:"#587DF5",
              data: [5, 4, 5]
          }, {
              name: 'New Version',
              color:"#37BBBB",
              data: [3, 7, 5]
          }]
      },
    }
  },
}
</script>
