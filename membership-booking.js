// ========================================
// GET SELECTED MEMBERSHIP PLAN
// ========================================

const savedMembership =
    localStorage.getItem("selectedMembership");


// Agar user directly booking page open kare
if (!savedMembership) {

    alert("Please select a membership plan first.");

    window.location.href = "subscription.html";

}


// Convert saved data into object

const membership =
    JSON.parse(savedMembership);


// ========================================
// SHOW SELECTED PLAN
// ========================================

document.getElementById("membershipDuration").textContent =
    membership.duration;


document.getElementById("membershipPackage").textContent =
    membership.packageName;


document.getElementById("membershipWashes").textContent =
    membership.washes;


document.getElementById("membershipPrice").textContent =
    membership.price;


// ========================================
// VEHICLE DATA
// ========================================

const vehicleData = {

    Hatchback: [

        "Maruti Swift",
        "Maruti Baleno",
        "Maruti WagonR",
        "Hyundai Grand i10",
        "Hyundai i20",
        "Tata Tiago",
        "Tata Altroz",
        "Other"

    ],


    Sedan: [

        "Maruti Dzire",
        "Honda City",
        "Hyundai Verna",
        "Hyundai Aura",
        "Tata Tigor",
        "Skoda Slavia",
        "Honda Amaze",
        "Other"

    ],


    SUV: [

        "Hyundai Creta",
        "Kia Seltos",
        "Tata Nexon",
        "Tata Harrier",
        "Mahindra XUV700",
        "Toyota Fortuner",
        "Mahindra Scorpio",
        "Other"

    ]

};


// ========================================
// GET ELEMENTS
// ========================================

const vehicleCategory =
    document.getElementById("vehicleCategory");


const vehicleName =
    document.getElementById("vehicleName");


const otherVehicleGroup =
    document.getElementById("otherVehicleGroup");


const otherVehicleName =
    document.getElementById("otherVehicleName");


// ========================================
// CATEGORY CHANGE
// ========================================

vehicleCategory.addEventListener(
    "change",
    function () {

        const category =
            vehicleCategory.value;


        // Reset vehicle name

        vehicleName.innerHTML =
            '<option value="">Select Vehicle Name</option>';


        // Hide Other input

        otherVehicleGroup.style.display =
            "none";


        otherVehicleName.disabled =
            true;


        otherVehicleName.value =
            "";


        // No category selected

        if (!category) {

            vehicleName.disabled =
                true;

            return;

        }


        // Add vehicle names

        vehicleData[category].forEach(
            function (car) {

                const option =
                    document.createElement("option");


                option.value =
                    car;


                option.textContent =
                    car;


                vehicleName.appendChild(
                    option
                );

            }
        );


        // Enable vehicle dropdown

        vehicleName.disabled =
            false;

    }
);


// ========================================
// VEHICLE NAME CHANGE
// ========================================

vehicleName.addEventListener(
    "change",
    function () {

        if (vehicleName.value === "Other") {

            // Show Other field

            otherVehicleGroup.style.display =
                "block";


            otherVehicleName.disabled =
                false;


            otherVehicleName.required =
                true;

        }

        else {

            // Hide Other field

            otherVehicleGroup.style.display =
                "none";


            otherVehicleName.disabled =
                true;


            otherVehicleName.required =
                false;


            otherVehicleName.value =
                "";

        }

    }
);


// ========================================
// FORM SUBMIT
// ========================================

const membershipForm =
    document.getElementById("membershipForm");


membershipForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        // Vehicle category

        const category =
            vehicleCategory.value;


        // Vehicle name

        let carName =
            vehicleName.value;


        // If Other selected

        if (carName === "Other") {

            carName =
                otherVehicleName.value.trim();

        }


        // Vehicle number

        const vehicleNumber =
            document.getElementById(
                "vehicleNumber"
            ).value.trim();


        // Date

        const bookingDate =
            document.getElementById(
                "bookingDate"
            ).value;


        // Time

        const bookingTime =
            document.getElementById(
                "bookingTime"
            ).value;


        // Address

        const address =
            document.getElementById(
                "address"
            ).value.trim();


        // Instruction

        const instruction =
            document.getElementById(
                "instruction"
            ).value.trim();


        // Payment

        const payment =
            document.getElementById(
                "payment"
            ).value;


        // ====================================
        // WHATSAPP MESSAGE
        // ====================================

        const message =

`*New Membership Booking* 🚗

*Membership Details*
Plan: ${membership.duration}
Service: ${membership.packageName}
Number of Washes: ${membership.washes}
Price: ${membership.price}

*Vehicle Details*
Category: ${category}
Vehicle: ${carName}
Vehicle Number: ${vehicleNumber}

*Appointment Details*
Date: ${bookingDate}
Time: ${bookingTime}

*Payment Method*
${payment}

*Service Address*
${address}

*Additional Query*
${instruction || "None"}`;


        // ====================================
        // YOUR WHATSAPP NUMBER
        // ====================================

        const phoneNumber =
            "919341676414";


        // ====================================
        // WHATSAPP URL
        // ====================================

        const whatsappURL =
            "https://wa.me/" +
            phoneNumber +
            "?text=" +
            encodeURIComponent(message);


        // Open WhatsApp

        window.open(
            whatsappURL,
            "_blank"
        );


        // Optional:
        // Remove selected membership after booking

        // localStorage.removeItem("selectedMembership");

    }
);