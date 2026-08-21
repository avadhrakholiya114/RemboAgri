// ============================================================
// EXISTING JAVASCRIPT - DO NOT MODIFY
// ============================================================


// Testimonial Section
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    // centeredSlides: true,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 640px
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 480px
        650: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        920: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});


const scrollBtn = document.querySelector('#scroll-to-top');
const whatAppBtn = document.querySelector('#whatsapp-float');


window.addEventListener('scroll', () => {

    if (window.pageYOffset > 300) {

        scrollBtn.classList.add("btn-show");
        whatAppBtn.classList.add("btn-upward");

    } else {

        scrollBtn.classList.remove("btn-show");
        whatAppBtn.classList.remove("btn-upward");

    }

});


scrollBtn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");


// Function to filter cards based on filter buttons
const filterCards = (e) => {

    document.querySelector("#filter-buttons .active").classList.remove("active");

    e.target.classList.add("active");

    filterableCards.forEach(card => {

        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked

        if (
            card.dataset.name === e.target.dataset.filter ||
            e.target.dataset.filter === "all"
        ) {

            return card.classList.replace("hide", "show");

        }

        card.classList.add("hide");

    });

}


filterButtons.forEach(button =>
    button.addEventListener("click", filterCards)
);


// Global Trade Network
// The network itself is SVG-based, so its movement remains smooth and lightweight
// across desktop, tablet, and mobile without changing any existing website behavior.

document.addEventListener("DOMContentLoaded", () => {

    const network = document.querySelector(".trade-network-stage");

    if (!network) {
        return;
    }

    network.classList.add("network-ready");

});


// ============================================================
// NEW PRODUCT SYSTEM
// ============================================================


// Product data is maintained in one place.
// Add a new product here in the future.

const remboProducts = [

    {
        id: "chilli-powder",

        name: "Chilli Powder",

        shortDescription:
            "Premium chilli powder prepared for consistent colour, aroma and flavour in food applications.",

        overview:
            "Chilli Powder is a versatile spice ingredient suitable for a wide range of culinary and food-processing applications. Product specifications can be updated according to the final export requirement.",

        image:
            "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=85",

        details: {
            origin: "India",
            form: "Powder",
            quality: "Export-quality specification",
            packaging: "Available as per buyer requirement",
            applications: "Food preparation, seasoning and food processing",
            availability: "Subject to order and export requirements"
        }
    },


    {
        id: "coriander-powder",

        name: "Coriander Powder",

        shortDescription:
            "Aromatic coriander powder suitable for seasoning, food preparation and commercial food applications.",

        overview:
            "Coriander Powder is prepared from coriander and is widely used as a flavouring and seasoning ingredient. Final product specifications and packaging can be customized based on buyer requirements.",

        image:
            "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=85",

        details: {
            origin: "India",
            form: "Powder",
            quality: "Export-quality specification",
            packaging: "Available as per buyer requirement",
            applications: "Seasoning, culinary preparation and food processing",
            availability: "Subject to order and export requirements"
        }
    },


    {
        id: "coriander-seeds",

        name: "Coriander Seeds",

        shortDescription:
            "Selected coriander seeds with natural aroma and flavour for culinary and food-processing applications.",

        overview:
            "Coriander Seeds are a widely used whole spice with a characteristic aroma and flavour. Product grade, cleaning specifications and packaging can be finalized according to the buyer's requirements.",

        image:
            "https://images.unsplash.com/photo-1726750597665-8c6d0f65f6f8?auto=format&fit=crop&w=1000&q=85",

        details: {
            origin: "India",
            form: "Whole Seeds",
            quality: "Export-quality specification",
            packaging: "Available as per buyer requirement",
            applications: "Cooking, seasoning and spice processing",
            availability: "Subject to order and export requirements"
        }
    },


    {
        id: "ajwain",

        name: "Ajwain",

        shortDescription:
            "Aromatic ajwain seeds selected for culinary, seasoning and traditional food applications.",

        overview:
            "Ajwain is an aromatic spice commonly used in Indian cuisine and food preparation. Product specifications, grade and packaging can be adapted according to the intended export market.",

        image:
            "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=1000&q=85",

        details: {
            origin: "India",
            form: "Whole Seeds",
            quality: "Export-quality specification",
            packaging: "Available as per buyer requirement",
            applications: "Culinary preparation, seasoning and food processing",
            availability: "Subject to order and export requirements"
        }
    },


    {
        id: "cumin-jeera",

        name: "Cumin / Jeera",

        shortDescription:
            "Carefully selected cumin seeds known for their distinctive aroma and flavour.",

        overview:
            "Cumin, commonly known as Jeera, is an important spice used across global cuisines. Product grade, cleaning, packaging and other commercial specifications can be finalized according to buyer requirements.",

        image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",

        details: {
            origin: "India",
            form: "Whole Seeds",
            quality: "Export-quality specification",
            packaging: "Available as per buyer requirement",
            applications: "Cooking, seasoning and spice processing",
            availability: "Subject to order and export requirements"
        }
    }

];


// ============================================================
// Product Utility Functions
// ============================================================


function getProductById(productId) {

    return remboProducts.find(product =>
        product.id === productId
    );

}


function escapeHtml(value) {

    const div = document.createElement("div");

    div.textContent = value ?? "";

    return div.innerHTML;

}


// ============================================================
// Product Card Rendering
// ============================================================


function renderProductCards() {

    const productList = document.querySelector("#product-list");

    if (!productList) {
        return;
    }


    productList.innerHTML = remboProducts.map(product => {

        return `
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3 rembo-product-column">

                <article class="rembo-product-card">

                    <a
                        class="rembo-product-image-link"
                        href="./product.html?product=${encodeURIComponent(product.id)}"
                        aria-label="View details for ${escapeHtml(product.name)}"
                    >

                        <div class="rembo-product-image-wrap">

                            <img
                                src="${escapeHtml(product.image)}"
                                alt="${escapeHtml(product.name)}"
                                class="rembo-product-image"
                                loading="lazy"
                            >

                            <div class="rembo-product-image-overlay">

                                <span>
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                </span>

                            </div>

                        </div>

                    </a>


                    <div class="rembo-product-content">

                        <div class="rembo-product-number">
                            PRODUCT ${String(remboProducts.indexOf(product) + 1).padStart(2, "0")}
                        </div>

                        <h5 class="rembo-product-title">
                            ${escapeHtml(product.name)}
                        </h5>

                        <p class="rembo-product-description">
                            ${escapeHtml(product.shortDescription)}
                        </p>


                        <a
                            href="./product.html?product=${encodeURIComponent(product.id)}"
                            class="rembo-product-details-btn"
                        >

                            <span>View Details</span>

                            <i class="fa-solid fa-arrow-right"></i>

                        </a>

                    </div>

                </article>

            </div>
        `;

    }).join("");

}


// ============================================================
// Product initialization
// ============================================================


document.addEventListener("DOMContentLoaded", () => {

    renderProductCards();

});