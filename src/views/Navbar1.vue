<template>
  <!-- <body class="antialiased font-sans"> -->

  <nav class="bg-transparent py-0 px-0 lg:px-0 xl:py-0 fixed top-0 z-50 w-full md:px-8 xl:px-4 xxl:px-40" id="navbar">
    <div class="navbar">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>

            <li tabindex="0">
              <details>
                <summary>Movies</summary>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bangla</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">English</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hindi</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tamil</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Korean</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Japanese</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabindex="0">
              <details>
                <summary>TV Series</summary>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bangla</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">English</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hindi</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tamil</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Korean</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Japanese</a>
                  </li>
                </ul>
              </details>
            </li>
            <li><a>Live TV</a></li>
            <li><a>Sign In</a></li>
          </ul>
        </div>
        <!-- <img src="/logo/UniqueNetLogo.svg" alt="Logo" class="h-6 md:h-8" /> -->
      </div>
      <div class="navbar-center hidden lg:flex lg:px-2">
        <ul class="menu menu-horizontal px-1 text-white">
          <li><a>Home</a></li>
          <li tabindex="0">
            <details>
              <summary>Movies</summary>
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 bg-transparent">
                <li>
                  <a href="#"
                    class="bg-transparent block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bangla</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">English</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hindi</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tamil</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Korean</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Japanese</a>
                </li>
              </ul>
            </details>
          </li>

          <li tabindex="0">
            <details>
              <summary>TV Series</summary>
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bangla</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">English</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hindi</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tamil</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Korean</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Japanese</a>
                </li>
              </ul>
            </details>
          </li>
          <li><a>Live TV</a></li>
        </ul>
      </div>

      <div class="navbar-end flex gap-10">
        <div
          class="flex justify-center items-center h-12 px-4 font-medium text-red-500 0 whitespace-nowrap hover:bg-red-600 hover:text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <a
          class="btn font-medium text-gray-100 bg-red-500  whitespace-nowrap hover:bg-red-600 hover:text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 focus:outline-none  max-[1024px]:hidden">Sign
          In</a>
      </div>
    </div>
  </nav>

  <!-- <header class="relative flex pt-0 pb-48 sm:pt-32 sm:pb-64 lg:pb-48 px-4 bg-blue-100 w-full md:pb-40 lg:px-16 lg:pt-48 xl:pt-40 xl:pb-64 xl:h-screen md:px-8 xl:px-24 xxl:px-40"> -->
  <!-- <div class="text-center md:text-left md:w-1/2 z-10 xxl:max-w-2xl">
        <h1 class="text-3xl xl:text-5xl text-gray-900 font-bold leading-tight">
          Welcome To ByteWebster
        </h1>
        <p class="text-base xl:text-xl text-gray-600 mt-4">
          ByteWebster is a Professional web development and coding blog website. Here you will find projects and coding blogs made from HTML, CSS, and JavaScript.
        </p>
  
        <p class="text-sm xl:text-base text-gray-600 mt-8">
          Our Projects focus on creating Responsive web design,
          and developing optimised Web applications.
        </p>
        <a href="#" class="bg-blue-500 hover:bg-blue-700 px-6 py-4 text-white rounded block sm:inline-block mt-4 text-center font-bold">
          Find Projects
        </a>
      </div>
  
      <div class="w-full absolute bottom-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1161.727 456.805">
          <defs>
            <clipPath id="a">
              <path
                d="M847.9,82.732c-35.467,16.382-70.248,7.339-114.45-22.181-130.3-87.026-222.523-75.217-343.934,3.359-25.868,16.742-67.626,44.576-137.624,24.769C149.45,59.69,44.091,89,0,169.643H1161.727c-33.066-63-156.751-159.454-313.828-86.911"
                transform="translate(0.044 0.729)" fill="none" />
            </clipPath>
            <linearGradient id="b" x1="0.966" y1="1.217" x2="0.09" y2="0.335" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#1c8eb8" />
              <stop offset="1" stop-color="#c5f9ff" />
            </linearGradient>
            <clipPath id="c">
              <path
                d="M0,93.453c5.066-9.4,30.388-27.88,62.525-22.872,35.079,5.468,42.787-6.458,57.249-11.417,26.478-9.079,46.914,20.875,56.065,1.869,11.685-24.264,30.654-36.258,88.5-12.391,13.739,5.669,12.8-6.891,19.051-14.225,12.145-14.242,26.853,12.047,33.6,10.6,7.663-1.639,5.324-12.829,9.811-22.411,9.349-19.964,25.484-1.2,36.607-2.849,11.075-1.639,17-23.612,29.543-19.169C419.738,10.08,411.33,65.861,409.673,78.3c7.619-10.618,21.033-18.416,21.033,15.149H0"
                transform="translate(0.189 0.248)" fill="none" />
            </clipPath>
            <linearGradient id="d" x1="0.597" y1="1.079" x2="0.333" y2="-0.021" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#0b5c79" />
              <stop offset="1" stop-color="#3ec3d1" />
            </linearGradient>
            <clipPath id="e">
              <path
                d="M1.971,52.2H131.918c6.753-26.83-19.77-13.415-19.77-13.415s10-28.222-.249-25.291C102,16.319,97.665,38.3,97.665,38.3S92.334,2.4,80.645.048c-7.588-1.528-1.633,34.134-1.633,34.134a18.746,18.746,0,0,0-10.92-3.908c-5.413-.082-4.1,6.882-4.1,6.882S52.7,14,46.819,14.3c-7.373.377.534,24.7.534,24.7S32.835,23.19,27.116,23.6c-7.948.575,5.909,23.161,5.909,23.161S22.5,40.429,9.967,41.475c-9.039.754-12.508,4.406-8,10.721"
                transform="translate(0.768 0.085)" fill="none" />
            </clipPath>
            <linearGradient id="f" x1="0.978" y1="1.271" x2="0.312" y2="0.481" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#3ec3d1" />
              <stop offset="1" stop-color="#6ce2ef" />
            </linearGradient>
            <clipPath id="g">
              <path
                d="M73.318,101.431c0,55.832-22.176,101.494-37.552,101.494S0,141.97,0,86.139,24.9-5.692,42.794.742C62.964,7.99,73.318,45.6,73.318,101.431"
                transform="translate(0.783 0.13)" fill="none" />
            </clipPath>
            <linearGradient id="h" x1="1.071" y1="0.925" x2="-0.013" y2="0.054" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#0a6373" />
              <stop offset="1" stop-color="#3ed1d1" />
            </linearGradient>
            <clipPath id="i">
              <path d="M118.71,200.784H0V81.857L59.353,0,118.71,81.857V200.784" transform="translate(0.112 0.432)"
                fill="none" />
            </clipPath>
            <linearGradient id="j" x1="0.021" y1="0.181" x2="0.787" y2="1.017" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#fff" />
              <stop offset="1" stop-color="#ffe8b8" />
            </linearGradient>
            <clipPath id="k">
              <path d="M0,0H136.265V97.169H0Z" transform="translate(0.466 0.057)" fill="none" />
            </clipPath>
            <linearGradient id="l" x1="-0.238" y1="-0.291" x2="0.984" y2="1.019" xlink:href="#j" />
            <linearGradient id="m" x1="0.332" y1="1.492" x2="0.59" y2="-0.032" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#f7ce8f" />
              <stop offset="1" stop-color="#d97d61" />
            </linearGradient>
            <clipPath id="n">
              <path d="M0,0H140L199.35,81.857H59.356L0,0" transform="translate(0.53 0.432)" fill="none" />
            </clipPath>
            <linearGradient id="o" x1="0.447" y1="1.169" x2="0.574" y2="-0.426" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#d95e36" />
              <stop offset="1" stop-color="#80331a" />
            </linearGradient>
            <clipPath id="p">
              <path d="M38.59,0H0L38.59,56.221V0" transform="translate(0.695 0.511)" fill="none" />
            </clipPath>
            <linearGradient id="q" x1="0.194" y1="-0.251" x2="0.857" y2="0.366" xlink:href="#j" />
            <clipPath id="r">
              <path
                d="M144.375,47.135a24.824,24.824,0,0,0-17.241-10.894c-13.188-1.929-8.662-16.557-20.124-20.429C94.923,11.729,93.9,21.465,62.993,3.911,54.352-1,38.325-2.537,31.209,6.789c-4.165,5.459-5.185,13.4-3.962,20.007,1.176,6.361,5.929,15.542.764,21.258-4.9,5.429-13.531,3.711-19.505,7.158C2.437,58.713.1,65.791.005,72.458-.211,88.03,6.458,104.819,16.336,116.7c20.586,24.76,57.68,30.68,86.972,20.016a69.006,69.006,0,0,0,38.756-35.741c7.523-15.806,12.109-37.988,2.312-53.841"
                transform="translate(0.59 0.445)" fill="none" />
            </clipPath>
            <linearGradient id="s" x1="0.698" y1="0.98" x2="0.324" y2="0.098" xlink:href="#h" />
            <clipPath id="t">
              <path
                d="M98.471,14.737c-6.526.309-13.327,1.763-35.485-10.831C54.35-1,38.325-2.536,31.2,6.79c-4.159,5.459-5.183,13.4-3.957,20.007,1.173,6.356,5.929,15.542.757,21.258-4.9,5.426-13.531,3.707-19.5,7.157C2.436,58.715.09,65.787.005,72.452c-.224,15.575,6.45,32.367,16.323,44.245.949,1.143,1.93,2.244,2.954,3.3,37.179,20.264,10.257-41.52,22.667-52.737,7.859-7.1,23.223,2.959,30.186-2.029,3.475-2.489,3.2-7.414.49-11.163C64.266,42.521,50.832,30.226,57.475,23.24c3.55-3.738,10.62-1.688,23.937-1.644,15.386.043,23.318-3.931,17.06-6.858"
                transform="translate(0.594 0.446)" fill="none" />
            </clipPath>
            <linearGradient id="u" x1="0.731" y1="0.821" x2="0.286" y2="0.046" xlink:href="#f" />
            <clipPath id="v">
              <path
                d="M227.289,45.589c-3.879-9.4-23.249-27.88-47.826-22.872-26.838,5.468-32.731-6.458-43.8-11.417-20.249-9.079-30.224,13.446-42.882,1.869C75.1-3,60.783-4.644,49.365,10.252,32.951,31.672,6.043,7.953,0,45.589H227.289"
                transform="translate(0.194 0.524)" fill="none" />
            </clipPath>
            <linearGradient id="w" x1="0.501" y1="1.161" x2="0.484" y2="-0.939" xlink:href="#d" />
            <clipPath id="x">
              <path
                d="M102.381,47.328H0C.581,15.94,8.823,36.09,8.823,36.09s2.709-22.938,8.7-23.868c5.656-.879,8.321,22.5,8.321,22.5S31.992,1.318,40.129.029C47.272-1.1,41.66,30.99,41.66,30.99a19.212,19.212,0,0,1,10.2-3.545c6.694-.275,3.958,6.242,3.958,6.242s8.365-14.511,13.863-14.238c6.888.342,2.146,15.052,2.146,15.052s5.067-4.844,10.38-5.527c10.4-1.335-.642,11.992-.642,11.992s7.38-3.026,20.1-4.949c12.412-1.878,9.834,5.218.713,11.312"
                transform="translate(0.211 0.547)" fill="none" />
            </clipPath>
            <linearGradient id="y" x1="-0.027" y1="1.092" x2="0.759" y2="0.401" xlink:href="#f" />
            <clipPath id="z">
              <path
                d="M139.761,35.129c.308-18.657-16.264-24.525-32.335-19.316-12.157,3.94-13.142,5.652-43.929-11.9C54.894-1,38.876-2.537,31.689,6.789c-4.2,5.459-5.278,13.4-4.108,20.007,1.135,6.361,5.823,15.542.616,21.258-4.944,5.429-13.564,3.711-19.563,7.158-6.1,3.5-8.48,10.58-8.62,17.246C-.321,88.03,5.573,105.394,16.023,116.7c21.059,22.8,58.082,31.61,92.291,22.889,75.429-19.227,47.061-59.827,38.22-70.59-9.518-11.573-6.984-21.007-6.773-33.871"
                transform="translate(0.69 0.445)" fill="none" />
            </clipPath>
            <linearGradient id="aa" x1="0.737" y1="0.976" x2="0.277" y2="0.117" xlink:href="#h" />
            <clipPath id="ab">
              <path
                d="M108.365,15.538c-.308.086-.625.182-.932.278C95.276,19.747,94.291,21.467,63.5,3.906,54.892-1,38.883-2.536,31.7,6.79c-4.213,5.459-5.3,13.4-4.117,20.007,1.135,6.356,5.814,15.542.616,21.258C23.26,53.481,14.649,51.762,8.65,55.212c-6.1,3.5-8.488,10.575-8.638,17.24C-.314,88.027,6.231,104.819,16.03,116.7a59.878,59.878,0,0,0,4.082,4.487c33.778,20.563-1.346-23.852,26.539-42.194,13.784-9.08,40.393-18.619,28.808-33.07C67,35.354,60.575,31.241,63.161,25.431,64.577,22.225,68.72,19.213,81.8,21.6c17.892,3.269,30.954-3.087,26.565-6.057"
                transform="translate(0.683 0.446)" fill="none" />
            </clipPath>
            <linearGradient id="ac" x1="0.736" y1="0.722" x2="0.264" y2="0.157" xlink:href="#f" />
            <filter id="ad" x="830.456" y="132.5" width="90" height="90" filterUnits="userSpaceOnUse">
              <feOffset dy="5" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3.5" result="ae" />
              <feFlood flood-color="#a4a4a4" flood-opacity="0.216" />
              <feComposite operator="in" in2="ae" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter id="af" x="615.956" y="118" width="101" height="101" filterUnits="userSpaceOnUse">
              <feOffset dy="6" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="4" result="ag" />
              <feFlood flood-color="#a4a4a4" flood-opacity="0.216" />
              <feComposite operator="in" in2="ag" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter id="ah" x="659.956" y="27" width="71.9" height="71.9" filterUnits="userSpaceOnUse">
              <feOffset dy="4" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="ai" />
              <feFlood flood-color="#a4a4a4" flood-opacity="0.216" />
              <feComposite operator="in" in2="ai" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter id="aj" x="720.956" y="73" width="80.37" height="80.37" filterUnits="userSpaceOnUse">
              <feOffset dy="4" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="ak" />
              <feFlood flood-color="#a4a4a4" flood-opacity="0.216" />
              <feComposite operator="in" in2="ak" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter id="al" x="818.956" y="47" width="80.37" height="80.37" filterUnits="userSpaceOnUse">
              <feOffset dy="4" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="am" />
              <feFlood flood-color="#a4a4a4" flood-opacity="0.216" />
              <feComposite operator="in" in2="am" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter id="an" x="781.956" y="0" width="72" height="72" filterUnits="userSpaceOnUse">
              <feOffset dy="4" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="ao" />
              <feFlood flood-color="#a4a4a4" flood-opacity="0.216" />
              <feComposite operator="in" in2="ao" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g transform="translate(1950.456 5248.5)">
            <rect width="1" height="225" transform="translate(-1285.5 -5047.5)" fill="#dfe3e8" />
            <rect width="1" height="225" transform="translate(-1255.5 -5167.5)" fill="#dfe3e8" opacity="0.5" />
            <rect width="1" height="225" transform="translate(-1189.5 -5112.5)" fill="#dfe3e8" />
            <rect width="1" height="225" transform="translate(-1091.5 -5138.5)" fill="#dfe3e8" opacity="0.5" />
            <rect width="1" height="225" transform="translate(-1075.5 -5040.5)" fill="#dfe3e8" />
            <rect width="1" height="225" transform="translate(-1132.5 -5189.5)" fill="#dfe3e8" />
            <g transform="translate(-1950.5 -4962.067)">
              <path
                d="M847.9,82.732c-35.467,16.382-70.248,7.339-114.45-22.181-130.3-87.026-222.523-75.217-343.934,3.359-25.868,16.742-67.626,44.576-137.624,24.769C149.45,59.69,44.091,89,0,169.643H1161.727c-33.066-63-156.751-159.454-313.828-86.911"
                transform="translate(0.044 0.729)" fill="none" />
              <g clip-path="url(#a)">
                <path
                  d="M847.9,82.732c-35.467,16.382-70.248,7.339-114.45-22.181-130.3-87.026-222.523-75.217-343.934,3.359-25.868,16.742-67.626,44.576-137.624,24.769C149.45,59.69,44.091,89,0,169.643H1161.727c-33.066-63-156.751-159.454-313.828-86.911"
                  transform="translate(0.044 0.729)" fill="url(#b)" />
              </g>
            </g>
            <g transform="translate(-1714.757 -4885.397)">
              <path
                d="M0,93.453c5.066-9.4,30.388-27.88,62.525-22.872,35.079,5.468,42.787-6.458,57.249-11.417,26.478-9.079,46.914,20.875,56.065,1.869,11.685-24.264,30.654-36.258,88.5-12.391,13.739,5.669,12.8-6.891,19.051-14.225,12.145-14.242,26.853,12.047,33.6,10.6,7.663-1.639,5.324-12.829,9.811-22.411,9.349-19.964,25.484-1.2,36.607-2.849,11.075-1.639,17-23.612,29.543-19.169C419.738,10.08,411.33,65.861,409.673,78.3c7.619-10.618,21.033-18.416,21.033,15.149H0"
                transform="translate(0.189 0.248)" fill="none" />
              <g clip-path="url(#c)">
                <path
                  d="M0,93.453c5.066-9.4,30.388-27.88,62.525-22.872,35.079,5.468,42.787-6.458,57.249-11.417,26.478-9.079,46.914,20.875,56.065,1.869,11.685-24.264,30.654-36.258,88.5-12.391,13.739,5.669,12.8-6.891,19.051-14.225,12.145-14.242,26.853,12.047,33.6,10.6,7.663-1.639,5.324-12.829,9.811-22.411,9.349-19.964,25.484-1.2,36.607-2.849,11.075-1.639,17-23.612,29.543-19.169C419.738,10.08,411.33,65.861,409.673,78.3c7.619-10.618,21.033-18.416,21.033,15.149H0"
                  transform="translate(0.189 0.248)" fill="url(#d)" />
              </g>
            </g>
            <g transform="translate(-1597.766 -4843.978)">
              <path
                d="M1.971,52.2H131.918c6.753-26.83-19.77-13.415-19.77-13.415s10-28.222-.249-25.291C102,16.319,97.665,38.3,97.665,38.3S92.334,2.4,80.645.048c-7.588-1.528-1.633,34.134-1.633,34.134a18.746,18.746,0,0,0-10.92-3.908c-5.413-.082-4.1,6.882-4.1,6.882S52.7,14,46.819,14.3c-7.373.377.534,24.7.534,24.7S32.835,23.19,27.116,23.6c-7.948.575,5.909,23.161,5.909,23.161S22.5,40.429,9.967,41.475c-9.039.754-12.508,4.406-8,10.721"
                transform="translate(0.768 0.085)" fill="none" />
              <g clip-path="url(#e)">
                <path
                  d="M1.971,52.2H131.918c6.753-26.83-19.77-13.415-19.77-13.415s10-28.222-.249-25.291C102,16.319,97.665,38.3,97.665,38.3S92.334,2.4,80.645.048c-7.588-1.528-1.633,34.134-1.633,34.134a18.746,18.746,0,0,0-10.92-3.908c-5.413-.082-4.1,6.882-4.1,6.882S52.7,14,46.819,14.3c-7.373.377.534,24.7.534,24.7S32.835,23.19,27.116,23.6c-7.948.575,5.909,23.161,5.909,23.161S22.5,40.429,9.967,41.475c-9.039.754-12.508,4.406-8,10.721"
                  transform="translate(0.768 0.085)" fill="url(#f)" />
              </g>
            </g>
            <g transform="translate(-1022.483 -5040.5)">
              <path
                d="M73.318,101.431c0,55.832-22.176,101.494-37.552,101.494S0,141.97,0,86.139,24.9-5.692,42.794.742C62.964,7.99,73.318,45.6,73.318,101.431"
                transform="translate(0.783 0.13)" fill="none" />
              <g clip-path="url(#g)">
                <path
                  d="M73.318,101.431c0,55.832-22.176,101.494-37.552,101.494S0,141.97,0,86.139,24.9-5.692,42.794.742C62.964,7.99,73.318,45.6,73.318,101.431"
                  transform="translate(0.783 0.13)" fill="url(#h)" />
              </g>
            </g>
            <g transform="translate(-1316.282 -4992.912)">
              <path d="M118.71,200.784H0V81.857L59.353,0,118.71,81.857V200.784" transform="translate(0.112 0.432)"
                fill="none" />
              <g clip-path="url(#i)">
                <path d="M118.71,200.784H0V81.857L59.353,0,118.71,81.857V200.784" transform="translate(0.112 0.432)"
                  fill="url(#j)" />
              </g>
            </g>
            <path d="M0,118.927H139.994V0H0Z" transform="translate(-1197.461 -4910.623)" fill="#f7ce8f" />
            <g transform="translate(-1175.54 -4888.922)">
              <path d="M0,0H136.265V97.169H0Z" transform="translate(0.466 0.057)" fill="none" />
              <g clip-path="url(#k)">
                <path d="M0,97.169H136.265V0H0Z" transform="translate(0.466 0.057)" fill="url(#l)" />
              </g>
            </g>
            <path d="M0,97.169H139.994V0H0Z" transform="translate(-1038.809 -4888.865)" fill="url(#m)" />
            <path d="M0,75.272H98.95V0H0Z" transform="translate(-1156.417 -4866.967)" fill="#9d9d9c" />
            <g transform="translate(-1257.346 -4992.912)">
              <path d="M0,0H140L199.35,81.857H59.356L0,0" transform="translate(0.53 0.432)" fill="none" />
              <g clip-path="url(#n)">
                <path d="M0,0H140L199.35,81.857H59.356L0,0" transform="translate(0.53 0.432)" fill="url(#o)" />
              </g>
            </g>
            <path d="M0,75.272H5.779V0H0Z" transform="translate(-1156.417 -4866.967)" fill="#f7ce8f" />
            <path d="M0,1.648H93.171V0H0Z" transform="translate(-1150.638 -4866.967)" fill="#415680" />
            <path d="M0,1.647H93.171V0H0Z" transform="translate(-1150.638 -4860.832)" fill="#415680" />
            <path d="M0,1.647H93.171V0H0Z" transform="translate(-1150.638 -4854.696)" fill="#415680" />
            <path d="M0,1.647H93.171V0H0Z" transform="translate(-1150.638 -4848.561)" fill="#415680" />
            <path d="M0,1.647H93.171V0H0Z" transform="translate(-1150.638 -4842.426)" fill="#415680" />
            <path d="M0,1.647H93.171V0H0Z" transform="translate(-1150.638 -4836.29)" fill="#415680" />
            <path d="M0,1.647H93.171V0H0Z" transform="translate(-1150.638 -4830.155)" fill="#415680" />
            <path d="M0,1.646H93.171V0H0Z" transform="translate(-1150.638 -4824.019)" fill="#415680" />
            <path d="M0,1.646H93.171V0H0Z" transform="translate(-1150.638 -4817.883)" fill="#415680" />
            <path d="M0,1.646H93.171V0H0Z" transform="translate(-1150.638 -4811.748)" fill="#415680" />
            <path d="M0,1.646H93.171V0H0Z" transform="translate(-1150.638 -4805.612)" fill="#415680" />
            <path d="M0,1.647H93.171V0H0Z" transform="translate(-1150.638 -4799.478)" fill="#415680" />
            <path d="M0,1.647H93.171V0H0Z" transform="translate(-1150.638 -4793.343)" fill="#415680" />
            <path d="M0,75.271H24.968V0H0Z" transform="translate(-1291.092 -4888.865)" fill="#2e3e5c" />
            <path d="M0,75.271H5.776V0H0Z" transform="translate(-1291.092 -4888.865)" fill="#f7ce8f" />
            <path d="M0,97.169H24.97V0H0Z" transform="translate(-1247.509 -4888.865)" fill="#2e3e5c" />
            <path d="M0,97.169H5.775V0H0Z" transform="translate(-1247.509 -4888.865)" fill="#f7ce8f" />
            <path d="M0,56.221H42.2V0H0Z" transform="translate(-1148.57 -4966.844)" fill="#f7ce8f" />
            <path d="M0,40.527H24.964V0H0Z" transform="translate(-1139.95 -4951.149)" fill="#2e3e5c" />
            <path d="M0,40.527H5.858V0H0Z" transform="translate(-1120.844 -4951.149)" fill="#fff" />
            <g transform="translate(-1187.855 -4967.355)">
              <path d="M38.59,0H0L38.59,56.221V0" transform="translate(0.695 0.511)" fill="none" />
              <g clip-path="url(#p)">
                <path d="M38.59,0H0L38.59,56.221V0" transform="translate(0.695 0.511)" fill="url(#q)" />
              </g>
            </g>
            <path d="M0,62.922H13.6V0H0Z" transform="translate(-1279.725 -4876.517)" fill="#36a9e1" />
            <path d="M0,84.821H13.608V0H0Z" transform="translate(-1236.147 -4876.517)" fill="#36a9e1" />
            <path d="M0,3.294H19.2V0H0Z" transform="translate(-1241.735 -4866.967)" fill="#fff" />
            <path d="M0,3.294H19.192V0H0Z" transform="translate(-1285.316 -4866.967)" fill="#fff" />
            <path d="M0,28.179H13.6V0H0Z" transform="translate(-1134.443 -4938.802)" fill="#36a9e1" />
            <path d="M2.468,26.83H0V0H3.938L2.468,26.83" transform="translate(-1382.756 -4818.526)" fill="#fff" />
            <path d="M6.6,26.83H4.261L0,0H3.939L6.6,26.83" transform="translate(-1371.965 -4818.526)" fill="#fff" />
            <path d="M6.646,0H4.582L0,22.966H3.939L6.646,0" transform="translate(-1371.965 -4841.492)" fill="#fff" />
            <path d="M0,4.985H14.73V0H0Z" transform="translate(-1382.756 -4818.526)" fill="#fff" />
            <path d="M0,4.985H10.791V0H0Z" transform="translate(-1375.248 -4818.526)" fill="#fff" />
            <path d="M2.468,26.83H0V0H3.937L2.468,26.83" transform="translate(-1446.35 -4818.526)" fill="#fff" />
            <path d="M6.6,26.83H4.26L0,0H3.938L6.6,26.83" transform="translate(-1435.559 -4818.526)" fill="#fff" />
            <path d="M6.646,0H4.582L0,22.966H3.938L6.646,0" transform="translate(-1435.559 -4841.492)" fill="#fff" />
            <path d="M0,4.985H14.73V0H0Z" transform="translate(-1446.35 -4818.526)" fill="#fff" />
            <path d="M0,4.985H76.547V0H0Z" transform="translate(-1451.794 -4818.526)" fill="#fff" />
            <path d="M0,4.985H76.546L77.449,0H.9L0,4.985" transform="translate(-1438.57 -4841.492)" fill="#fff" />
            <path d="M0,4.986H76.547L77.45,0H.9L0,4.986" transform="translate(-1439.958 -4833.837)" fill="#fff" />
            <g transform="translate(-1549.386 -5002.605)">
              <path
                d="M144.375,47.135a24.824,24.824,0,0,0-17.241-10.894c-13.188-1.929-8.662-16.557-20.124-20.429C94.923,11.729,93.9,21.465,62.993,3.911,54.352-1,38.325-2.537,31.209,6.789c-4.165,5.459-5.185,13.4-3.962,20.007,1.176,6.361,5.929,15.542.764,21.258-4.9,5.429-13.531,3.711-19.505,7.158C2.437,58.713.1,65.791.005,72.458-.211,88.03,6.458,104.819,16.336,116.7c20.586,24.76,57.68,30.68,86.972,20.016a69.006,69.006,0,0,0,38.756-35.741c7.523-15.806,12.109-37.988,2.312-53.841"
                transform="translate(0.59 0.445)" fill="none" />
              <g clip-path="url(#r)">
                <path
                  d="M144.375,47.135a24.824,24.824,0,0,0-17.241-10.894c-13.188-1.929-8.662-16.557-20.124-20.429C94.923,11.729,93.9,21.465,62.993,3.911,54.352-1,38.325-2.537,31.209,6.789c-4.165,5.459-5.185,13.4-3.962,20.007,1.176,6.361,5.929,15.542.764,21.258-4.9,5.429-13.531,3.711-19.505,7.158C2.437,58.713.1,65.791.005,72.458-.211,88.03,6.458,104.819,16.336,116.7c20.586,24.76,57.68,30.68,86.972,20.016a69.006,69.006,0,0,0,38.756-35.741c7.523-15.806,12.109-37.988,2.312-53.841"
                  transform="translate(0.59 0.445)" fill="url(#s)" />
              </g>
            </g>
            <g transform="translate(-1549.386 -5002.605)">
              <path
                d="M98.471,14.737c-6.526.309-13.327,1.763-35.485-10.831C54.35-1,38.325-2.536,31.2,6.79c-4.159,5.459-5.183,13.4-3.957,20.007,1.173,6.356,5.929,15.542.757,21.258-4.9,5.426-13.531,3.707-19.5,7.157C2.436,58.715.09,65.787.005,72.452c-.224,15.575,6.45,32.367,16.323,44.245.949,1.143,1.93,2.244,2.954,3.3,37.179,20.264,10.257-41.52,22.667-52.737,7.859-7.1,23.223,2.959,30.186-2.029,3.475-2.489,3.2-7.414.49-11.163C64.266,42.521,50.832,30.226,57.475,23.24c3.55-3.738,10.62-1.688,23.937-1.644,15.386.043,23.318-3.931,17.06-6.858"
                transform="translate(0.594 0.446)" fill="none" />
              <g clip-path="url(#t)">
                <path
                  d="M98.471,14.737c-6.526.309-13.327,1.763-35.485-10.831C54.35-1,38.325-2.536,31.2,6.79c-4.159,5.459-5.183,13.4-3.957,20.007,1.173,6.356,5.929,15.542.757,21.258-4.9,5.426-13.531,3.707-19.5,7.157C2.436,58.715.09,65.787.005,72.452c-.224,15.575,6.45,32.367,16.323,44.245.949,1.143,1.93,2.244,2.954,3.3,37.179,20.264,10.257-41.52,22.667-52.737,7.859-7.1,23.223,2.959,30.186-2.029,3.475-2.489,3.2-7.414.49-11.163C64.266,42.521,50.832,30.226,57.475,23.24c3.55-3.738,10.62-1.688,23.937-1.644,15.386.043,23.318-3.931,17.06-6.858"
                  transform="translate(0.594 0.446)" fill="url(#u)" />
              </g>
            </g>
            <path
              d="M16.281,130.828H8.658l-.308-50.2L0,2.537,2,0,12.881,76.209,20.63,26.051,22.5,28,14.883,85.055l1.4,45.773"
              transform="translate(-1483.255 -4922.524)" fill="#2e3e5c" />
            <path d="M17.77,1.035,0,27.295V25.132L16.76,0,17.77,1.035" transform="translate(-1464.931 -4901.648)"
              fill="#2e3e5c" />
            <path d="M15.139,21.486,0,.947.837,0l14.62,18.961-.318,2.525" transform="translate(-1493.268 -4901.648)"
              fill="#2e3e5c" />
            <path d="M5.462.31,1,25,0,22.565,4.443,0,5.462.31" transform="translate(-1479.856 -4924.213)"
              fill="#2e3e5c" />
            <g transform="translate(-1027.761 -4837.809)">
              <path
                d="M227.289,45.589c-3.879-9.4-23.249-27.88-47.826-22.872-26.838,5.468-32.731-6.458-43.8-11.417-20.249-9.079-30.224,13.446-42.882,1.869C75.1-3,60.783-4.644,49.365,10.252,32.951,31.672,6.043,7.953,0,45.589H227.289"
                transform="translate(0.194 0.524)" fill="none" />
              <g clip-path="url(#v)">
                <path
                  d="M227.289,45.589c-3.879-9.4-23.249-27.88-47.826-22.872-26.838,5.468-32.731-6.458-43.8-11.417-20.249-9.079-30.224,13.446-42.882,1.869C75.1-3,60.783-4.644,49.365,10.252,32.951,31.672,6.043,7.953,0,45.589H227.289"
                  transform="translate(0.194 0.524)" fill="url(#w)" />
              </g>
            </g>
            <g transform="translate(-948.594 -4839.571)">
              <path
                d="M102.381,47.328H0C.581,15.94,8.823,36.09,8.823,36.09s2.709-22.938,8.7-23.868c5.656-.879,8.321,22.5,8.321,22.5S31.992,1.318,40.129.029C47.272-1.1,41.66,30.99,41.66,30.99a19.212,19.212,0,0,1,10.2-3.545c6.694-.275,3.958,6.242,3.958,6.242s8.365-14.511,13.863-14.238c6.888.342,2.146,15.052,2.146,15.052s5.067-4.844,10.38-5.527c10.4-1.335-.642,11.992-.642,11.992s7.38-3.026,20.1-4.949c12.412-1.878,9.834,5.218.713,11.312"
                transform="translate(0.211 0.547)" fill="none" />
              <g clip-path="url(#x)">
                <path
                  d="M102.381,47.328H0C.581,15.94,8.823,36.09,8.823,36.09s2.709-22.938,8.7-23.868c5.656-.879,8.321,22.5,8.321,22.5S31.992,1.318,40.129.029C47.272-1.1,41.66,30.99,41.66,30.99a19.212,19.212,0,0,1,10.2-3.545c6.694-.275,3.958,6.242,3.958,6.242s8.365-14.511,13.863-14.238c6.888.342,2.146,15.052,2.146,15.052s5.067-4.844,10.38-5.527c10.4-1.335-.642,11.992-.642,11.992s7.38-3.026,20.1-4.949c12.412-1.878,9.834,5.218.713,11.312"
                  transform="translate(0.211 0.547)" fill="url(#y)" />
              </g>
            </g>
            <g transform="translate(-1000.492 -5002.605)">
              <path
                d="M139.761,35.129c.308-18.657-16.264-24.525-32.335-19.316-12.157,3.94-13.142,5.652-43.929-11.9C54.894-1,38.876-2.537,31.689,6.789c-4.2,5.459-5.278,13.4-4.108,20.007,1.135,6.361,5.823,15.542.616,21.258-4.944,5.429-13.564,3.711-19.563,7.158-6.1,3.5-8.48,10.58-8.62,17.246C-.321,88.03,5.573,105.394,16.023,116.7c21.059,22.8,58.082,31.61,92.291,22.889,75.429-19.227,47.061-59.827,38.22-70.59-9.518-11.573-6.984-21.007-6.773-33.871"
                transform="translate(0.69 0.445)" fill="none" />
              <g clip-path="url(#z)">
                <path
                  d="M139.761,35.129c.308-18.657-16.264-24.525-32.335-19.316-12.157,3.94-13.142,5.652-43.929-11.9C54.894-1,38.876-2.537,31.689,6.789c-4.2,5.459-5.278,13.4-4.108,20.007,1.135,6.361,5.823,15.542.616,21.258-4.944,5.429-13.564,3.711-19.563,7.158-6.1,3.5-8.48,10.58-8.62,17.246C-.321,88.03,5.573,105.394,16.023,116.7c21.059,22.8,58.082,31.61,92.291,22.889,75.429-19.227,47.061-59.827,38.22-70.59-9.518-11.573-6.984-21.007-6.773-33.871"
                  transform="translate(0.69 0.445)" fill="url(#aa)" />
              </g>
            </g>
            <g transform="translate(-1000.492 -5002.605)">
              <path
                d="M108.365,15.538c-.308.086-.625.182-.932.278C95.276,19.747,94.291,21.467,63.5,3.906,54.892-1,38.883-2.536,31.7,6.79c-4.213,5.459-5.3,13.4-4.117,20.007,1.135,6.356,5.814,15.542.616,21.258C23.26,53.481,14.649,51.762,8.65,55.212c-6.1,3.5-8.488,10.575-8.638,17.24C-.314,88.027,6.231,104.819,16.03,116.7a59.878,59.878,0,0,0,4.082,4.487c33.778,20.563-1.346-23.852,26.539-42.194,13.784-9.08,40.393-18.619,28.808-33.07C67,35.354,60.575,31.241,63.161,25.431,64.577,22.225,68.72,19.213,81.8,21.6c17.892,3.269,30.954-3.087,26.565-6.057"
                transform="translate(0.683 0.446)" fill="none" />
              <g clip-path="url(#ab)">
                <path
                  d="M108.365,15.538c-.308.086-.625.182-.932.278C95.276,19.747,94.291,21.467,63.5,3.906,54.892-1,38.883-2.536,31.7,6.79c-4.213,5.459-5.3,13.4-4.117,20.007,1.135,6.356,5.814,15.542.616,21.258C23.26,53.481,14.649,51.762,8.65,55.212c-6.1,3.5-8.488,10.575-8.638,17.24C-.314,88.027,6.231,104.819,16.03,116.7a59.878,59.878,0,0,0,4.082,4.487c33.778,20.563-1.346-23.852,26.539-42.194,13.784-9.08,40.393-18.619,28.808-33.07C67,35.354,60.575,31.241,63.161,25.431,64.577,22.225,68.72,19.213,81.8,21.6c17.892,3.269,30.954-3.087,26.565-6.057"
                  transform="translate(0.683 0.446)" fill="url(#ac)" />
              </g>
            </g>
            <path
              d="M10.7,134.745h7.626l-.669-50.2L19.282,2.537,17.311,0,13.159,80.126,1.882,30.889,0,32.835,11.092,88.972l-.4,45.773"
              transform="translate(-931.265 -4926.44)" fill="#2e3e5c" />
            <path d="M12.983,0,.026,19.36,0,23.221,14.329,1.156,12.983,0" transform="translate(-913.743 -4912.463)"
              fill="#2e3e5c" />
            <path d="M.862,0,6.536,11.517l-.018,2.488L0,.358.862,0" transform="translate(-920.894 -4919.823)"
              fill="#2e3e5c" />
            <path d="M.818,0l9.544,8.558.783,2.192L0,.6.818,0" transform="translate(-938.117 -4888.993)" fill="#2e3e5c" />
            <path d="M10.156,10.855C7.534,4.3,4.816-.493,2.6.041.409.567-.189,4.944.049,10.855H10.156"
              transform="translate(-963.79 -4802.551)" fill="#3fc3d1" />
            <path d="M16.3,5.433C12.456,2.927,8.365.393,4.829.033,1.188-.338.413,2.481,0,5.433H16.3"
              transform="translate(-986.181 -4797.129)" fill="#3fc3d1" />
            <path d="M15.007,5.28A14.817,14.817,0,0,0,5.306.032C1.663-.338-.8,2.564.241,5.28H15.007"
              transform="translate(-1613.921 -4796.976)" fill="#6ce3f0" />
            <g transform="translate(-1109.5 -5110.5)">
              <g transform="matrix(1, 0, 0, 1, -840.96, -138)" filter="url(#ad)">
                <circle cx="34.5" cy="34.5" r="34.5" transform="translate(840.96 138)" fill="#fff" />
              </g>
              <g transform="translate(17 19)">
                <path d="M10,0,0,12H20L10,0" transform="translate(8)" fill="#b6eceb" /><text transform="translate(18 28)"
                  fill="#454f5b" font-size="17.28" font-family="ArialRoundedMTBold, Arial Rounded MT">
                  <tspan x="-17.647" y="0">25%</tspan>
                </text></g>
            </g>
            <g transform="translate(-1322.5 -5124.5)">
              <g transform="matrix(1, 0, 0, 1, -627.96, -124)" filter="url(#af)">
                <circle cx="38.5" cy="38.5" r="38.5" transform="translate(627.96 124)" fill="#fff" />
              </g>
              <g transform="translate(19 21)">
                <path d="M11,0,0,13H22L11,0" transform="translate(9)" fill="#007ace" /><text transform="translate(20 31)"
                  fill="#454f5b" font-size="19.2" font-family="ArialRoundedMTBold, Arial Rounded MT">
                  <tspan x="-19.608" y="0">96%</tspan>
                </text></g>
            </g>
            <g transform="translate(-1281.5 -5216.5)" opacity="0.5">
              <g transform="matrix(1, 0, 0, 1, -668.96, -32)" filter="url(#ah)">
                <circle cx="26.95" cy="26.95" r="26.95" transform="translate(668.96 32)" fill="#fff" />
              </g>
              <g transform="translate(13.3 14.7)">
                <path d="M7.7,0,0,9.1H15.4L7.7,0" transform="translate(6.3)" fill="#007ace" /><text
                  transform="translate(14 22.1)" fill="#454f5b" font-size="13.44"
                  font-family="ArialRoundedMTBold, Arial Rounded MT">
                  <tspan x="-13.725" y="0">12%</tspan>
                </text></g>
            </g>
            <g transform="translate(-1220.5 -5170.5)">
              <g transform="matrix(1, 0, 0, 1, -729.96, -78)" filter="url(#aj)">
                <circle cx="31.185" cy="31.185" r="31.185" transform="translate(729.96 78)" fill="#fff" />
              </g>
              <g transform="translate(15.39 16.01)">
                <path d="M9,0,0,10H17L9,0" transform="translate(7.61 0.99)" fill="#ffc48b" /><text
                  transform="translate(16.2 26.53)" fill="#454f5b" font-size="15.552"
                  font-family="ArialRoundedMTBold, Arial Rounded MT">
                  <tspan x="-15.882" y="0">85%</tspan>
                </text></g>
            </g>
            <g transform="translate(-1122.5 -5196.5)" opacity="0.5">
              <g transform="matrix(1, 0, 0, 1, -827.96, -52)" filter="url(#al)">
                <circle cx="31.185" cy="31.185" r="31.185" transform="translate(827.96 52)" fill="#fff" />
              </g>
              <g transform="translate(15.39 16.01)">
                <path d="M9,0,0,10H17L9,0" transform="translate(7.61 0.99)" fill="#ffc48b" /><text
                  transform="translate(16.2 26.53)" fill="#454f5b" font-size="15.552"
                  font-family="ArialRoundedMTBold, Arial Rounded MT">
                  <tspan x="-15.882" y="0">12%</tspan>
                </text></g>
            </g>
            <g transform="translate(-1159.5 -5243.5)">
              <g transform="matrix(1, 0, 0, 1, -790.96, -5)" filter="url(#an)">
                <circle cx="27" cy="27" r="27" transform="translate(790.96 5)" fill="#fff" />
              </g>
              <g transform="translate(13 15)">
                <path d="M8,0,0,9H15L8,0" transform="translate(6)" fill="#95cdb1" /><text transform="translate(14 22)"
                  fill="#454f5b" font-size="13.44" font-family="ArialRoundedMTBold, Arial Rounded MT">
                  <tspan x="-13.725" y="0">10%</tspan>
                </text></g>
            </g>
          </g>
        </svg>
      </div> -->

  <!-- <header class=""> -->
  <div class="banner">
    <div class="content active">
      <img src="/img/the-little-mermaid-title.png" alt="" class="movie-title" />
      <h4>
        <span>2023</span>
        <span><i>12+</i></span>
        <span>2h 14min</span>
        <span>Romance</span>
      </h4>
      <p class="overflow-hidden">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam vitae
        unde voluptatibus? Distinctio consectetur cum quae architecto possimus
        earum suscipit expedita dolorem, quos voluptatibus itaque enim hic
        laudantium aliquid sed eum ratione veritatis, in, necessitatibus quaerat
        voluptates rem sit vel a. Inventore, temporibus eaque. Dolorem error
        corporis iste? Amet, ab.
      </p>
      <div class="button">
        <!-- <a href="#" onclick="toggleVideo()"><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</a> -->
        <a href="#_" onclick="toggleVideo()"
          class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
          <span
            class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span
            class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0 pt-2"></span>
          <span
            class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Watch</span>
        </a>
        <!-- <a href="#"><i class="fa fa-plus" aria-hidden="true"></i> My List</a> -->
        <a href="#_"
          class="relative inline-flex items-center justify-start px-1 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
          <span
            class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span
            class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span
            class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">My
            List</span>
        </a>
      </div>
    </div>

    <div class="carousel-box">
      <div class="carousel">
        <div class="carousel-item" onclick="changeBg('bg-the-little-mermaid.jpeg', 'bg-mermaid')">
          <img src="/img/movies/the-little-mermaid.jpeg" alt="" />
        </div>

        <div class="carousel-item" onclick="changeBg('bg-65.jpeg', 'bg-65');">
          <img src="/img/movies/65.jpg" alt="" />
        </div>

        <div class="carousel-item" onclick="changeBg('bg-the-black-demon.jpeg', 'bg-the-black-demon');">
          <img src="/img/movies/bg-the-black-demon.jpeg" alt="" />
        </div>

        <div class="carousel-item" onclick="changeBg('bg-the-tank.jpeg', 'bg-the-tank');">
          <img src="/img/movies/the-tank.jpeg" alt="" />
        </div>

        <div class="carousel-item" onclick="changeBg('bg-the-covenant.jpeg', 'bg-the-covenant');">
          <img src="/img/movies/the-covenant.jpg" alt="" />
        </div>
      </div>
    </div>

    <ul class="sci">
      <li>
        <a href="#">
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="#"> <i class="fa fa-twitter" aria-hidden="true"></i> </a>
      </li>
      <li>
        <a href="#"> <i class="fa fa-youtube-play" aria-hidden="true"></i></a>
      </li>
    </ul>
  </div>
  <!-- </header> -->
  <!-- 
  <div class="px-6 py-4 flex rows">
    <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide v-for="n of 50" :key="n">Slide {{ n }}</swiper-slide>
    </swiper>
  </div> -->

  <!-- <div class="flex gap-4 px-10 "> -->

  <!-- <div class=" flex gap-5 rows-6 bg-transparent  px-10 " id="navbar">
    <div
      class="max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out relative">
      <img class="w-full" src="/image/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg" alt="Movie Poster">
      <div class="absolute top-0 left-0 bg-teal-500 text-white py-1 px-2 rounded-bl rounded-tr text-xs font-semibold">
        New Release
      </div>
      <div class="px-6 py-4 absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white">
        <div class="font-bold text-2xl sm:text-md mb-2">Title of the Movie</div>
        <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 rounded-full">
          Watch Now
        </a>
      </div>
    </div>
    <div
      class="max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out relative">
      <img class="w-full" src="/image/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg" alt="Movie Poster">
      <div class="absolute top-0 left-0 bg-teal-500 text-white py-1 px-2 rounded-bl rounded-tr text-xs font-semibold">
        New Release
      </div>
      <div class="px-6 py-4 absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white">
        <div class="font-bold text-2xl sm:text-md mb-2">Title of the Movie</div>
        <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 rounded-full">
          Watch Now
        </a>
      </div>
    </div>
    <div
      class="max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out relative">
      <img class="w-full" src="/image/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg" alt="Movie Poster">
      <div class="absolute top-0 left-0 bg-teal-500 text-white py-1 px-2 rounded-bl rounded-tr text-xs font-semibold">
        New Release
      </div>
      <div class="px-6 py-4 absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white">
        <div class="font-bold text-2xl sm:text-md mb-2">Title of the Movie</div>
        <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 rounded-full">
          Watch Now
        </a>
      </div>
    </div>
    <div
      class="max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out relative">
      <img class="w-full" src="/image/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg" alt="Movie Poster">
      <div class="absolute top-0 left-0 bg-teal-500 text-white py-1 px-2 rounded-bl rounded-tr text-xs font-semibold">
        New Release
      </div>
      <div class="px-6 py-4 absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white">
        <div class="font-bold text-2xl sm:text-md mb-2">Title of the Movie</div>
        <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 rounded-full">
          Watch Now
        </a>
      </div>
    </div>
    <div
      class="max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out relative">
      <img class="w-full" src="/image/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg" alt="Movie Poster">
      <div class="absolute top-0 left-0 bg-teal-500 text-white py-1 px-2 rounded-bl rounded-tr text-xs font-semibold">
        New Release
      </div>
      <div class="px-6 py-4 absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white">
        <div class="font-bold text-2xl sm:text-md mb-2">Title of the Movie</div>
        <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 rounded-full">
          Watch Now
        </a>
      </div>
    </div>

    <div
      class="max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out relative">
      <img class="w-full" src="/image/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg" alt="Movie Poster">
      <div class="absolute top-0 left-0 bg-teal-500 text-white py-1 px-2 rounded-bl rounded-tr text-xs font-semibold">
        New Release
      </div>
      <div class="px-6 py-4 absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white">
        <div class="font-bold text-2xl sm:text-md mb-2">Title of the Movie</div>
        <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 rounded-full">
          Watch Now
        </a>
      </div>
    </div>














  </div> -->
  <!-- <div class="wrapper flex sm:flex-col xl:flex-wrap gap-4 sm:gap-2 px-6 bg-gradient-to-r from-gray-500 via-purple-500 to-pink-500 ..."> -->
  <div
    class="wrapper grid grid-cols-4 max-[600px]:grid-cols-2 gap-4 max-[900px]:grid-cols-3 sm:gap-2 px-6   bg-gradient-to-r from-gray-500 via-purple-500 to-pink-500 ...">
    <!-- <div class="card">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt="" srcset="" />
      <div class="descriptions">
        <h1>Equalizer 2</h1>
        <p>
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="px-6 py-4 absolute bottom-0 left-0 w-full text-white">
          <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 btn glass">
            Watch Now
          </a>
        </div>
      </div>
    </div>

    <div class="card">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt="" srcset="" />
      <div class="descriptions">
        <h1>Equalizer 2</h1>
        <p>
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="px-6 py-4 absolute bottom-0 left-0 w-full text-white">
          <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 btn glass">
            Watch Now
          </a>
        </div>
      </div>
    </div>

    <div class="card">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt="" srcset="" />
      <div class="descriptions">
        <h1>Equalizer 2</h1>
        <p>
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="px-6 py-4 absolute bottom-0 left-0 w-full text-white">
          <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 btn glass">
            Watch Now
          </a>
        </div>
      </div>
    </div>

    <div class="card">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt="" srcset="" />
      <div class="descriptions">
        <h1>Equalizer 2</h1>
        <p>
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="px-6 py-4 absolute bottom-0 left-0 w-full text-white">
          <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 btn glass">
            Watch Now
          </a>
        </div>
      </div>
    </div>


    <div class="card">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt="" srcset="" />
      <div class="descriptions">
        <h1>Equalizer 2</h1>
        <p>
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="px-6 py-4 absolute bottom-0 left-0 w-full text-white">
          <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 btn glass">
            Watch Now
          </a>
        </div>
      </div>
    </div>

    <div class="card">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt="" srcset="" />
      <div class="descriptions">
        <h1>Equalizer 2</h1>
        <p>
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="px-6 py-4 absolute bottom-0 left-0 w-full text-white">
          <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 btn glass">
            Watch Now
          </a>
        </div>
      </div>
    </div>

    <div class="card">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt="" srcset="" />
      <div class="descriptions">
        <h1>Equalizer 2</h1>
        <p>
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="px-6 py-4 absolute bottom-0 left-0 w-full text-white">
          <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 btn glass">
            Watch Now
          </a>
        </div>
      </div>
    </div>

    <div class="card">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt="" srcset="" />
      <div class="descriptions">
        <h1>Equalizer 2</h1>
        <p>
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="px-6 py-4 absolute bottom-0 left-0 w-full text-white">
          <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 btn glass">
            Watch Now
          </a>
        </div>
      </div>
    </div>


    <div class="card">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt="" srcset="" />
      <div class="descriptions">
        <h1>Equalizer 2</h1>
        <p>
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="px-6 py-4 absolute bottom-0 left-0 w-full text-white">
          <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 btn glass">
            Watch Now
          </a>
        </div>
      </div>
    </div>

    <div class="card">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt="" srcset="" />
      <div class="descriptions">
        <h1>Equalizer 2</h1>
        <p>
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="px-6 py-4 absolute bottom-0 left-0 w-full text-white">
          <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 btn glass">
            Watch Now
          </a>
        </div>
      </div>
    </div>

    <div class="card">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt="" srcset="" />
      <div class="descriptions">
        <h1>Equalizer 2</h1>
        <p>
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="px-6 py-4 absolute bottom-0 left-0 w-full text-white">
          <a href="#" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 btn glass">
            Watch Now
          </a>
        </div>
      </div>
    </div>


    <div
      class="relative card flex flex-col w-auto h-96 bg-white border-2 border-white shadow-md cursor-pointer transform transition duration-500 ease-in-out hover:scale-97 hover:shadow-sm">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt=""
        class="w-full h-full transition duration-500 ease-in-out transform scale-160 rotate-20 blur-3" />
      <div
        class="absolute inset-0 descriptions bg-opacity-25 bg-white transition duration-700 ease-in-out clip-circle hover:clip-rect">
        <h1 class="text-red-500 text-md font-normal mt-0 ml-4">Equalizer 2</h1>
        <p class="text-gray-700 mt-1 ml-0  hover:text-sky-400 max-[600px]:text-ellipsis max-[600px]:overflow-hidden ...">If you have a problem and there is nowhere else to turn, the mysterious and
          elusive Robert McCall will deliver the vigilante justice you seek. This time, however, McCall's past cuts
          especially close to home when thugs kill Susan Plummer -- his best friend and former colleague. Now out for
          revenge, McCall must take on a crew of highly trained assassins who'll stop at nothing to destroy him.</p>
        <div class="absolute bottom-0 left-0 w-full p-4 text-white">
          <a href="#" class="btn bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2">Watch
            Now</a>
        </div>
      </div>
    </div>
    <div
      class="relative card flex flex-col w-64 h-96 bg-white border-2 border-white shadow-md cursor-pointer transform transition duration-500 ease-in-out hover:scale-97 hover:shadow-sm">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt=""
        class="w-full h-full transition duration-500 ease-in-out transform scale-160 rotate-20 blur-3" />
      <div
        class="absolute inset-0 descriptions bg-opacity-25 bg-white transition duration-700 ease-in-out clip-circle hover:clip-rect">
        <h1 class="text-red-500 text-xl font-semibold mt-4 ml-4">Equalizer 2</h1>
        <p class="text-gray-700 mt-8 ml-4">If you have a problem and there is nowhere else to turn, the mysterious and
          elusive Robert McCall will deliver the vigilante justice you seek. This time, however, McCall's past cuts
          especially close to home when thugs kill Susan Plummer -- his best friend and former colleague. Now out for
          revenge, McCall must take on a crew of highly trained assassins who'll stop at nothing to destroy him.</p>
        <div class="absolute bottom-0 left-0 w-full p-4 text-white">
          <a href="#" class="btn bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2">Watch
            Now</a>
        </div>
      </div>
    </div> -->

    <div
      class="relative card flex flex-col w-auto mt-5 max-[600px]:h-72  bg-white border-2 border-white shadow-md cursor-pointer transform transition duration-500 ease-in-out hover:scale-97 hover:shadow-sm">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt=""
        class="w-full xl:h-full max-[600px]:h-72 transition duration-500 ease-in-out transform scale-160 rotate-20 blur-3" />
      <!-- <div class="absolute top-0 left-0  text-white py-2 px-2 rounded-bl rounded-tr text-xs font-semibold hover:display-none"> -->
      <div
        class="absolute top-0 left-0 text-white py-2 px-2 rounded-bl rounded-tr text-xs font-semibold opacity-100 hover:opacity-0 transition duration-300">

        2022
      </div>
      <div
        class="absolute inset-0 descriptions bg-opacity-25 bg-white transition duration-700 ease-in-out clip-circle hover:clip-rect">
        <h1 class="text-white text-md font-normal mt-2 ml-0">Equalizer 2</h1>
        <p class="text-gray-700 mt-1 ml-0 hover:text-sky-400 max-[600px]:text-ellipsis max-[600px]:overflow-hidden ...">
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="absolute bottom-0 left-0 w-full p-4 text-white">
          <a href="#" class="btn bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2">Watch
            Now</a>
        </div>
      </div>
    </div>


    <div
      class="relative card flex flex-col w-auto mt-5 h-48 bg-white border-2 border-white shadow-md cursor-pointer transform transition duration-500 ease-in-out hover:scale-97 hover:shadow-sm">
      <img src="https://www.themoviedb.org/t/p/original/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg" alt=""
        class="w-full h-full transition duration-500 ease-in-out transform scale-160 rotate-20 blur-3" />
      <div
        class="absolute inset-0 descriptions bg-opacity-25 bg-white transition duration-700 ease-in-out clip-circle hover:clip-rect">
        <h1 class="text-red-500 text-xl  mt-0 ml-4">Equalizer 2</h1>
        <p class="text-gray-700 mt-1 ml-0 hover:text-sky-400 max-[600px]:text-ellipsis max-[600px]:overflow-hidden ...">
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="absolute bottom-0 left-0 w-full p-4 text-white">
          <a href="#" class="btn bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2">Watch
            Now</a>
        </div>
      </div>
    </div>


    <div
      class="relative card flex flex-col w-auto mt-5 h-48 bg-white border-2 border-white shadow-md cursor-pointer transform transition duration-500 ease-in-out hover:scale-97 hover:shadow-sm">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt=""
        class="w-full h-full transition duration-500 ease-in-out transform scale-160 rotate-20 blur-3" />
      <div
        class="absolute inset-0 descriptions bg-opacity-25 bg-white transition duration-700 ease-in-out clip-circle hover:clip-rect">
        <h1 class="text-red-500 text-md font-normal mt-0 ml-4">Equalizer 2</h1>
        <p class="text-gray-700 mt-1 ml-0 hover:text-sky-400 max-[600px]:text-ellipsis max-[600px]:overflow-hidden ...">
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="absolute bottom-0 left-0 w-full p-4 text-white">
          <a href="#" class="btn bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2">Watch
            Now</a>
        </div>
      </div>
    </div>

    <div
      class="relative card flex flex-col w-auto mt-5 h-48 bg-white border-2 border-white shadow-md cursor-pointer transform transition duration-500 ease-in-out hover:scale-97 hover:shadow-sm">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt=""
        class="w-full h-full transition duration-500 ease-in-out transform scale-160 rotate-20 blur-3" />
      <div
        class="absolute inset-0 descriptions bg-opacity-25 bg-white transition duration-700 ease-in-out clip-circle hover:clip-rect">
        <h1 class="text-red-500 text-md font-normal mt-0 ml-4">Equalizer 2</h1>
        <p class="text-gray-700 mt-1 ml-0 hover:text-sky-400 max-[600px]:text-ellipsis max-[600px]:overflow-hidden ...">
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="absolute bottom-0 left-0 w-full p-4 text-white">
          <a href="#" class="btn bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2">Watch
            Now</a>
        </div>
      </div>
    </div>

    <div
      class="relative card flex flex-col w-auto mt-5 h-48 bg-white border-2 border-white shadow-md cursor-pointer transform transition duration-500 ease-in-out hover:scale-97 hover:shadow-sm">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt=""
        class="w-full h-full transition duration-500 ease-in-out transform scale-160 rotate-20 blur-3" />
      <div
        class="absolute inset-0 descriptions bg-opacity-25 bg-white transition duration-700 ease-in-out clip-circle hover:clip-rect">
        <h1 class="text-red-500 text-md font-normal mt-0 ml-4">Equalizer 2</h1>
        <p class="text-gray-700 mt-1 ml-0 hover:text-sky-400 max-[600px]:text-ellipsis max-[600px]:overflow-hidden ...">
          If you have a problem and there is nowhere else to turn, the
          mysterious and elusive Robert McCall will deliver the vigilante
          justice you seek. This time, however, McCall's past cuts especially
          close to home when thugs kill Susan Plummer -- his best friend and
          former colleague. Now out for revenge, McCall must take on a crew of
          highly trained assassins who'll stop at nothing to destroy him.
        </p>
        <div class="absolute bottom-0 left-0 w-full p-4 text-white">
          <a href="#" class="btn bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2">Watch
            Now</a>
        </div>
      </div>
    </div>


  </div>
  <div class=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">

    <swiper @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide>
        <div
          class="center card w-40 mx-4 my-4  flex flex-col justify-center max-[600px]:h-72  bg-white border-2 border-white shadow-md cursor-pointer transform transition duration-500 ease-in-out hover:scale-97 hover:shadow-sm">
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt=""
            class="w-24 h-72 max-[600px]:h-72 transition duration-500 ease-in-out transform scale-160 rotate-20 blur-3" />
          <!-- <div class="absolute top-0 left-0  text-white py-2 px-2 rounded-bl rounded-tr text-xs font-semibold hover:display-none"> -->
          <div
            class="absolute top-0 left-0 text-white py-2 px-2 rounded-bl rounded-tr text-xs font-semibold opacity-100 hover:opacity-0 transition duration-300">
  
            2022
          </div>
          <div
            class="absolute inset-0 descriptions bg-opacity-25 bg-white transition duration-700 ease-in-out clip-circle hover:clip-rect">
            <h1 class="text-white text-md font-normal mt-2 ml-0">Equalizer 2</h1>
            <p class="text-gray-700 mt-1 ml-0 hover:text-sky-400 max-[600px]:text-ellipsis max-[600px]:overflow-hidden ...">
              If you have a problem and there is nowhere else to turn, the
              mysterious and elusive Robert McCall will deliver the vigilante
              justice you seek. This time, however, McCall's past cuts especially
              close to home when thugs kill Susan Plummer -- his best friend and
              former colleague. Now out for revenge, McCall must take on a crew of
              highly trained assassins who'll stop at nothing to destroy him.
            </p>
            <div class="absolute bottom-0 left-0 w-full p-4 text-white">
              <a href="#" class="btn bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2">Watch
                Now</a>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
        class="center card w-40 mx-4 my-4  flex flex-col justify-center max-[600px]:h-72  bg-white border-2 border-white shadow-md cursor-pointer transform transition duration-500 ease-in-out hover:scale-97 hover:shadow-sm">
        <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt=""
            class="w-full h-72 max-[600px]:h-72 transition duration-500 ease-in-out transform scale-160 rotate-20 blur-3" />
          <!-- <div class="absolute top-0 left-0  text-white py-2 px-2 rounded-bl rounded-tr text-xs font-semibold hover:display-none"> -->
          <div
            class="absolute top-0 left-0 text-white py-2 px-2 rounded-bl rounded-tr text-xs font-semibold opacity-100 hover:opacity-0 transition duration-300">
  
            2022
          </div>
          <div
            class="absolute inset-0 descriptions bg-opacity-25 bg-white transition duration-700 ease-in-out clip-circle hover:clip-rect">
            <h1 class="text-white text-md font-normal mt-2 ml-0">Equalizer 2</h1>
            <p class="text-gray-700 mt-1 ml-0 hover:text-sky-400 max-[600px]:text-ellipsis max-[600px]:overflow-hidden ...">
              If you have a problem and there is nowhere else to turn, the
              mysterious and elusive Robert McCall will deliver the vigilante
              justice you seek. This time, however, McCall's past cuts especially
              close to home when thugs kill Susan Plummer -- his best friend and
              former colleague. Now out for revenge, McCall must take on a crew of
              highly trained assassins who'll stop at nothing to destroy him.
            </p>
            <div class="absolute bottom-0 left-0 w-full p-4 text-white">
              <a href="#" class="btn bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2">Watch
                Now</a>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
        class="center card w-40 mx-4 my-4  flex flex-col justify-center max-[600px]:h-72  bg-white border-2 border-white shadow-md cursor-pointer transform transition duration-500 ease-in-out hover:scale-97 hover:shadow-sm">
        <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uzHPb0rITwa44KkhX5Z27cXwmL1.jpg" alt=""
            class="w-full h-72 max-[600px]:h-72 transition duration-500 ease-in-out transform scale-160 rotate-20 blur-3" />
          <!-- <div class="absolute top-0 left-0  text-white py-2 px-2 rounded-bl rounded-tr text-xs font-semibold hover:display-none"> -->
          <div
            class="absolute top-0 left-0 text-white py-2 px-2 rounded-bl rounded-tr text-xs font-semibold opacity-100 hover:opacity-0 transition duration-300">
  
            2022
          </div>
          <div
            class="absolute inset-0 descriptions bg-opacity-25 bg-white transition duration-700 ease-in-out clip-circle hover:clip-rect">
            <h1 class="text-white text-md font-normal mt-2 ml-0">Equalizer 2</h1>
            <p class="text-gray-700 mt-1 ml-0 hover:text-sky-400 max-[600px]:text-ellipsis max-[600px]:overflow-hidden ...">
              If you have a problem and there is nowhere else to turn, the
              mysterious and elusive Robert McCall will deliver the vigilante
              justice you seek. This time, however, McCall's past cuts especially
              close to home when thugs kill Susan Plummer -- his best friend and
              former colleague. Now out for revenge, McCall must take on a crew of
              highly trained assassins who'll stop at nothing to destroy him.
            </p>
            <div class="absolute bottom-0 left-0 w-full p-4 text-white">
              <a href="#" class="btn bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2">Watch
                Now</a>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- Add more slides as needed -->
    </swiper>


  </div>

