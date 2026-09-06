
$(document).ready(function () {


    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================

    $("#menuBtn").click(function () {

        $("#mainNav").toggleClass("show");

    });


    // Close mobile menu after clicking a link

    $("#mainNav a").click(function () {

        $("#mainNav").removeClass("show");

    });



    // ==========================================
    // PRODUCT FILTER
    // ==========================================

    $(".filter").click(function () {

        // Remove active class
        $(".filter").removeClass("active");

        // Add active class
        $(this).addClass("active");


        let category =
            $(this).data("category");


        let visible = 0;


        $(".product-card").each(function () {

            let itemCategory =
                $(this).data("category");


            if (
                category === "all" ||
                itemCategory === category
            ) {

                $(this).fadeIn(180);

                visible++;

            } else {

                $(this).hide();

            }

        });


        if (visible === 0) {

            $("#noResults").show();

        } else {

            $("#noResults").hide();

        }

    });



    // ==========================================
    // PRODUCT SEARCH
    // ==========================================

    function searchProducts() {

        let keyword =
            $("#searchInput")
            .val()
            .toLowerCase()
            .trim();


        let visible = 0;


        $(".product-card").each(function () {

            let product =
                $(this)
                .data("name")
                .toLowerCase();


            let category =
                $(this)
                .data("category")
                .toLowerCase();


            if (
                product.includes(keyword) ||
                category.includes(keyword)
            ) {

                $(this).fadeIn(180);

                visible++;

            } else {

                $(this).hide();

            }

        });


        if (visible === 0) {

            $("#noResults").show();

        } else {

            $("#noResults").hide();

        }


        // Scroll to products

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    }


    // Search button

    $("#searchBtn").click(function () {

        searchProducts();

    });


    // Search using Enter key

    $("#searchInput").keypress(function (event) {

        if (event.which === 13) {

            searchProducts();

        }

    });



    // ==========================================
    // FARMER REGISTRATION MODAL
    // ==========================================

    function openModal() {

        $("#sellModal").css(
            "display",
            "flex"
        );

    }


    function closeModal() {

        $("#sellModal").hide();

    }


    // Open modal

    $("#sellBtn").click(function () {

        openModal();

    });


    $("#heroSellBtn").click(function () {

        openModal();

    });


    $("#ctaBtn").click(function () {

        openModal();

    });


    // Close modal

    $("#closeModal").click(function () {

        closeModal();

    });


    // Close when clicking outside

    $("#sellModal").click(function (event) {

        if (event.target === this) {

            closeModal();

        }

    });



    // ==========================================
    // FARMER REGISTRATION FORM
    // ==========================================

    $("#farmerForm").submit(function (event) {

        event.preventDefault();


        let name =
            $("#farmerName").val();


        let product =
            $("#farmerProduct").val();


        $("#formMessage").text(

            "Thank you, " +
            name +
            "! Your " +
            product +
            " seller profile is ready for this prototype."

        );


        // Clear form

        this.reset();

    });



    // ==========================================
    // PRODUCT VIEW BUTTON
    // ==========================================

    $(".buy-btn").click(function () {

        let name =
            $(this)
            .closest(".product-card")
            .data("name");


        alert(

            "You selected " +
            name +
            ". Buyer ordering can be connected to a backend later."

        );

    });



    // ==========================================
    // MARKET SELECTOR
    // ==========================================

    $("#marketSelect").change(function () {

        let market =
            $(this).val();


        alert(

            "Showing sample market prices for " +
            market +
            "."

        );

    });



    // ==========================================
    // CHART.JS PRICE CHART
    // ==========================================

    const ctx =
        document.getElementById(
            "priceChart"
        );


    new Chart(ctx, {

        type: "line",


        data: {

            labels: [

                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"

            ],


            datasets: [

                {

                    label:
                        "Tomato price (Rs/kg)",


                    data: [

                        68,
                        70,
                        72,
                        75,
                        73,
                        78,
                        80

                    ],


                    borderWidth: 3,


                    tension: 0.35,


                    fill: true

                }

            ]

        },


        options: {

            responsive: true,


            maintainAspectRatio: false,


            plugins: {

                legend: {

                    display: true

                }

            },


            scales: {

                y: {

                    beginAtZero: false

                }

            }

        }

    });

});
