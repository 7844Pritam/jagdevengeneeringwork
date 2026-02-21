<?php require_once __DIR__ . '/seo.php'; ?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/svg+xml" href="assets/favi.svg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-site-verification" content="GBXxyYTAtEGboqV7rY3mIZmJBn-R-D_aCqYTyG6jP3I">


    <link rel="stylesheet" href="assets/style.css">
    <link rel="stylesheet" href="assets/main.css">
    <script src="assets/script.js"></script>

    <!-- Title -->
    <title><?php echo get_seo('title'); ?></title>
    
    <!-- Basic SEO -->
    <meta name="description" content="<?php echo get_seo('description'); ?>">
    <meta name="keywords" content="<?php echo get_seo('keywords'); ?>">
    <meta name="author" content="<?php echo get_seo('author'); ?>">

    <!-- Open Graph (for social sharing: Facebook, LinkedIn, WhatsApp) -->
    <meta property="og:title" content="<?php echo get_seo('og_title'); ?>">
    <meta property="og:description" content="<?php echo get_seo('og_description'); ?>">
    <meta property="og:image" content="<?php echo get_seo('og_image'); ?>">
    <meta property="og:url" content="<?php echo get_seo('og_url'); ?>">
    <meta property="og:type" content="website">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo get_seo('twitter_title'); ?>">
    <meta name="twitter:description" content="<?php echo get_seo('twitter_description'); ?>">
    <meta name="twitter:image" content="<?php echo get_seo('twitter_image'); ?>">

    <!-- Canonical URL -->
    <link rel="canonical" href="<?php echo get_seo('og_url'); ?>">

    <!-- Structured Data (Schema.org) - Dynamic per page -->
    <?php echo get_schema_markup(); ?>

    <style>
    .imageye-selected {
        outline: 2px solid black !important;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) !important;
    }
    </style>
</head>