<div class="h-20 w-40 px-3 py-3 mx-3 my-3">

  <swiper
  :effect="'coverflow'"
  :grabCursor="true"
  :centeredSlides="true"
  :slidesPerView="'auto'"
  :coverflowEffect="{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }"
  :pagination="true"
  class="mySwiper"
>
  <swiper-slide>
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
  </swiper-slide>
  <swiper-slide>
    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
  </swiper-slide>
  <!-- Add more slides as needed -->
</swiper>

</div>

<div>
  <Slider />
</div>

  <!-- </body> -->
</template>

<script>
// import { Swiper, SwiperSlide } from "swiper/vue";
// import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/core"; // Import SwiperCore instead of individual modules

import Slider from "./Slider.vue";


export default {
  components: {
    Swiper,
    SwiperSlide,
    Slider
  },



  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

/* {
   flex: 1;
  flex-basis: 300px;
  flex-grow: 0;
  height: 440px;
}*/
.card {

  background: #fff;
  border: 2px solid #ff0000;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  overflow: hidden;
  position: relative;
}

.card img {
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
}

.descriptions {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.075);
  width: 100%;
  height: 100%;
  transition: all 0.7s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
  clip-path: circle(0% at 100% 100%);
}

.card:hover .descriptions {
  left: 0px;
  transition: all 0.7s ease-in-out;
  clip-path: circle(75%);
}

