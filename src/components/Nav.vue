<template>
    <nav class="bg-transparent py-0 px-0 lg:px-0 xl:py-0 fixed top-0 z-50 w-full md:px-8 xl:px-4 xxl:px-40" id="navbar">
        <div class="navbar">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>

                        <li tabindex="0">
                            <details>
                                <summary>Movies</summary>

                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="multiLevelDropdownButton">
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
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="multiLevelDropdownButton">
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
                <img src="/logo/UniqueNetLogo.svg" alt="Logo" class="h-6 md:h-8" />
            </div>
            <div class="navbar-center hidden lg:flex lg:px-2">
                <ul class="menu menu-horizontal px-1 text-white">
                    <li><a>Home</a></li>
                    <li tabindex="0">
                        <div class="dropdown dropdown-hover dropdown-bottom ">

                            <span class="ml-2">Movies</span>

                            <ul tabindex="0"
                                class="dropdown-content z-[1] ml-0 mt:[2px] p-2 absolute shadow bg-base-100 rounded-2xl bg-transparent  text-base text-gray-700 dark:text-gray-200">
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
                        </div>
                    </li>
                    <li tabindex="0">
                        <div class="dropdown dropdown-hover dropdown-bottom ">

                            <span class="ml-2">Tv Series</span>

                            <ul tabindex="0"
                                class="dropdown-content z-[1] ml-0 mt:[2px] p-2 absolute shadow bg-base-100 rounded-2xl bg-transparent  text-base text-gray-700 dark:text-gray-200">
                                <li>
                                    <a href="#"
                                        class="bg-transparent block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bangla
                                    </a>
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
                        </div>
                    </li>
                    <!-- <li tabindex="0">
                        <details>
                            <summary class="dropdown-hover">Movies</summary>

                            <ul class=" dropdown-content py-2 text-sm text-gray-700 dark:text-gray-200 bg-transparent">
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
                    </li> -->
                    <!-- <li>
                        <details>
                            <summary>TV Series</summary>
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 ">
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
                    </li> -->
                    <li><a>Live TV</a></li>
                </ul>


            </div>

            <div class="navbar-end flex gap-10">
                <!-- <div
                    class="flex justify-center items-center h-12 px-4 font-medium text-red-500 0 whitespace-nowrap hover:bg-red-600 hover:text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd" />
                    </svg>
                </div> -->



                <div class="relative flex items-center w-full h-8 rounded-lg focus-within:shadow-lg ">
                    <!-- <div class="grid place-items-center h-full w-12  text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div> -->

                    <!-- <input
                    class="peer h-full w-full outline-none text-sm text-red-700 pr-2  bg-transparent border border-white "
                    type="text"
                    id="search"
                    placeholder="Search something.." />  -->

                    <div class="relative">
                        <input type="text" class="p-3 pl-8 text-base rounded text-red-600 bg-transparent outline-none "
                            placeholder="search your movie..." />
                        <svg class="w-5 h-5 absolute left-2.5 top-3.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="red">
                            <path
                                d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z">
                            </path>
                            <path
                                d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z">
                            </path>
                        </svg>

                    </div>
                </div>
                <!-- <a href="" class="mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"
                        style="fill: rgb(255, 0, 0);transform: ;msFilter:;">
                        <path d="m10.998 16 5-4-5-4v3h-9v2h9z"></path>
                        <path
                            d="M12.999 2.999a8.938 8.938 0 0 0-6.364 2.637L8.049 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051S20 10.13 20 12s-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637C21.063 16.665 22 14.405 22 12s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z">
                        </path>
                    </svg>
                </a> -->
                <a href="" class=" max-[1024px]:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"
                        style="fill: rgba(255, 0, 0, 1);transform: ;msFilter:;">
                        <path
                            d="M12 3c-4.625 0-8.442 3.507-8.941 8.001H10v-3l5 4-5 4v-3H3.06C3.56 17.494 7.376 21 12 21c4.963 0 9-4.037 9-9s-4.037-9-9-9z">
                        </path>
                    </svg>
                </a>
                <!-- <a
                    class="btn font-medium text-gray-100 bg-red-500  whitespace-nowrap hover:bg-red-600 hover:text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 focus:outline-none  max-[1024px]:hidden">Sign
                    In</a> -->
            </div>

            <!-- </div> -->

        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',

}


</script>

