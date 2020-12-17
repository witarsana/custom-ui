<template>
  <div>
    <!-- Tab Bar Start Here -->
    <div class="tab-bar px-1 py-2 flex bg-gray-50 justify-between items-center">
      <!-- User -->
      <div class="user border-r border-gray-200">
        <ul class="mr-3">
          <li class="relative">
            <a @click="userMenu()" class="flex items-center text-gray-600" href="#">
              <img src="../../assets/img/avatar2.png" class="w-6 h-6 rounded-full flex-none" alt />
              <span class="text-xs px-1 py-1 font-medium mr-2">John Doe</span>
              <button class="focus:outline-none">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
                </svg>
              </button>
            </a>
            <transition name="showhidden">
              <div
                v-if="showUser"
                class="user-drop absolute w-40 h-24 bg-white shadow"
                style="left:5px; top:30px;"
              >
                <ul class="px-1 py-3 text-gray-custom">
                  <li class="py-1 px-1 hover:bg-white-custom rounded">
                    <a href="#" class="flex justify-between items-center">
                      <span class="w-3">
                        <svg class="fill-current" width="18" height="18" viewBox="0 0 24 24">
                          <path
                            d="M23.707,7.293L20.414,4l2.293-2.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0 L10.901,10.685c0.262,0.204,0.517,0.42,0.756,0.658c0.239,0.239,0.454,0.494,0.658,0.756L16,8.414l3.293,3.293 C19.488,11.902,19.744,12,20,12s0.512-0.098,0.707-0.293l3-3C24.098,8.316,24.098,7.684,23.707,7.293z"
                          />
                          <path
                            d="M6,23c1.603,0,3.109-0.624,4.243-1.757S12,18.603,12,17s-0.624-3.109-1.757-4.243S7.603,11,6,11 s-3.109,0.624-4.243,1.757S0,15.397,0,17s0.624,3.109,1.757,4.243S4.397,23,6,23z"
                          />
                        </svg>
                      </span>
                      <span class="flex-1 ml-4 text-sm font-semibold">Change Password</span>
                    </a>
                  </li>
                  <li class="py-1 px-1 border-b border-gray-200"></li>
                  <li class="py-1 px-1 hover:bg-white-custom rounded mt-2">
                    <a href="#" class="flex justify-between items-center">
                      <span class="w-3">
                        <svg
                          class="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 447.674 447.674"
                        >
                          <path
                            d="M182.725 379.151c-.572-1.522-.769-2.816-.575-3.863.193-1.04-.472-1.902-1.997-2.566-1.525-.664-2.286-1.191-2.286-1.567 0-.38-1.093-.667-3.284-.855-2.19-.191-3.283-.288-3.283-.288H82.224c-12.562 0-23.317-4.469-32.264-13.421-8.945-8.946-13.417-19.698-13.417-32.258V123.335c0-12.562 4.471-23.313 13.417-32.259 8.947-8.947 19.702-13.422 32.264-13.422h91.361c2.475 0 4.421-.614 5.852-1.854 1.425-1.237 2.375-3.094 2.853-5.568.476-2.474.763-4.708.859-6.707.094-1.997.048-4.521-.144-7.566-.189-3.044-.284-4.947-.284-5.712 0-2.474-.905-4.611-2.712-6.423-1.809-1.804-3.949-2.709-6.423-2.709H82.224c-22.648 0-42.016 8.042-58.101 24.125C8.042 81.323 0 100.688 0 123.338v200.994c0 22.648 8.042 42.018 24.123 58.095 16.085 16.091 35.453 24.133 58.101 24.133h91.365c2.475 0 4.422-.622 5.852-1.854 1.425-1.239 2.375-3.094 2.853-5.571.476-2.471.763-4.716.859-6.707.094-1.999.048-4.518-.144-7.563-.191-3.048-.284-4.95-.284-5.714z"
                          />
                          <path
                            d="M442.249 210.989L286.935 55.67c-3.614-3.612-7.898-5.424-12.847-5.424s-9.233 1.812-12.851 5.424c-3.617 3.617-5.424 7.904-5.424 12.85v82.226H127.907c-4.952 0-9.233 1.812-12.85 5.424-3.617 3.617-5.424 7.901-5.424 12.85v109.636c0 4.948 1.807 9.232 5.424 12.847 3.621 3.61 7.901 5.427 12.85 5.427h127.907v82.225c0 4.945 1.807 9.233 5.424 12.847 3.617 3.617 7.901 5.428 12.851 5.428 4.948 0 9.232-1.811 12.847-5.428L442.249 236.69c3.617-3.62 5.425-7.898 5.425-12.848 0-4.948-1.808-9.236-5.425-12.853z"
                          />
                        </svg>
                      </span>
                      <span class="flex-1 ml-4 text-sm font-semibold">Signout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </transition>
          </li>
        </ul>
      </div>
      <!-- User End Here -->
      <!-- Tab Title Start-->
      <div class="tab-title w-64 md:w-full xl:w-full xl:flex-1 md:flex-1 ml-3 overflow-hidden">
        <ul class="items-center text-gray-custom overflow-x-auto text-xs font-bold flex md:flex xl:flex">
          <li
            @click="selectTab('dashboard')"
            :class="selectedTab=='dashboard'?'text-white bg-blue-1000':''"
            class="px-3 py-1 hover:bg-blue-1000 hover:text-white rounded-full"
          >
            <a href="#">Dashboard</a>
          </li>
          <li
            @click="selectTab('widget')"
            :class="selectedTab=='widget'?'text-white bg-blue-1000':''"
            class="px-3 py-1 ml-2 hover:bg-blue-1000 hover:text-white rounded-full"
          >
            <a href="#">Widget</a>
          </li>
          <li
            @click="selectTab('form')"
            :class="selectedTab=='form'?'text-white bg-blue-1000':''"
            class="px-3 py-1 ml-2 hover:bg-blue-1000 hover:text-white rounded-full"
          >
            <a href="#">Form</a>
          </li>
          <li
            @click="selectTab('tables')"
            :class="selectedTab=='tables'?'text-white bg-blue-1000':''"
            class="px-3 py-1 ml-2 hover:bg-blue-1000 hover:text-white rounded-full"
          >
            <a href="#">Tables</a>
          </li>
          <li
            @click="selectTab('setting')"
            :class="selectedTab=='setting'?'text-white bg-blue-1000':''"
            class="px-3 py-1 ml-2 hover:bg-blue-1000 hover:text-white rounded-full"
          >
            <a href="#">Setting</a>
          </li>
          <li
            @click="selectTab('help')"
            :class="selectedTab=='help'?'text-white bg-blue-1000':''"
            class="px-3 py-1 ml-2 hover:bg-blue-1000 hover:text-white rounded-full"
          >
            <a href="#">Help</a>
          </li>
          <li class="ml-2 relative hidden md:block xl:block">
            <input
              placeholder="Type something here..."
              type="text"
              class="outline-none w-56 text-sm font-normal pl-2 pr-8 py-2 border border-gray-custom-2 h-8 rounded-full"
            />
            <span class="absolute" style="right:0; margin-right:10px;top:0; margin-top:5px;">
              <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24">
                <title>ic_search_24px</title>
                <path
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                />
              </svg>
            </span>
          </li>
        </ul>
      </div>
      <!-- Tab Title End Here-->
      <!-- User Message Start Here -->
      <div class="message">
        <ul class="flex items-center text-gray-700">
          <li class="px-2">
            <a
              @click="notification()"
              href="#"
              title="notification"
              class="hover:text-gray-900 relative"
            >
              <svg width="24" height="24" viewBox="0 0 48 48">
                <g fill="#618dfa">
                  <path
                    fill="#618dfa"
                    d="M24 44c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4zm12-12V22c0-6.15-3.27-11.28-9-12.64V8c0-1.66-1.34-3-3-3s-3 1.34-3 3v1.36c-5.73 1.36-9 6.49-9 12.64v10l-4 4v2h32v-2l-4-4zm-4 2H16V22c0-4.97 3.03-9 8-9s8 4.03 8 9v12z"
                  />
                </g>
              </svg>
              <transition name="showhidden">
                <div
                  v-if="showNotification"
                  class="notification z-10 absolute w-48"
                  style="left:-100px"
                >
                  <div class="notification_pointer relative">
                    <svg
                      class="absolute fill-current text-white"
                      style="left:100px;"
                      width="30"
                      height="30"
                      viewBox="0 0 292.362 292.362"
                    >
                      <path
                        d="M286.935 197.286L159.028 69.379c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233 1.807-12.85 5.424L5.424 197.286C1.807 200.9 0 205.184 0 210.132s1.807 9.233 5.424 12.847c3.621 3.617 7.902 5.428 12.85 5.428h255.813c4.949 0 9.233-1.811 12.848-5.428 3.613-3.613 5.427-7.898 5.427-12.847s-1.814-9.232-5.427-12.846z"
                      />
                    </svg>
                  </div>
                  <div
                    class="box-notification overflow-hidden h-72 shadow flex flex-col justify-between absolute w-full border-b border-gray-200 text-gray-custom bg-white"
                    style="top:22px;"
                  >
                    <div
                      class="header-notication h-8 shadow px-2 py-1 text-sm font-semibold w-full"
                    >Notification</div>
                    <div class="flex-1 content-notification overflow-y-auto">
                      <ul class="px-2 py-2">
                        <li class="text-gray-custom">
                          <a
                            class="flex pb-1 border-b border-gray-300 justify-between items-center"
                            href="#"
                          >
                            <span>
                              <img
                                class="w-10 rounded-full"
                                src="../../assets/img/avatars/user1-128x128.jpg"
                              />
                            </span>
                            <span class="flex-1 flex flex-col ml-2 text-xxs">
                              <span class>
                                <b>John Doe</b> and
                                <b>You</b> celebrate 5th friend anniversary
                              </span>
                              <span class="text-sxs font-bold">3m</span>
                            </span>
                          </a>
                        </li>
                        <li class="text-gray-custom">
                          <a
                            class="flex pb-1 border-b border-gray-300 justify-between items-center"
                            href="#"
                          >
                            <span>
                              <img
                                class="w-10 rounded-full"
                                src="../../assets/img/avatars/user3-128x128.jpg"
                              />
                            </span>
                            <span class="flex-1 flex flex-col ml-2 text-xxs">
                              <span class>
                                <b>Jane Doe</b> and
                                <b>You</b> were working together 5 years ago as Custom UI Team
                              </span>
                              <span class="text-sxs font-bold">3m</span>
                            </span>
                          </a>
                        </li>
                        <li class="text-gray-custom">
                          <a
                            class="flex pb-1 border-b border-gray-300 justify-between items-center"
                            href="#"
                          >
                            <span>
                              <img
                                class="w-10 rounded-full"
                                src="../../assets/img/avatars/user5-128x128.jpg"
                              />
                            </span>
                            <span class="flex-1 flex flex-col ml-2 text-xxs">
                              <span class>
                                <b>John Doe</b> and
                                <b>You</b> celebrate 5th friend anniversary
                              </span>
                              <span class="text-sxs font-bold">3m</span>
                            </span>
                          </a>
                        </li>
                        <li class="text-gray-custom">
                          <a
                            class="flex pb-1 border-b border-gray-300 justify-between items-center"
                            href="#"
                          >
                            <span>
                              <img
                                class="w-10 rounded-full"
                                src="../../assets/img/avatars/user6-128x128.jpg"
                              />
                            </span>
                            <span class="flex-1 flex flex-col ml-2 text-xxs">
                              <span class>
                                <b>Jane Doe</b> and
                                <b>You</b> were working together 5 years ago as Custom UI Team
                              </span>
                              <span class="text-sxs font-bold">3m</span>
                            </span>
                          </a>
                        </li>
                        <li class="text-gray-custom">
                          <a
                            class="flex pb-1 border-b border-gray-300 justify-between items-center"
                            href="#"
                          >
                            <span>
                              <img
                                class="w-10 rounded-full"
                                src="../../assets/img/avatars/user7-128x128.jpg"
                              />
                            </span>
                            <span class="flex-1 flex flex-col ml-2 text-xxs">
                              <span class>
                                <b>Jane Doe</b> and
                                <b>You</b> were working together 5 years ago as Custom UI Team
                              </span>
                              <span class="text-sxs font-bold">3m</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="#"
                      class="block h-8 py-1 hover:text-gray-75 text-sm more-notification shadow-inner text-center"
                    >See More</a>
                  </div>
                </div>
              </transition>
            </a>
          </li>
          <li class="px-2">
            <a @click="message()" href="#" class="hover:text-gray-900 relative">
              <svg width="22" height="22" viewBox="0 0 24 24">
                <g fill="#618dfa">
                  <path
                    d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
                  />
                </g>
              </svg>
              <transition name="showhidden">
                <div v-if="showMessage" class="notification z-10 absolute w-48" style="left:-140px">
                  <div class="notification_pointer relative">
                    <svg
                      class="absolute fill-current text-white"
                      style="left:140px;"
                      width="30"
                      height="30"
                      viewBox="0 0 292.362 292.362"
                    >
                      <path
                        d="M286.935 197.286L159.028 69.379c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233 1.807-12.85 5.424L5.424 197.286C1.807 200.9 0 205.184 0 210.132s1.807 9.233 5.424 12.847c3.621 3.617 7.902 5.428 12.85 5.428h255.813c4.949 0 9.233-1.811 12.848-5.428 3.613-3.613 5.427-7.898 5.427-12.847s-1.814-9.232-5.427-12.846z"
                      />
                    </svg>
                  </div>
                  <div
                    class="box-notification overflow-hidden h-72 shadow flex flex-col justify-between absolute w-full border-b border-gray-200 text-gray-custom bg-white"
                    style="top:22px;"
                  >
                    <div
                      class="header-notication h-8 shadow px-2 py-1 text-sm font-semibold w-full"
                    >Message</div>
                    <div class="flex-1 content-notification overflow-y-auto">
                      <ul class="px-2 py-2">
                        <li class="text-gray-custom">
                          <a
                            class="flex pb-1 border-b border-gray-300 justify-between items-center"
                            href="http://www.facebook.com"
                          >
                            <span class="w-10">
                              <img
                                class="w-10 rounded-full"
                                src="../../assets/img/avatars/user1-128x128.jpg"
                              />
                            </span>
                            <span class="flex flex-col ml-2 text-xxs">
                              <span class="flex justify-between items-center text-sm">
                                <span class="font-semibold">Jane Doe</span>
                                <span class="text-xxs">20/01/2020</span>
                              </span>
                              <p class="text-xs break-normal">Hi could you help me something</p>
                            </span>
                          </a>
                        </li>
                        <li class="text-gray-custom">
                          <a
                            class="flex pb-1 border-b border-gray-300 justify-between items-center"
                            href="#"
                          >
                            <span class="w-10">
                              <img
                                class="w-10 rounded-full"
                                src="../../assets/img/avatars/user3-128x128.jpg"
                              />
                            </span>
                            <span class="flex flex-col ml-2 text-xxs">
                              <span class="flex justify-between items-center text-sm">
                                <span class="font-semibold">Jane Doe</span>
                                <span class="text-xxs">20/01/2020</span>
                              </span>
                              <p class="text-xs break-normal">Hi could you help me something</p>
                            </span>
                          </a>
                        </li>
                        <li class="text-gray-custom">
                          <a
                            class="flex pb-1 border-b border-gray-300 justify-between items-center"
                            href="#"
                          >
                            <span class="w-10">
                              <img
                                class="w-10 rounded-full"
                                src="../../assets/img/avatars/user4-128x128.jpg"
                              />
                            </span>
                            <span class="flex flex-col ml-2 text-xxs">
                              <span class="flex justify-between items-center text-sm">
                                <span class="font-semibold">Jane Doe</span>
                                <span class="text-xxs">20/01/2020</span>
                              </span>
                              <p class="text-xs break-normal">Hi could you help me something</p>
                            </span>
                          </a>
                        </li>
                        <li class="text-gray-custom">
                          <a
                            class="flex pb-1 border-b border-gray-300 justify-between items-center"
                            href="#"
                          >
                            <span class="w-10">
                              <img
                                class="w-10 rounded-full"
                                src="../../assets/img/avatars/user5-128x128.jpg"
                              />
                            </span>
                            <span class="flex flex-col ml-2 text-xxs">
                              <span class="flex justify-between items-center text-sm">
                                <span class="font-semibold">Jane Doe</span>
                                <span class="text-xxs">20/01/2020</span>
                              </span>
                              <p class="text-xs break-normal">Hi could you help me something</p>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="#"
                      class="block h-8 py-1 hover:text-gray-75 text-sm more-notification shadow-inner text-center"
                    >See More</a>
                  </div>
                </div>
              </transition>
            </a>
          </li>
          <li class="px-2">
            <a @click="flag()" href="#" class="text-blue-1000 relative">
              <svg class="fill-current" width="22" height="22" viewBox="0 0 48 48">
                <path d="M28.8 12L28 8H10v34h4V28h11.2l.8 4h14V12z" />
              </svg>
              <transition name="showhidden">
                <div v-if="showFlag" class="notification z-10 absolute w-48" style="left:-170px">
                  <div class="notification_pointer relative">
                    <svg
                      class="absolute fill-current text-white"
                      style="left:160px;"
                      width="30"
                      height="30"
                      viewBox="0 0 292.362 292.362"
                    >
                      <path
                        d="M286.935 197.286L159.028 69.379c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233 1.807-12.85 5.424L5.424 197.286C1.807 200.9 0 205.184 0 210.132s1.807 9.233 5.424 12.847c3.621 3.617 7.902 5.428 12.85 5.428h255.813c4.949 0 9.233-1.811 12.848-5.428 3.613-3.613 5.427-7.898 5.427-12.847s-1.814-9.232-5.427-12.846z"
                      />
                    </svg>
                  </div>
                  <div
                    class="box-notification overflow-hidden h-72 shadow flex flex-col justify-between absolute w-full border-b border-gray-200 text-gray-custom bg-white"
                    style="top:22px;"
                  >
                    <div
                      class="header-notication h-8 shadow px-2 py-1 text-sm font-semibold w-full"
                    >Task</div>
                    <div class="flex-1 content-notification overflow-y-auto">
                      <ul class="px-2 py-2">
                        <li class="text-gray-custom">
                          <span class="block text-xs">Design template</span>
                          <progressbar :color="'bg-blue-1000'" :widthProgress="45/100"></progressbar>
                        </li>
                        <li class="text-gray-custom mt-2">
                          <span class="block text-xs">Design Button</span>
                          <progressbar :color="'bg-red-500'" :widthProgress="30/100"></progressbar>
                        </li>
                        <li class="text-gray-custom mt-2">
                          <span class="block text-xs">Transition Smoother</span>
                          <progressbar :color="'bg-yellow-500'" :widthProgress="50/100"></progressbar>
                        </li>
                        <li class="text-gray-custom mt-2">
                          <span class="block text-xs">Change Fonts</span>
                          <progressbar :color="'bg-teal-500'" :widthProgress="75/100"></progressbar>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="#"
                      class="block h-8 py-1 hover:text-gray-75 text-sm more-notification shadow-inner text-center"
                    >See More</a>
                  </div>
                </div>
              </transition>
            </a>
          </li>
        </ul>
      </div>
      <!-- User Message End Here -->
    </div>
    <!-- Tab Bar End Here -->
    <!-- Menu Bar Start Here -->
    <div class="menu-bar text-xs font-semibold bg-gray-50 text-gray-75  md:flex xl:flex">
      <ul class="flex flex-1 items-center h-20 px-1 py-2 border-b border-gray-400 shadow-2xl">
        <template v-if="selectedTab=='dashboard'">
          <li class="menu-wrap">
            <router-link
              :to="{ name: 'home' }"
              class="flex menu-item rounded px-1 py-2 items-center flex-col"
            >
              <span class>
                <svg class="fill-current" width="30" height="30" viewBox="0 0 48 48">
                  <title>ic_home_48px</title>
                  <path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z" />
                </svg>
              </span>
              <span class="text-xs">Home</span>
            </router-link>
          </li>
          <li class="menu-wrap">
            <router-link
              :to="{name:'dashboard2'}"
              class="flex menu-item rounded px-1 py-2 items-center flex-col"
            >
              <span class>
                <svg class="fill-current" width="30" height="30" viewBox="0 0 48 48">
                  <path
                    d="M24,11c0.552,0,1-0.448,1-1V7c0-0.552-0.448-1-1-1s-1,0.448-1,1v3C23,10.552,23.448,11,24,11 z"
                  />
                  <path
                    d="M33.192,14.808c0.39,0.39,1.024,0.39,1.414,0l2.121-2.121c0.39-0.39,0.39-1.024,0-1.414 c-0.39-0.39-1.024-0.39-1.414,0l-2.121,2.121C32.802,13.784,32.802,14.417,33.192,14.808z"
                  />
                  <path
                    d="M37,24c0,0.552,0.448,1,1,1h3c0.552,0,1-0.448,1-1s-0.448-1-1-1h-3 C37.448,23,37,23.448,37,24z"
                  />
                  <path
                    d="M14.808,14.808c-0.39,0.39-1.024,0.39-1.414,0l-2.121-2.121c-0.39-0.39-0.39-1.024,0-1.414 c0.39-0.39,1.024-0.39,1.414,0l2.121,2.121C15.198,13.784,15.198,14.417,14.808,14.808z"
                  />
                  <path
                    d="M11,24c0,0.552-0.448,1-1,1H7c-0.552,0-1-0.448-1-1s0.448-1,1-1h3C10.552,23,11,23.448,11,24 z"
                  />
                  <path
                    d="M19.259,14.074c0,0,1.319,9.724,2.034,11.219c0.714,1.495,2.505,2.128,4,1.414 s2.128-2.505,1.414-4C25.993,21.212,19.259,14.074,19.259,14.074z"
                  />
                  <path
                    d="M24,1C11.318,1,1,11.318,1,24s10.318,23,23,23s23-10.318,23-23S36.682,1,24,1z M4.587,32 C3.569,29.533,3,26.834,3,24C3,12.402,12.402,3,24,3c11.598,0,21,9.402,21,21c0,2.834-0.569,5.533-1.587,8H4.587z"
                  />
                </svg>
              </span>
              <span>Dashboard 2</span>
            </router-link>
          </li>
          <li class="border-r h-16 w-2 border-gray-300"></li>
          <li class="menu-wrap">
            <router-link
              :to="{name:'chart1'}"
              class="flex menu-item rounded px-1 py-2 items-center flex-col"
            >
              <span>
                <svg class="fill-current" width="30" height="30" viewBox="0 0 48 48">
                  
                  <path d="M7 36.99l12-12.03 8 8 17-19.12-2.82-2.83L27 26.96l-8-8L4 33.99z" />
                </svg>
              </span>
              <span>Chart 1</span>
            </router-link>
          </li>
          <li class="menu-wrap">
            <a
              href="#"
              class="flex menu-item rounded px-1 py-2 items-center flex-col"
            >
              <span>
                <svg class="fill-current" width="30" height="30" viewBox="0 0 48 48">
                  <path
                    d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM18 34h-4V20h4v14zm8 0h-4V14h4v20zm8 0h-4v-8h4v8z"
                  />
                </svg>
              </span>
              <span>Chart 2</span>
            </a>
          </li>
        </template>
      </ul>
    </div>
    <!-- Menu Bar End Here -->
  </div>
