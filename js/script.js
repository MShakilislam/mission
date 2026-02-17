
const app = document.getElementById("app");
const links = document.querySelectorAll(".navbar a");

const pages = {
  home: `
    <section class="  py-10">
            <div class="max-w-[1200px] mx-auto text-center">
                <h3 class="font-bold text-4xl text-black">Why Choose Us</h3>
                <p class="text-sm pt-1 text-gray-600">We provide the best shopping experience with top-notch services
                </p>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-9 mt-12 mx-2">
                    <div class="bg-gray-100 px-4 py-3 rounded-md text-start shadow p-4 relative">
                        <h3 class="font-semibold text-xl py-6">Fast Delivery</h3>
                        <p class="text-sm text-gray-600 pt-1">Get your orders delivered to your doorstep quickly and
                            efficiently.</p>
                        <div class="box p-2 bg-gray-300 absolute border-2 border-white rounded-md -top-5">
                            <p class="text-2xl text-blue-500"><i class="fa-regular fa-truck"></i></p>
                        </div>
                    </div>

                    <div class="bg-gray-100 px-4 py-3 rounded-md text-start shadow p-4 relative">
                        <h3 class="font-semibold text-xl py-6">Fast Delivery</h3>
                        <p class="text-sm text-gray-600 pt-1">Get your orders delivered to your doorstep quickly and
                            efficiently.</p>
                        <div class="box p-2 bg-gray-300 absolute border-2 border-white rounded-md -top-5">
                            <p class="text-2xl text-blue-500"><i class="fa-solid fa-headphones"></i></p>
                        </div>
                    </div>

                    <div class="bg-gray-100 px-4 py-3 rounded-md text-start shadow p-4 relative">
                        <h3 class="font-semibold text-xl py-6">Fast Delivery</h3>
                        <p class="text-sm text-gray-600 pt-1">Get your orders delivered to your doorstep quickly and
                            efficiently.</p>
                        <div class="box p-2 bg-gray-300 absolute border-2 border-white rounded-md -top-5">
                            <p class="text-2xl text-blue-500"><i class="fa-regular fa-circle-check"></i></p>
                        </div>
                    </div>

                    <div class="bg-gray-100 px-4 py-3 rounded-md text-start shadow p-4 relative">
                        <h3 class="font-semibold text-xl py-6">Fast Delivery</h3>
                        <p class="text-sm text-gray-600 pt-1">Get your orders delivered to your doorstep quickly and
                            efficiently.</p>
                        <div class="box p-2 bg-gray-300 absolute border-2 border-white rounded-md -top-5">
                            <p class="text-2xl text-blue-500"><i class="fa-solid fa-rotate-right"></i></p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
  `,

    about: `
  <div class="hero flex justify-between items-center">
            <h1>Best Collection For You</h1>
            <p>Discover the latest trends in fashion.</p>
            <button class="btn">Shop Now</button>
        </div>`
}

function loadPage(pageName) {

  // Page design show
  app.innerHTML = pages[pageName];

  // Home hole API call
  if (pageName === "home") {
    loadProducts();
  }

}
function loadProducts() {

}


links.forEach(link => {

  link.addEventListener("click", function (e) {

    e.preventDefault();

    const page = this.getAttribute("data-page");

    loadPage(page);

  });

});

loadPage("home");















console.log("ami abul kaswm")