<body>
    <div class="font-extralight" id="root">
        <header class="w-full shadow-md">
            <div class="flex flex-wrap items-center justify-between px-4 py-3 bg-white">
                <a href="/" class="flex items-center gap-2 cursor-pointer">
                    <img width="50" height="50" 
                         alt="JEW Steel Pvt. Ltd. Logo - Leading PEB Manufacturer in Lucknow" 
                         title="JEW Steel - Pre-Engineered Buildings & Steel Structures"
                         src="assets/cmdlogo-BiFhdyPy.svg">
                    <div class="text-xl sm:text-2xl md:text-3xl font-bold text-[#0d5750] flex items-center"><span>JEW
                            Steel</span><sup class="text-xs align-super ml-1">®</sup></div>
                </a>
                <div class="hidden lg:flex items-center gap-6">
                    <div class="flex items-center gap-2">
                        <div class="bg-[#f18e02] rounded-full p-2 text-white"><svg stroke="currentColor"
                                fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                                </path>
                            </svg></div>
                        <div>
                            <p class="text-gray-500 text-sm">Toll Free Number</p>
                            <p class="text-[#0d5750] font-semibold">+91-8319950259</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="bg-[#f18e02] rounded-full p-2 text-white"><svg stroke="currentColor"
                                fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                                </path>
                            </svg></div>
                        <div>
                            <p class="text-gray-500 text-sm">Send Us Mail</p>
                            <p class="text-[#0d5750] font-semibold">jewanilyadav@gmail.com</p>
                        </div>
                    </div><a
                        href="assets/brochure.pdf"
                        class="bg-gradient-to-r from-black to-[#f18e02] text-white px-5 py-2 rounded">DOWNLOAD BROCHURE
                        →</a>
                </div>
                <button id="mobile-menu-toggle" class="lg:hidden text-2xl text-[#f18e02]" aria-label="Toggle menu">
                    <svg stroke="currentColor" fill="currentColor"
                        stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
            </div>
            <nav class="bg-[#f18e02]">
                <ul class="hidden lg:flex justify-end  items-center gap-8 font-bold text-white text-sm py-3 px-5">
                    <li class="cursor-pointer">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="cursor-pointer relative dropdown">
                        <a href="#" class="flex items-center gap-1">About ▼</a>
                        <ul
                            class="dropdown-menu absolute hidden z-50 top-full left-0 bg-white text-black rounded shadow-lg w-48 py-2">
                            <li><a href="director.php" class="block px-4 py-2 hover:bg-gray-100">Our Director</a></li>
                            <li><a href="profile.php" class="block px-4 py-2 hover:bg-gray-100">Company Profile</a></li>
                        </ul>
                    </li>
                    <li class="relative cursor-pointer dropdown">
                        <a href="#" class="flex items-center gap-1">Services ▼</a>
                        <ul
                            class="dropdown-menu absolute hidden z-50 top-full left-0 bg-white text-black rounded shadow-lg w-64 py-2">
                            <li><a href="peb-multi-story-building.php" class="block px-4 py-2 hover:bg-gray-100">PEB Multi Story Building</a></li>
                            <li><a href="peb-warehousing.php" class="block px-4 py-2 hover:bg-gray-100">PEB Warehousing</a></li>
                            <li><a href="gi-sheet-manufacturing.php" class="block px-4 py-2 hover:bg-gray-100">GI Sheet Manufacturing</a></li>
                            <li><a href="industrial-shed.php" class="block px-4 py-2 hover:bg-gray-100">EOT Crane Manufacturing</a></li>
                        </ul>
                    </li>
                    <li class="cursor-pointer">
                        <a href="our-project.php">Our Project</a>
                    </li>
                    <li class="cursor-pointer">
                        <a href="career.php">Career</a>
                    </li>
                    <li class="cursor-pointer">
                        <a href="contact-us.php">Contact</a>
                    </li>
                </ul>
                <!-- Mobile Menu -->
                <ul id="mobile-menu" class="hidden lg:hidden flex-col gap-4 font-bold text-white text-sm py-4 px-5">
                    <li class="cursor-pointer border-b border-white/20 pb-2">
                        <a href="index.php">Home</a>
                    </li>
                    <li class="cursor-pointer border-b border-white/20 pb-2">
                        <span class="flex items-center justify-between" onclick="toggleMobileDropdown('about-mobile')">
                            About ▼
                        </span>
                        <ul id="about-mobile" class="hidden pl-4 mt-2 space-y-2">
                            <li><a href="director.php" class="block py-1">Our Director</a></li>
                            <li><a href="profile.php" class="block py-1">Company Profile</a></li>
                        </ul>
                    </li>
                    <li class="cursor-pointer border-b border-white/20 pb-2">
                        <span class="flex items-center justify-between" onclick="toggleMobileDropdown('services-mobile')">
                            Services ▼
                        </span>
                        <ul id="services-mobile" class="hidden pl-4 mt-2 space-y-2">
                            <li><a href="peb-multi-story-building.php" class="block py-1">PEB Multi Story Building</a></li>
                            <li><a href="peb-warehousing.php" class="block py-1">PEB Warehousing</a></li>
                            <li><a href="gi-sheet-manufacturing.php" class="block py-1">GI Sheet Manufacturing</a></li>
                            <li><a href="industrial-shed.php" class="block py-1">EOT Crane Manufacturing</a></li>
                        </ul>
                    </li>
                    <li class="cursor-pointer border-b border-white/20 pb-2">
                        <a href="our-project.php">Our Project</a>
                    </li>
                    <li class="cursor-pointer border-b border-white/20 pb-2">
                        <a href="career.php">Career</a>
                    </li>
                    <li class="cursor-pointer">
                        <a href="contact-us.php">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                // Mobile menu toggle
                const menuToggle = document.getElementById('mobile-menu-toggle');
                if (menuToggle) {
                    menuToggle.addEventListener('click', function() {
                        const mobileMenu = document.getElementById('mobile-menu');
                        if (mobileMenu) {
                            mobileMenu.classList.toggle('hidden');
                            mobileMenu.classList.toggle('flex');
                        }
                    });
                }

                // Desktop dropdown functionality
                document.querySelectorAll('.dropdown').forEach(function(dropdown) {
                    dropdown.addEventListener('mouseenter', function() {
                        const menu = this.querySelector('.dropdown-menu');
                        if (menu) menu.classList.remove('hidden');
                    });
                    dropdown.addEventListener('mouseleave', function() {
                        const menu = this.querySelector('.dropdown-menu');
                        if (menu) menu.classList.add('hidden');
                    });
                });
            });

            // Mobile dropdown toggle (global function for onclick)
            function toggleMobileDropdown(id) {
                const dropdown = document.getElementById(id);
                if (dropdown) dropdown.classList.toggle('hidden');
            }
        </script>