</template>
<script>
import ProgressBar from "../ui/ProgressBar.vue";
export default {
  name: "HeaderMenu",
  components: {
    progressbar: ProgressBar
  },
  data() {
    return {
      showNotification: false,
      showMessage: false,
      showUser: false,
      showFlag: false,
      selectedTab: "",
      selectedMenu: ""
    };
  },
  methods: {
    notification() {
      this.showNotification = !this.showNotification;
      this.showFlag = false;
      this.showMessage = false;
    },
    message() {
      this.showMessage = !this.showMessage;
      this.showFlag = false;
      this.showNotification = false;
    },
    flag() {
      this.showFlag = !this.showFlag;
      this.showNotification = false;
      this.showMessage = false;
    },
    userMenu() {
      this.showUser = !this.showUser;
    },
    selectTab(tabName) {
      this.selectedTab = tabName;
    },
    selectMenu(menuName) {
      this.selectedMenu = menuName;
    }
  },
  mounted() {
    let subdomain = window.location.href;
    let splitter = subdomain.split("/");
    let counter = splitter.length;
    this.selectedMenu = splitter[counter - 1];
    this.selectedTab = splitter[counter - 2];
    if (this.selectedMenu.length == 0 || this.selectedMenu =="#") {
      this.selectedTab = "dashboard";
      this.selectedMenu = "home";
    }
  }
};
</script>
<style scoped>
    .menu-wrap:hover .menu-item{
        transform: scale(1.09);
    }

    .menu-item{
        transition: transform ease-in-out .2s;
    }

</style>