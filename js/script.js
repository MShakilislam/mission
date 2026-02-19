
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
     

    <div class="cat-wrap text-center py-5">
      <button class="btn cat-btn" data-cat="all">All</button>
      <button class="btn cat-btn" data-cat="electronics">Electronics</button>
      <button class="btn cat-btn" data-cat="jewelery">Jewelery</button>
      <button class="btn cat-btn" data-cat="men's clothing">Men</button>
      <button class="btn cat-btn" data-cat="women's clothing">Women</button>
    </div>

    <div id="products" class="products grid grid-cols-1 gap-5 md:grid-cols-4 py-9"></div>
    `
}


function setActiveCategoryButton(category) {
  const buttons = document.querySelectorAll(".cat-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-cat") === category) {
      btn.classList.add("bg-blue-500", "text-white");
      btn.classList.remove("bg-gray-200");
    } else {
      btn.classList.remove("bg-blue-500", "text-white");
      btn.classList.add("bg-gray-200");
    }
  });
}

function loadProducts(category = "all") {
  let url = "https://fakestoreapi.com/products";
  if (category !== "all") {
    url = `https://fakestoreapi.com/products/category/${category}`;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {

      console.log(data)
      const productsDiv = document.getElementById("products");
      if (!productsDiv) return;

      let html = "";
      data.forEach(product => {
        html += `
          <div class="card bg-gray-200 shadow p-4 ">
          <img src="${product.image}" class="h-48 w-full object-cover mb-4">
            <div class="border-t-2 ">
              <p class="font-semibold rounded-lg">${product.category}</p>
            <h4 class=" font-semibold mb-2 ">${product.title}</h4>
            <p class="price text-blue-600 font-bold mt-auto text-xl">$${product.price}</p>
            <div class="flex justify-between items-center">
              <div><button class="px-4 py-1 border-1 border-gray-300">Detailse</button></div>
              <div class="px-4 py-1 border-1 bg-blue-500">Add</div>
            </div>
            </div>
          </div>
        `;
      });

      productsDiv.innerHTML = html;
      setActiveCategoryButton(category);
    });
}
document.addEventListener("click", function(e){
  if(e.target.classList.contains("cat-btn")){
    const category = e.target.getAttribute("data-cat");
    loadProducts(category);
  }
});

function loadPage(pageName) {
  app.innerHTML = pages[pageName];

  if(pageName === "home"){
    loadProducts("all"); 
  }
}

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const page = this.getAttribute("data-page");
    loadPage(page);
  });
});

loadPage("home");

console.log("ami ar kaj korte parbon a")