.card:hover {
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transform: scale(0.97);
}

.card:hover img {
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  transform: scale(1.6) rotate(20deg);
  filter: blur(3px);
}

/* 
.card h1 {
  color: #ff3838;
  letter-spacing: 1px;
  margin: 0px;
}

.card p {
  line-height: 24px;
  height: 70%;
}*/

/*  footer   */
footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

/* footer  */

/* Hide the play button initially */
.group .group-hover\:hidden {
  display: none;
}

/* Show the play button on hover */
.group:hover .group-hover\:inline {
  display: inline;
}

.banner {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0 100px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  background: url(/img/movies/bg-little-mermaid.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transition: 0.5s;
}

.banner::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.content {
  position: relative;
  max-width: 550px;
  display: none;
  visibility: hidden;
  transform: scale(0);
  transition: 0.5s;
}

.content.active {
  display: block;
  visibility: visible;
  transform: scale(1);
  transition: 0.5s;
}

.movie-title {
  max-width: 250px;
}

.banner .content h4 {
  color: rgb(255, 255, 255, 0.5);
  font-weight: 400;
  font-size: 30px;
}

.banner .content h4 span {
  padding: 0 10px;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
}

.banner .content h4 span:first-child {
  padding-left: 0;
}

.banner .content h4 span:last-child {
  border-right: none;
}

.banner .content h4 span i {
  background: var(--primary);
  color: #ffffff;
  padding: 0 8px;
  display: inline-block;
  border-radius: 2px;
}

.banner .content p {
  font-size: 1em;
  font-weight: 300;
  line-height: 1.5em;
  color: #ffffff;
  margin: 10px 0 20px;
}

.banner .content .button a {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  /* background: var(--primary); */
  color: #ffffff;
  padding: 8px 20px;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
  text-overflow: uppercase;
  cursor: pointer;
}

.banner .carousel-box {
  position: relative;
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(0, 0, 0, 0.2); */
}

.carousel {
  position: relative;
  width: 85%;
  height: 397px;
}

.carousel .carousel-item {
  width: 250px;
  cursor: pointer;
}

.carousel .carousel-item img {
  margin-top: 50px;
  max-width: 235px;
  border-radius: 10px;
  transform: translateX(8px) translateY(-100px);
  object-fit: cover;
  object-position: center;
}

.play {
  width: 100%;
  height: 50px;
}

.play i {
  margin-right: 10px;
  font-size: 40px;
  cursor: pointer !important;
}

.play:hover {
  color: var(--primary);
}

.sci {
  position: absolute;
  bottom: 50px;
  right: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.sci a {
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 25px;
  transition: 0.3s;
  cursor: pointer;
}

.sci a:hover {
  color: var(--primary);
}

.trailer {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(20px);
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
}

.trailer.active {
  visibility: visible;
  opacity: 1;
}

.trailer video {
  max-width: 900px;
  outline: none;
}

.close {
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  filter: invert(1);
  max-width: 30px;
}

/*header bar css end  */

/* media query  start   */

@media (max-width: 500px) {
  .content {
    /* margin-top: 600px; */
    margin-top: 600px;
    width: 100%;
  }

  .carousel {
    width: 80%;
    /* margin-bottom: 140px; */
    text-align: center;
    right: 340px;
    margin-right: 110px;
    margin-bottom: 600px;
  }

  .banner .content h4 span {
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
  }

  .banner .content h4 span i {
    margin: 1px;
  }
}

.banner .content p {
  font-size: 15px;
  width: 350px;
}

.trailer {
  margin-top: 50px;
}

/* media query  end   */</style>
