<template>
  <div>
    <div class="paper-work flex h-12 justify-between items-center bg-white px-3 border border-gray-400 py-2 mx-auto w-11-5/12 my-3">        
        <h1 class="uppercase font-bold text-lg text-blue-1000">Dashboard 2</h1>
        <span class="text-blue-1000 text-sm ">Home | Dashboard 2</span>
      </div>
      <div class="paper-work flex flex-col md:flex-row xl:flex-row  justify-between items-center mx-auto w-11-5/12 my-3">
        <div class="card bg-blue-1000 px-4  flex flex-col py-2 flex-wrap w-full md:w-3-5/12 xl:w-3-5/12 h-40 text-white rounded shadow-2xl mb-5 md:mb-0 xl:mb-0">
          <div class="crad-title text-base font-semibold">APBDES</div>
          <div class="flex justify-between items-center">
            <div class="caption flex-1">
              <span class="block text-2xl md:text-2xl xl:text-4xl">20,000 K</span>
              <span class="block text-sm italic">Peningkatan 30% dari sebelumnya</span>
            </div>
            <div class="icon w-16">
              <svg class="fill-current" width="60" height="60" viewBox="0 0 48 48">                 
                  <path d="M34.42 18L25.66 4.89c-.38-.58-1.02-.85-1.66-.85-.64 0-1.28.28-1.66.85L13.58 18H4c-1.1 0-2 .9-2 2 0 .19.03.37.07.54l5.07 18.54C7.61 40.76 9.16 42 11 42h26c1.84 0 3.39-1.24 3.85-2.93l5.07-18.54c.05-.16.08-.34.08-.53 0-1.1-.9-2-2-2h-9.58zM18 18l6-8.8 6 8.8H18zm6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>                
              </svg>
            </div>
          </div>
        </div>
        <div class="card bg-teal-500 px-4 flex flex-col py-2 flex-wrap w-full md:w-3-5/12 xl:w-3-5/12 mb-5 md:mb-0 xl:mb-0 h-40 text-white rounded shadow-2xl ">
          <div class="crad-title text-base font-semibold">Dana Serapan</div>
          <div class="flex justify-between items-center">
            <div class="caption flex-1">
              <span class="block text-2xl md:text-2xl xl:text-4xl"><span class="font-bold">80</span> %</span>
              <span class="block text-sm italic">Peningkatan 10% dari sebelumnya</span>
            </div>
            <div class="icon w-16">
              <svg class="fill-current" width="50" height="50" viewBox="0 0 284.929 284.929"><title>thin-arrowheads-pointing-down</title><path d="M135.899 167.877c1.902 1.902 4.093 2.851 6.567 2.851s4.661-.948 6.562-2.851L282.082 34.829c1.902-1.903 2.847-4.093 2.847-6.567s-.951-4.665-2.847-6.567L267.808 7.417c-1.902-1.903-4.093-2.853-6.57-2.853-2.471 0-4.661.95-6.563 2.853L142.466 119.622 30.262 7.417c-1.903-1.903-4.093-2.853-6.567-2.853-2.475 0-4.665.95-6.567 2.853L2.856 21.695C.95 23.597 0 25.784 0 28.262c0 2.478.953 4.665 2.856 6.567l133.043 133.048z"></path><path d="M267.808 117.053c-1.902-1.903-4.093-2.853-6.57-2.853-2.471 0-4.661.95-6.563 2.853L142.466 229.257 30.262 117.05c-1.903-1.903-4.093-2.853-6.567-2.853-2.475 0-4.665.95-6.567 2.853L2.856 131.327C.95 133.23 0 135.42 0 137.893c0 2.474.953 4.665 2.856 6.57l133.043 133.046c1.902 1.903 4.093 2.854 6.567 2.854s4.661-.951 6.562-2.854l133.054-133.046c1.902-1.903 2.847-4.093 2.847-6.565 0-2.474-.951-4.661-2.847-6.567l-14.274-14.278z"></path></svg>
            </div>
          </div>
        </div>
        <div class="card bg-orange-600 px-4 flex flex-col py-2 flex-wrap w-full md:w-3-5/12 xl:w-3-5/12 h-40 text-white rounded shadow-2xl mb-5 md:mb-0 xl:mb-0">
          <div class="crad-title text-base font-semibold">Kegiatan</div>
          <div class="flex justify-between items-center">
            <div class="caption flex-1">
              <span class="block text-2xl md:text-2xl xl:text-4xl"><span class="font-bold">150</span> Kegiatan</span>
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
    }
  },
}
</script>
