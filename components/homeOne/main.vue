<template>
  <section>
    <div
      class="bg-[#f8f9fa] flex flex-col lg:flex-row justify-evenly items-center relative py-12 px-4 sm:px-6 md:px-12"
    >
      <!-- Left Section (Text) -->
      <div
        class="text-center lg:text-left p-6 md:p-12 lg:p-24 max-w-full overflow-x-hidden laptop-text-nowrap"
      >
        <p
          class="font-bold text-[#d63384] text-2xl md:text-3xl whitespace-nowrap"
        >
          Över 300 rabatter tillgängliga nu!
        </p>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-bold pt-6 whitespace-nowrap"
        >
          Spara pengar
        </h2>
        <button
          class="bg-[#d63384] text-lg p-2 px-6 text-white rounded-lg font-semibold py-2 hover:text-[#d63384] hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-700 mt-8 whitespace-nowrap"
        >
          Upptäck Mer
        </button>
      </div>

      <!-- Right Section (Image and Background Shapes) -->
      <div
        class="relative mt-8 lg:mt-0 w-full flex justify-center lg:justify-end laptop-image-wrap"
      >
        <!-- Pink background shape -->
        <div
          class="absolute w-full md:w-[600px] lg:w-[850px] h-[250px] md:h-[350px] lg:h-[400px] bg-[#d63384] right-0 bottom-0 [border-radius:137%_15%_0%_8%/103%_80%_57%_45%] overflow-hidden laptop-shape"
        ></div>

        <!-- Image -->
        <img
          src="https://www.veckansr.se/assets/images/frontend/banner_three/67f3c134be30c1744027956.png"
          class="max-w-[90%] md:max-w-[70%] lg:max-w-[55%] relative pt-6 lg:ml-14 mt-8 lg:mt-0 laptop-img"
          alt="Promotional Image"
        />
      </div>
    </div>
  </section>

  <section class="bg-white py-10 px-4 sm:px-6 lg:px-24">
    <!-- Heading -->
    <h1 class="font-bold text-3xl sm:text-4xl text-left mb-10">
      Exklusiva rabatter
    </h1>

    <!-- Card Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <!-- Card 1 -->
      <div
        class="relative bg-white rounded-2xl border border-gray-200 flex flex-col items-center pt-12 pb-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      >
        <button
          class="absolute top-4 left-4 bg-pink-50 border-pink-300 p-1 rounded-full text-pink-500 hover:bg-pink-100"
        >
          <i class="fas fa-heart"></i>
        </button>
        <div
          class="absolute top-4 right-4 bg-yellow-100 text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1"
        >
          <i class="fas fa-gem"></i>
          Exklusiv
        </div>
        <img
          src="https://www.veckansr.se/assets/images/frontend/store/67f78c2e82d371744276526.png"
          alt="Card Image"
          class="w-[90px] h-[90px] object-contain"
        />
        <div
          class="w-[95%] bg-slate-50 rounded-[12px] mt-6 p-4 flex flex-col items-center"
        >
          <h3
            class="text-lg font-semibold text-gray-800 text-center break-words"
          >
            Upp till 20%
          </h3>
          <button
            class="bg-[#d63384] px-5 py-2 mt-6 text-white rounded-lg font-semibold hover:text-[#d63384] hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-700"
          >
            Upptäck Mer
          </button>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="relative bg-white rounded-2xl border border-gray-200 flex flex-col items-center pt-12 pb-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      >
        <button
          class="absolute top-4 left-4 bg-pink-50 border-pink-300 p-1 rounded-full text-pink-500 hover:bg-pink-100"
        >
          <i class="fas fa-heart"></i>
        </button>
        <div
          class="absolute top-4 right-4 bg-yellow-100 text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1"
        >
          <i class="fas fa-gem"></i>
          Exklusiv
        </div>
        <img
          src="https://www.veckansr.se/assets/images/frontend/store/67f78cdb5426f1744276699.png"
          alt="Card Image"
          class="w-[90px] h-[90px] object-contain"
        />
        <div
          class="w-[95%] bg-slate-50 rounded-[12px] mt-6 p-4 flex flex-col items-center"
        >
          <h3
            class="text-lg font-semibold text-gray-800 text-center break-words"
          >
            Upp till 25% på lek & aktivering
          </h3>
          <button
            class="bg-[#d63384] px-5 py-2 mt-6 text-white rounded-lg font-semibold hover:text-[#d63384] hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-700"
          >
            Upptäck Mer
          </button>
        </div>
      </div>

      <!-- Card 3 -->
      <div
        class="relative bg-white rounded-2xl border border-gray-200 flex flex-col items-center pt-12 pb-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      >
        <button
          class="absolute top-4 left-4 bg-pink-50 border-pink-300 p-1 rounded-full text-pink-500 hover:bg-pink-100"
        >
          <i class="fas fa-heart"></i>
        </button>
        <div
          class="absolute top-4 right-4 bg-yellow-100 text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1"
        >
          <i class="fas fa-gem"></i>
          Exklusiv
        </div>
        <img
          src="https://www.veckansr.se/assets/images/frontend/store/67f78cff480721744276735.png"
          alt="Card Image"
          class="w-[270px] h-[90px] object-contain"
        />
        <div
          class="w-[95%] bg-slate-50 rounded-[12px] mt-6 p-4 flex flex-col items-center"
        >
          <h3
            class="text-lg font-semibold text-gray-800 text-center break-words"
          >
            Upp till 45% på elcyklar
          </h3>
          <button
            class="bg-[#d63384] px-5 py-2 mt-6 text-white rounded-lg font-semibold hover:text-[#d63384] hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-700"
          >
            Upptäck Mer
          </button>
        </div>
      </div>

      <!-- Card 4 (wraps to second row on 1024px, stays inline at 1280px+) -->
      <div
        class="lg:col-span-3 xl:col-span-1 relative bg-white rounded-2xl border border-gray-200 flex flex-col items-center pt-12 pb-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      >
        <button
          class="absolute top-4 left-4 bg-pink-50 border-pink-300 p-1 rounded-full text-pink-500 hover:bg-pink-100"
        >
          <i class="fas fa-heart"></i>
        </button>
        <div
          class="absolute top-4 right-4 bg-yellow-100 text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1"
        >
          <i class="fas fa-gem"></i>
          Exklusiv
        </div>
        <img
          src="https://www.veckansr.se/assets/images/frontend/store/67f78d0c61d0d1744276748.png"
          alt="Card Image"
          class="w-[90px] h-[90px] object-contain"
        />
        <div
          class="w-[95%] bg-slate-50 rounded-[12px] mt-6 p-4 flex flex-col items-center"
        >
          <h3
            class="text-lg font-semibold text-gray-800 text-center break-words"
          >
            Upp Till 30% På Damkläder
          </h3>
          <button
            class="bg-[#d63384] px-5 py-2 mt-6 text-white rounded-lg font-semibold hover:text-[#d63384] hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-700"
          >
            Upptäck Mer
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white py-10 px-4 sm:px-6 lg:px-24">
    <!-- Heading -->
    <h1 class="font-bold text-3xl sm:text-4xl text-left mb-10">
      Populära rabatter
    </h1>

    <!-- Card Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <!-- Card 1 -->
      <div
        class="relative bg-white rounded-2xl border border-gray-200 flex flex-col items-center pt-12 pb-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      >
        <button
          class="absolute top-4 left-4 bg-pink-50 border-pink-300 p-1 rounded-full text-pink-500 hover:bg-pink-100"
        >
          <i class="fas fa-heart"></i>
        </button>
        <div
          class="absolute top-4 right-4 bg-yellow-100 text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1"
        >
          <i class="fas fa-gem"></i>
          Exklusiv
        </div>
        <img
          src="https://www.veckansr.se/assets/images/frontend/store/67f78c2e82d371744276526.png"
          alt="Card Image"
          class="w-[90px] h-[90px] object-contain"
        />
        <div
          class="w-[95%] bg-slate-50 rounded-[12px] mt-6 p-4 flex flex-col items-center"
        >
          <h3
            class="text-lg font-semibold text-gray-800 text-center break-words"
          >
            Upp till 20%
          </h3>
          <button
            class="bg-[#d63384] px-5 py-2 mt-6 text-white rounded-lg font-semibold hover:text-[#d63384] hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-700"
          >
            Upptäck Mer
          </button>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="relative bg-white rounded-2xl border border-gray-200 flex flex-col items-center pt-12 pb-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      >
        <button
          class="absolute top-4 left-4 bg-pink-50 border-pink-300 p-1 rounded-full text-pink-500 hover:bg-pink-100"
        >
          <i class="fas fa-heart"></i>
        </button>
        <div
          class="absolute top-4 right-4 bg-yellow-100 text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1"
        >
          <i class="fas fa-gem"></i>
          Exklusiv
        </div>
        <img
          src="https://www.veckansr.se/assets/images/frontend/store/67f78cdb5426f1744276699.png"
          alt="Card Image"
          class="w-[90px] h-[90px] object-contain"
        />
        <div
          class="w-[95%] bg-slate-50 rounded-[12px] mt-6 p-4 flex flex-col items-center"
        >
          <h3
            class="text-lg font-semibold text-gray-800 text-center break-words"
          >
            Upp till 25% på lek & aktivering
          </h3>
          <button
            class="bg-[#d63384] px-5 py-2 mt-6 text-white rounded-lg font-semibold hover:text-[#d63384] hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-700"
          >
            Upptäck Mer
          </button>
        </div>
      </div>

      <!-- Card 3 -->
      <div
        class="relative bg-white rounded-2xl border border-gray-200 flex flex-col items-center pt-12 pb-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      >
        <button
          class="absolute top-4 left-4 bg-pink-50 border-pink-300 p-1 rounded-full text-pink-500 hover:bg-pink-100"
        >
          <i class="fas fa-heart"></i>
        </button>
        <div
          class="absolute top-4 right-4 bg-yellow-100 text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1"
        >
          <i class="fas fa-gem"></i>
          Exklusiv
        </div>
        <img
          src="https://www.veckansr.se/assets/images/frontend/store/67f78cff480721744276735.png"
          alt="Card Image"
          class="w-[270px] h-[90px] object-contain"
        />
        <div
          class="w-[95%] bg-slate-50 rounded-[12px] mt-6 p-4 flex flex-col items-center"
        >
          <h3
            class="text-lg font-semibold text-gray-800 text-center break-words"
          >
            Upp till 45% på elcyklar
          </h3>
          <button
            class="bg-[#d63384] px-5 py-2 mt-6 text-white rounded-lg font-semibold hover:text-[#d63384] hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-700"
          >
            Upptäck Mer
          </button>
        </div>
      </div>

      <!-- Card 4 (wraps to second row on 1024px, stays inline at 1280px+) -->
      <div
        class="lg:col-span-3 xl:col-span-1 relative bg-white rounded-2xl border border-gray-200 flex flex-col items-center pt-12 pb-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      >
        <button
          class="absolute top-4 left-4 bg-pink-50 border-pink-300 p-1 rounded-full text-pink-500 hover:bg-pink-100"
        >
          <i class="fas fa-heart"></i>
        </button>
        <div
          class="absolute top-4 right-4 bg-yellow-100 text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1"
        >
          <i class="fas fa-gem"></i>
          Exklusiv
        </div>
        <img
          src="https://www.veckansr.se/assets/images/frontend/store/67f78d0c61d0d1744276748.png"
          alt="Card Image"
          class="w-[90px] h-[90px] object-contain"
        />
        <div
          class="w-[95%] bg-slate-50 rounded-[12px] mt-6 p-4 flex flex-col items-center"
        >
          <h3
            class="text-lg font-semibold text-gray-800 text-center break-words"
          >
            Upp Till 30% På Damkläder
          </h3>
          <button
            class="bg-[#d63384] px-5 py-2 mt-6 text-white rounded-lg font-semibold hover:text-[#d63384] hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-700"
          >
            Upptäck Mer
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-blue-100 pt-16 pb-22">
    <h1 class="font-semibold text-3xl text-gray-900 p-4 md:ml-12">
      Populära kategorier
    </h1>

    <div class="flex flex-wrap justify-center gap-6 px-6">
      <!-- Card 1 -->
      <div
        class="w-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg sm:w-[45%] lg:w-[22%] bg-white rounded-xl shadow p-4 flex flex-col gap-4 items-start"
      >
        <img
          src="https://www.veckansr.se/assets/images/frontend/category/67ab031875efe1739260696.png"
          alt="Hem & Ekonomi"
          class="w-14 h-14 rounded-lg object-cover bg-pink-100"
        />
        <div>
          <p
            class="text-xl font-bold text-gray-900 hover:text-[#d63384] cursor-pointer"
          >
            Hem & Ekonomi
          </p>
          <p class="text-md text-[#d63384] pt-6">0 rabatter</p>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="w-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg sm:w-[45%] lg:w-[22%] bg-white rounded-xl shadow p-4 flex flex-col gap-4 items-start"
      >
        <img
          src="https://www.veckansr.se/assets/images/frontend/category/67ab02ef362b51739260655.png"
          alt="Nöje"
          class="w-14 h-14 rounded-lg object-cover bg-pink-100"
        />
        <div>
          <p
            class="text-xl font-bold text-gray-900 hover:text-[#d63384] cursor-pointer"
          >
            Nöje
          </p>
          <p class="text-md text-[#d63384] pt-6">0 rabatter</p>
        </div>
      </div>

      <!-- Card 3 -->
      <div
        class="w-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg sm:w-[45%] lg:w-[22%] bg-white rounded-xl shadow p-4 flex flex-col gap-4 items-start"
      >
        <img
          src="https://www.veckansr.se/assets/images/frontend/category/67ab02bf01a781739260607.png"
          alt="Böcker"
          class="w-14 h-14 rounded-lg object-cover bg-pink-100"
        />
        <div>
          <p
            class="text-xl font-bold text-gray-900 hover:text-[#d63384] cursor-pointer"
          >
            Böcker
          </p>
          <p class="text-md text-[#d63384] pt-6">1 rabatter</p>
        </div>
      </div>

      <!-- Card 4 -->
      <div
        class="w-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg sm:w-[45%] lg:w-[22%] bg-white rounded-xl shadow p-4 flex flex-col gap-4 items-start"
      >
        <img
          src="https://www.veckansr.se/assets/images/frontend/category/67ab028eaf6c51739260558.png"
          alt="Husdjur"
          class="w-14 h-14 rounded-lg object-cover bg-pink-100"
        />
        <div>
          <p
            class="text-xl font-bold text-gray-900 hover:text-[#d63384] cursor-pointer"
          >
            Husdjur
          </p>
          <p class="text-md text-[#d63384] pt-6">1 rabatter</p>
        </div>
      </div>

      <!-- Card 5 -->
      <div
        class="w-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg sm:w-[45%] lg:w-[22%] bg-white rounded-xl shadow p-4 flex flex-col gap-4 items-start"
      >
        <img
          src="https://www.veckansr.se/assets/images/frontend/category/67ab02676ebb51739260519.png"
          alt="Hem & Ekonomi 2"
          class="w-14 h-14 rounded-lg object-cover bg-pink-100"
        />
        <div>
          <p
            class="text-xl font-bold text-gray-900 hover:text-[#d63384] cursor-pointer"
          >
            Hem & Ekonomi
          </p>
          <p class="text-md text-[#d63384] pt-6">0 rabatter</p>
        </div>
      </div>

      <!-- Card 6 -->
      <div
        class="w-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg sm:w-[45%] lg:w-[22%] bg-white rounded-xl shadow p-4 flex flex-col gap-4 items-start"
      >
        <img
          src="https://www.veckansr.se/assets/images/frontend/category/67ab0235530861739260469.png"
          alt="Nöje 2"
          class="w-14 h-14 rounded-lg object-cover bg-pink-100"
        />
        <div>
          <p
            class="text-xl font-bold text-gray-900 hover:text-[#d63384] cursor-pointer"
          >
            Nöje
          </p>
          <p class="text-md text-[#d63384] pt-6">0 rabatter</p>
        </div>
      </div>

      <!-- Card 7 -->
      <div
        class="w-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg sm:w-[45%] lg:w-[22%] bg-white rounded-xl shadow p-4 flex flex-col gap-4 items-start"
      >
        <img
          src="https://www.veckansr.se/assets/images/frontend/category/67ab020f384fe1739260431.png"
          alt="Böcker 2"
          class="w-14 h-14 rounded-lg object-cover bg-pink-100"
        />
        <div>
          <p
            class="text-xl font-bold text-gray-900 hover:text-[#d63384] cursor-pointer"
          >
            Böcker
          </p>
          <p class="text-md text-[#d63384] pt-6">1 rabatter</p>
        </div>
      </div>

      <!-- Card 8 -->
      <div
        class="w-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg sm:w-[45%] lg:w-[22%] bg-white rounded-xl shadow p-4 flex flex-col gap-4 items-start"
      >
        <img
          src="https://www.veckansr.se/assets/images/frontend/category/67ab019671c831739260310.png"
          alt="Husdjur 2"
          class="w-14 h-14 rounded-lg object-cover bg-pink-100"
        />
        <div>
          <p
            class="text-xl font-bold text-gray-900 hover:text-[#d63384] cursor-pointer"
          >
            Husdjur
          </p>
          <p class="text-md text-[#d63384] pt-6">1 rabatter</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-[#d63384] pb-4">
    <div
      class="flex flex-col px-6 py-16 sm:px-12 lg:px-24 items-start sm:items-center text-left sm:text-center"
    >
      <p class="font-bold text-4xl sm:text-5xl text-white leading-snug">
        Rabatter, rabatter, rabatter,<br class="hidden sm:block" />här hittar du
        dem.
      </p>
      <h2 class="font-bold text-lg sm:text-xl text-white pt-4 sm:pt-6 max-w-xl">
        Med flera hundra rabatter och butiker hittar du det du söker här!
      </h2>
      <button
        class="bg-white text-gray-900 text-lg px-6 py-2 rounded-lg font-bold hover:text-[#d63384] hover:bg-white transition duration-700 mt-6 sm:mt-8"
      >
        Hitta dina rabatter
      </button>
    </div>
  </section>

  <section
    class="flex flex-col md:flex-row justify-evenly items-center h-auto md:h-160 mt-10 pb-16"
  >
    <div class="w-full max-w-2xl bg-white p-6 space-y-4">
      <h2 class="font-bold text-3xl p-2">Frågor</h2>
      <!-- FAQ Item -->
      <div class="">
        <button
          onclick="toggleFAQ(this)"
          class="w-full border-transparent pl-3 border bg-pink-50 rounded-t-md flex justify-between items-center py-2 text-left text-lg font-medium text-gray-600"
        >
          Hur kan jag maximera mina besparingar genom att använda rabattsajter?
          <span
            class="transform transition-transform duration-300 text-pink-500 pr-2 text-2xl"
            >+</span
          >
        </button>
        <div
          class="faq-content border-transparent shadow-lg border rounded-b-md pl-2 hidden pb-4 text-gray-600"
        >
          För att maximera ditt sparande via rabatt webbplatser kan du använda
          följande strategier: Regelbunden användning: Gör det till en vana att
          kolla rabattsajter innan du handlar online. Detta säkerställer att du
          inte missar några erbjudanden. Jämför erbjudanden: Använd flera
          rabattsajter för att jämföra och hitta de bästa erbjudandena.
        </div>
      </div>

      <div class="">
        <button
          onclick="toggleFAQ(this)"
          class="w-full pl-3 border-transparent flex justify-between border bg-pink-50 rounded-t-md items-center py-2 text-left text-lg font-medium text-gray-600"
        >
          Kan jag använda kupongkoder från webbplatser?
          <span
            class="transform transition-transform duration-300 text-pink-500 pr-2 text-2xl"
            >+</span
          >
        </button>
        <div
          class="faq-content border-transparent shadow-lg border rounded-b-md pl-2 hidden pb-4 text-gray-600"
        >
          Ja, du kan använda kupongkoder från rabattsajter, men det är viktigt
          att följa några riktlinjer för att säkerställa att de fungerar korrekt
          och att du inte utsätter dig för risker: Kontrollera källan: Se till
          att kupongkoderna kommer från pålitliga sajter. Läs villkoren: Innan
          du använder en kupongkod, kontrollera att den gäller för din
          beställning.
        </div>
      </div>

      <div class="">
        <button
          onclick="toggleFAQ(this)"
          class="w-full pl-3 border-transparent flex justify-between border bg-pink-50 rounded-t-md items-center py-2 text-left text-lg font-medium text-gray-600"
        >
          Behöver jag registrera mig eller betala för att använda
          kupongwebbplatser?
          <span
            class="transform transition-transform duration-300 text-pink-500 pr-2 text-2xl"
            >+</span
          >
        </button>
        <div
          class="faq-content border-transparent shadow-lg pl-2 border rounded-b-md hidden pb-4 text-gray-600"
        >
          En rabattsajt är en onlineplattform som samlar och visar rabatter,
          erbjudanden och kampanjer från olika återförsäljare och varumärken.
          Användare besöker dessa sajter för att hitta och använda digitala
          eller utskrivbara rabatter för att spara pengar på sina inköp online
          eller i fysiska butiker.
        </div>
      </div>

      <div class="">
        <button
          onclick="toggleFAQ(this)"
          class="w-full pl-3 border-transparent flex justify-between border bg-pink-50 rounded-t-md items-center py-2 text-left text-lg font-medium text-gray-600"
        >
          Hur fungerar en rabattsajt?
          <span
            class="transform transition-transform duration-300 text-pink-500 pr-2 text-2xl"
            >+</span
          >
        </button>
        <div
          class="faq-content pl-2 border-transparent shadow-lg border rounded-b-md hidden pb-4 text-gray-600"
        >
          En rabattsajt fungerar i praktiken genom att den samlar och
          presenterar erbjudanden och rabatter från olika butiker och företag.
        </div>
      </div>

      <div class="">
        <button
          onclick="toggleFAQ(this)"
          class="w-full pl-3 border-transparent flex justify-between border bg-pink-50 rounded-t-md items-center py-2 text-left text-lg font-medium text-gray-600"
        >
          Vad är en rabatt sajt?
          <span
            class="transform transition-transform duration-300 text-pink-500 pr-2 text-2xl"
            >+</span
          >
        </button>
        <div
          class="faq-content pl-2 border-transparent shadow-lg border rounded-b-md hidden pb-4 text-gray-600"
        >
          En rabattsajt är en webbplats som samlar och presenterar erbjudanden
          och rabatter från olika butiker och företag. Dessa sajter hjälper
          kunderna att hitta och utnyttja olika typer av rea, kuponger och
          kampanjer för att spara pengar när de handlar online eller i fysiska
          butiker.
        </div>
      </div>
    </div>

    <div class="md:w-1/3 w-full pt-10 md:pt-30">
      <img
        src="https://www.veckansr.se/assets/images/frontend/faq/6547e5bb04a101699210683.jpg"
        alt="FAQ Illustration"
        class="rounded-lg shadow-lg w-full h-auto md:h-[400px] object-cover"
      />
    </div>
  </section>

  <section class="bg-blue-50 py-12">
    <h2 class="font-bold text-3xl px-6 md:px-12 lg:px-24 mb-8 lg:ml-26">
      Nyheter
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto"
    >
      <!-- Card 1 -->
      <div
        class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
      >
        <img
          class="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          src="https://www.veckansr.se/assets/images/frontend/blog/thumb_67e2bbde79c111742912478.png"
          alt="Cyber Security"
        />
        <div class="p-6">
          <div class="flex items-center text-sm text-gray-800 mb-2">
            <svg
              class="w-4 h-4 mr-1 text-pink-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v2H3V6a2 2 0 012-2h1V3a1 1 0 011-1zM3 9h14v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
            </svg>
            <span>Mar 2025, 02:55 PM</span>
          </div>
          <h3 class="text-lg font-semibold mb-4">
            Fysisk integritet: Skydda ditt hem och personlig i...
          </h3>
          <button
            class="px-6 py-3 bg-pink-700 text-white font-bold rounded-lg hover:bg-white hover:text-pink-800 hover:outline hover:outline-1 transition duration-300"
          >
            Läs Mer →
          </button>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
      >
        <img
          class="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          src="https://www.veckansr.se/assets/images/frontend/blog/thumb_67e2bf9e3388a1742913438.png"
          alt="Cyber Security"
        />
        <div class="p-6">
          <div class="flex items-center text-sm text-gray-800 mb-2">
            <svg
              class="w-4 h-4 mr-1 text-pink-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v2H3V6a2 2 0 012-2h1V3a1 1 0 011-1zM3 9h14v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
            </svg>
            <span>Mar 2025, 02:55 PM</span>
          </div>
          <h3 class="text-lg font-semibold mb-4">
            Digital säkerhet: Skydda dina data under semester...
          </h3>
          <button
            class="px-6 py-3 bg-pink-700 text-white font-bold rounded-lg hover:bg-white hover:text-pink-800 hover:outline hover:outline-1 transition duration-300"
          >
            Läs Mer →
          </button>
        </div>
      </div>

      <!-- Card 3 -->
      <div
        class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
      >
        <img
          class="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          src="https://www.veckansr.se/assets/images/frontend/blog/thumb_67e2bfccdb7511742913484.png"
          alt="Cyber Security"
        />
        <div class="p-6">
          <div class="flex items-center text-sm text-gray-800 mb-2">
            <svg
              class="w-4 h-4 mr-1 text-pink-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v2H3V6a2 2 0 012-2h1V3a1 1 0 011-1zM3 9h14v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
            </svg>
            <span>Mar 2025, 02:55 PM</span>
          </div>
          <h3 class="text-lg font-semibold mb-4">
            Hur du skyddar dig mot digitala bedrägerier
          </h3>
          <button
            class="px-6 py-3 bg-pink-700 text-white font-bold rounded-lg hover:bg-white hover:text-pink-800 hover:outline hover:outline-1 transition duration-300"
          >
            Läs Mer →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
