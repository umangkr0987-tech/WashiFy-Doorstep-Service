const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


//----------------------------------------------------------------------------------------------------------------------------------


const carData = {

    Honda: {

        cars: [
          "Brio - (Hatchback)",
          "Jazz - (Hatchback)",
          "Amaze - (Sedan)",
          "City - (Sedan)",
          "Civic - (Sedan)",
            "Accord - (Sedan)",
            "CR-V - (SUV)",
            "BR-V - (SUV)",
            "WR-V - (SUV)",
            "Elevate - (SUV)",
            "Mobilio - (MPV)",
            "CR-Z - (Coupe)"

        ],

       
    },


    Mahindra: {

        cars: [
           
  "Scorpio - (SUV)",
  "Scorpio Classic - (SUV)",
  "Scorpio-N - (SUV)",
  "Bolero - (SUV)",
  "Bolero Neo - (SUV)",
  "Bolero Neo Plus - (SUV)",
  "Bolero Camper - (Pickup)",
  "Bolero Pik-Up - (Pickup)",
  "Thar - (SUV)",
  "Thar ROXX - (SUV)",
  "Major - (SUV)",
  "Classic - (SUV)",
  "Marshal - (SUV)",
  "Armada - (SUV)",
  "Legend - (SUV)",
  "XUV500 - (SUV)",
  "XUV700 - (SUV)",
  "XUV300 - (SUV)",
  "XUV 3XO - (SUV)",
  "XUV400 - (SUV)",
  "BE 6 - (SUV)",
  "XEV 9e - (SUV)",
  "Xylo - (MPV)",
  "Marazzo - (MPV)",
  "Quanto - (SUV)",
  "TUV300 - (SUV)",
  "TUV300 Plus - (SUV)",
  "KUV100 - (SUV)",
  "KUV100 NXT - (SUV)",
  "Verito - (Sedan)",
  "Logan - (Sedan)",
  "e2o - (Hatchback)",
  "e2o Plus - (Hatchback)"

        ],

     

    },


    Kia: {

        cars: [
           "Picanto - (Hatchback)",
  "Sonet - (SUV)",
  "Syros - (SUV)",
  "Seltos - (SUV)",
  "Carens - (MPV)",
  "Carens Clavis - (MPV)",
  "Carens Clavis EV - (MPV)",
  "Carnival - (MPV)",
  "EV6 - (SUV)",
  "EV9 - (SUV)"
  
        ],

       

    },


    Hyundai: {

        cars: [
          
  "Santro - (Hatchback)",
  "Santro Xing - (Hatchback)",
  "Eon - (Hatchback)",
  "Grand i10 - (Hatchback)",
  "Grand i10 Nios - (Hatchback)",
  "i10 - (Hatchback)",
  "i20 - (Hatchback)",
  "i20 Active - (SUV)",
  "i20 N Line - (Hatchback)",
  "Getz - (Hatchback)",
  "Atos - (Hatchback)",
  "Accent - (Sedan)",
  "Verna - (Sedan)",
  "Fluidic Verna - (Sedan)",
  "Elantra - (Sedan)",
  "Sonata - (Sedan)",
  "Xcent - (Sedan)",
  "Aura - (Sedan)",
  "Exter - (SUV)",
  "Venue - (SUV)",
  "Venue N Line - (SUV)",
  "Creta - (SUV)",
  "Creta N Line - (SUV)",
  "Creta Electric - (SUV)",
  "Alcazar - (SUV)",
  "Tucson - (SUV)",
  "Santa Fe - (SUV)",
  "Terracan - (SUV)",
  "Kona - (SUV)",
  "Kona Electric - (SUV)",
  "Ioniq 5 - (SUV)"

        ],

        

    },

     MarutiSuzuki: {

        cars: [
          
  
  "Alto - (Hatchback)",
  "Alto 800 - (Hatchback)",
  "Alto K10 - (Hatchback)",
  "800 - (Hatchback)",
  "Zen - (Hatchback)",
  "Zen Estilo - (Hatchback)",
  "A-Star - (Hatchback)",
  "Celerio - (Hatchback)",
  "Celerio X - (Hatchback)",
  "Wagon R - (Hatchback)",
  "Wagon R Stingray - (Hatchback)",
  "Estilo - (Hatchback)",
  "Ritz - (Hatchback)",
  "Swift - (Hatchback)",
  "Swift Dzire - (Sedan)",
  "Dzire - (Sedan)",
  "Baleno - (Hatchback)",
  "Ignis - (Hatchback)",
  "Fronx - (SUV)",
  "Brezza - (SUV)",
  "Vitara Brezza - (SUV)",
  "Grand Vitara - (SUV)",
  "Jimny - (SUV)",
  "S-Cross - (SUV)",
  "Gypsy - (SUV)",
  "Ciaz - (Sedan)",
  "SX4 - (Sedan)",
  "Esteem - (Sedan)",
  "Omni - (Van)",
  "Eeco - (Van)",
  "Ertiga - (MPV)",
  "XL6 - (MPV)",
  "Invicto - (MPV)",
  "Victoris - (SUV)",
  "e Vitara - (SUV)"

        ],

    },


     Tata: {

        cars: [
          
  
  "Indica - (Hatchback)",
  "Indica V2 - (Hatchback)",
  "Indica Vista - (Hatchback)",
  "Indica eV2 - (Hatchback)",
  "Indigo - (Sedan)",
  "Indigo CS - (Sedan)",
  "Indigo Manza - (Sedan)",
  "Zest - (Sedan)",
  "Tiago - (Hatchback)",
  "Tiago NRG - (SUV)",
  "Tiago EV - (Hatchback)",
  "Tigor - (Sedan)",
  "Tigor EV - (Sedan)",
  "Bolt - (Hatchback)",
  "Altroz - (Hatchback)",
  "Altroz Racer - (Hatchback)",
  "Nano - (Hatchback)",
  "Punch - (SUV)",
  "Punch EV - (SUV)",
  "Nexon - (SUV)",
  "Nexon EV - (SUV)",
  "Nexon EV Max - (SUV)",
  "Curvv - (SUV)",
  "Curvv EV - (SUV)",
  "Sierra - (SUV)",
  "Harrier - (SUV)",
  "Harrier EV - (SUV)",
  "Safari - (SUV)",
  "Hexa - (SUV)",
  "Aria - (SUV)",
  "Sumo - (SUV)",
  "Sumo Grande - (SUV)",
  "Storme - (SUV)",
  "Winger - (Van)"

        ],

    },


     Toyota: {

        cars: [
          
 
  "Qualis - (MPV)",
  "Etios - (Sedan)",
  "Etios Liva - (Hatchback)",
  "Etios Cross - (SUV)",
  "Corolla - (Sedan)",
  "Corolla Altis - (Sedan)",
  "Camry - (Sedan)",
  "Yaris - (Sedan)",
  "Glanza - (Hatchback)",
  "Urban Cruiser - (SUV)",
  "Urban Cruiser Taisor - (SUV)",
  "Urban Cruiser Hyryder - (SUV)",
  "Fortuner - (SUV)",
  "Fortuner Legender - (SUV)",
  "Innova - (MPV)",
  "Innova Crysta - (MPV)",
  "Innova Hycross - (MPV)",
  "Rumion - (MPV)",
  "Vellfire - (MPV)",
  "Land Cruiser Prado - (SUV)",
  "Land Cruiser 300 - (SUV)",
  "Hilux - (Pickup)"

        ],

    },


     Volkswagen: {

        cars: [
          
   "Polo - (Hatchback)",
  "Polo GT - (Hatchback)",
  "Vento - (Sedan)",
  "Virtus - (Sedan)",
  "Jetta - (Sedan)",
  "Passat - (Sedan)",
  "Beetle - (Hatchback)",
  "Taigun - (SUV)",
  "Tiguan - (SUV)",
  "T-Roc - (SUV)",
  "Tiguan AllSpace - (SUV)",
  "Golf GTI - (Hatchback)"
        ],

    },


     Ford: {

        cars: [
          
 "Ikon - (Sedan)",
  "Fiesta - (Sedan)",
  "Fiesta Classic - (Sedan)",
  "Classic - (Sedan)",
  "Aspire - (Sedan)",
  "Figo Aspire - (Sedan)",
  "Figo - (Hatchback)",
  "Fusion - (Sedan)",
  "Mondeo - (Sedan)",
  "EcoSport - (SUV)",
  "Endeavour - (SUV)",
  "Freestyle - (SUV)"
        ],

    },


     Skoda: {

        cars: [
          
  "Fabia - (Hatchback)",
  "Rapid - (Sedan)",
  "Laura - (Sedan)",
  "Octavia - (Sedan)",
  "Superb - (Sedan)",
  "Slavia - (Sedan)",
  "Yeti - (SUV)",
  "Kushaq - (SUV)",
  "Kylaq - (SUV)",
  "Kodiaq - (SUV)"
        ],

    },




     MG: {

        cars: [
          
  "Comet EV - (Hatchback)",
  "ZS - (SUV)",
  "ZS EV - (SUV)",
  "Astor - (SUV)",
  "Hector - (SUV)",
  "Hector Plus - (SUV)",
  "Gloster - (SUV)",
  "Windsor EV - (SUV)",
  "Majestor - (SUV)",
  "M9 - (MPV)",
  "Cyberster - (Sports Car)"
        ],

    },


     Renault: {

        cars: [
          
  "Kwid - (Hatchback)",
  "Pulse - (Hatchback)",
  "Scala - (Sedan)",
  "Fluence - (Sedan)",
  "Koleos - (SUV)",
  "Duster - (SUV)",
  "Captur - (SUV)",
  "Kiger - (SUV)",
  "Triber - (MPV)",
  "Lodgy - (MPV)"
        ],

    },


     BMW: {

        cars: [
          

  "1 Series - (Hatchback)",
  "2 Series Gran Coupe - (Sedan)",
  "3 Series - (Sedan)",
  "3 Series Gran Limousine - (Sedan)",
  "5 Series - (Sedan)",
  "6 Series Gran Turismo - (Sedan)",
  "7 Series - (Sedan)",
  "8 Series Gran Coupe - (Sedan)",
  "i4 - (Sedan)",
  "i5 - (Sedan)",
  "i7 - (Sedan)",
  "X1 - (SUV)",
  "X3 - (SUV)",
  "X4 - (SUV)",
  "X5 - (SUV)",
  "X6 - (SUV)",
  "X7 - (SUV)",
  "iX - (SUV)",
  "iX1 - (SUV)",
  "XM - (SUV)",
  "Z4 - (Sports Car)",
  "M2 - (Sports Car)",
  "M3 - (Sedan)",
  "M4 - (Sports Car)",
  "M5 - (Sedan)",
  "M8 - (Sports Car)"

        ],

    },


     Nissan: {

        cars: [
          
  "Micra - (Hatchback)",
  "Sunny - (Sedan)",
  "Teana - (Sedan)",
  "Terrano - (SUV)",
  "Kicks - (SUV)",
  "Magnite - (SUV)",
  "X-Trail - (SUV)"
        ],

    },


     MercedesBenz : {

        cars: [
          

  "A-Class - (Hatchback)",
  "A-Class Limousine - (Sedan)",
  "B-Class - (MPV)",
  "C-Class - (Sedan)",
  "E-Class - (Sedan)",
  "S-Class - (Sedan)",
  "CLA - (Sedan)",
  "CLS - (Sedan)",
  "EQS - (Sedan)",
  "GLA - (SUV)",
  "GLB - (SUV)",
  "GLC - (SUV)",
  "GLE - (SUV)",
  "GLS - (SUV)",
  "G-Class - (SUV)",
  "EQA - (SUV)",
  "EQB - (SUV)",
  "EQS SUV - (SUV)",
  "Maybach GLS - (SUV)",
  "Maybach EQS SUV - (SUV)",
  "V-Class - (MPV)",
  "AMG GT - (Sports Car)",
  "AMG SL - (Convertible)"

        ],

    },


     Jeep: {

        cars: [
          
  "Compass - (SUV)",
  "Meridian - (SUV)",
  "Wrangler - (SUV)",
  "Grand Cherokee - (SUV)",
  "Renegade - (SUV)"
        ],

    },


     Audi: {

        cars: [
          
 
  "A3 - (Sedan)",
  "A4 - (Sedan)",
  "A6 - (Sedan)",
  "A8 - (Sedan)",
  "A8 L - (Sedan)",
  "Q2 - (SUV)",
  "Q3 - (SUV)",
  "Q3 Sportback - (SUV)",
  "Q5 - (SUV)",
  "Q7 - (SUV)",
  "Q8 - (SUV)",
  "e-tron - (SUV)",
  "Q8 e-tron - (SUV)",
  "e-tron GT - (Sedan)",
  "RS e-tron GT - (Sedan)"

        ],

    },


     Chevrolet: {

        cars: [
          
 "Spark - (Hatchback)",
  "Beat - (Hatchback)",
  "Sail - (Sedan)",
  "Sail Hatchback - (Hatchback)",
  "Aveo - (Sedan)",
  "Aveo U-VA - (Hatchback)",
  "Optra - (Sedan)",
  "Optra Magnum - (Sedan)",
  "Cruze - (Sedan)",
  "Enjoy - (MPV)",
  "Tavera - (SUV)",
  "Captiva - (SUV)",
  "Trailblazer - (SUV)"
        ],

    },

    
     Datsun: {

        cars: [
          
 "GO - (Hatchback)",
  "GO+ - (MPV)",
  "Redi-GO - (Hatchback)"
        ],
    },

     Citroen: {

        cars: [
          
"C3 - (Hatchback)",
  "eC3 - (Hatchback)",
  "C3 Aircross - (SUV)",
  "C5 Aircross - (SUV)",
  "Basalt - (SUV)"
        ],
    },

     Fiat: {

        cars: [
          
 "Palio - (Hatchback)",
  "Palio Stile - (Hatchback)",
  "Punto - (Hatchback)",
  "Grande Punto - (Hatchback)",
  "Punto Evo - (Hatchback)",
  "Linea - (Sedan)",
  "Petra - (Sedan)",
  "Adventure - (SUV)",
  "Avventura - (SUV)",
  "Urban Cross - (SUV)",
  "500 - (Hatchback)",
  "Abarth 595 - (Hatchback)"
        ],
    },

     Porsche: {

        cars: [
          
  "Cayenne - (SUV)",
  "Cayenne Coupe - (SUV)",
  "Macan - (SUV)",
  "Macan Electric - (SUV)",
  "Taycan - (Sedan)",
  "Panamera - (Sedan)",
  "911 - (Sports Car)",
  "718 Cayman - (Sports Car)",
  "718 Boxster - (Convertible)"
        ],
    },

     Chevrolet: {

        cars: [
          
 "Spark - (Hatchback)",
  "Beat - (Hatchback)"
        ],
    },

     Lexus: {

        cars: [
          
  "ES - (Sedan)",
  "ES 300h - (Sedan)",
  "LS - (Sedan)",
  "NX - (SUV)",
  "RX - (SUV)",
  "LX - (SUV)",
  "UX - (SUV)",
  "LM - (MPV)",
  "LC 500h - (Sports Car)"
        ],
    },

     LandRover: {

        cars: [
          
  "Freelander - (SUV)",
  "Freelander 2 - (SUV)",
  "Range Rover Evoque - (SUV)",
  "Range Rover Velar - (SUV)",
  "Range Rover Sport - (SUV)",
  "Range Rover - (SUV)",
  "Discovery - (SUV)",
  "Discovery Sport - (SUV)",
  "Defender - (SUV)"
        ],
    },

     Volvo: {

        cars: [
          
  "S40 - (Sedan)",
  "S60 - (Sedan)",
  "S80 - (Sedan)",
  "S90 - (Sedan)",
  "V40 - (Hatchback)",
  "V40 Cross Country - (SUV)",
  "XC40 - (SUV)",
  "XC60 - (SUV)",
  "XC90 - (SUV)",
  "C40 Recharge - (SUV)",
  "EX30 - (SUV)",
  "EX40 - (SUV)",
  "EC40 - (SUV)",
  "EX90 - (SUV)"
        ],
    },

     BYD: {

        cars: [
          
 "e6 - (MPV)",
  "Atto 3 - (SUV)",
  "Seal - (Sedan)",
  "Sealion 7 - (SUV)",
  "eMAX 7 - (MPV)"
        ],
    },

     Bajaj: {

        cars: [
          
  "Qute - (Other)"
        ],
    },

     Force: {

        cars: [
          
 "Gurkha - (SUV)",
  "Gurkha 3 Door - (SUV)",
  "Gurkha 5 Door - (SUV)",
  "Trax Cruiser - (SUV)",
  "Trax Toofan - (SUV)",
  "Urbania - (Van)"
        ],
    },

     Isuzu: {

        cars: [
          
  "MU-7 - (SUV)",
  "MU-X - (SUV)",
  "V-Cross - (Pickup)",
  "Hi-Lander - (Pickup)",
  "D-Max - (Pickup)",
  "D-Max V-Cross - (Pickup)",
  "S-CAB - (Pickup)",
  "S-CAB Z - (Pickup)"
        ],
    },

     Jaguar: {

        cars: [
          
   "X-Type - (Sedan)",
  "XE - (Sedan)",
  "XF - (Sedan)",
  "XJ - (Sedan)",
  "F-Pace - (SUV)",
  "E-Pace - (SUV)",
  "I-Pace - (SUV)",
  "F-Type - (Sports Car)"
        ],
    },

    
    


    other: {

        cars: [
           
        ],

        prices: [
            "₹999 - Basic Wash",
            "₹1299 - Premium Wash",
            "₹1499 - Deep Cleaning"
        ]

    }

    

};


// Category select karne par
// Car names load honge

function updateCars() {

    const category = document.getElementById("carCategory").value;

    const carName = document.getElementById("carName");

  

    const otherCarBox =
        document.getElementById("otherCarBox");

    const otherCarName =
        document.getElementById("otherCarName");



    // Reset

    carName.innerHTML =
        '<option value="">Select Car Name</option>';

    
    // Reset Other Car

    otherCarBox.style.display = "none";

    otherCarName.value = "";

    otherCarName.disabled = true; 


    if (category === "") {

        carName.disabled = true;

        return;

    }


    // Car names add karna

    carData[category].cars.forEach(function(car) {

        const option = document.createElement("option");

        option.value = car;

        option.textContent = car;

        carName.appendChild(option);

    });

    // other option add krna

    const otherOption =
        document.createElement("option");

    otherOption.value = "other";

    otherOption.textContent = "Other";

    carName.appendChild(otherOption);


    
    carName.disabled = false;

}

    // Car Name select hone par

function checkOtherCar() {

    const carName =
        document.getElementById("carName").value;

    const category =
        document.getElementById("carCategory").value;

    const otherCarBox =
        document.getElementById("otherCarBox");

    const otherCarInput =
        document.getElementById("otherCarName");


    // Agar Other select kiya

    if (carName === "other") {

        // Other car input show

        otherCarBox.style.display = "block";

        // Input enable

        otherCarInput.disabled = false;

        otherCarInput.focus();

    }

    else {

        // Other input hide

        otherCarBox.style.display = "none";

        // Input disable

        otherCarInput.disabled = true;

        otherCarInput.value = "";
    }


   
}

function changeWashPrice() {

    const category = document.getElementById("washCategory").value;
    const price = document.getElementById("washAmount");

    price.innerHTML = "";

    if (category === "Hatchback" ){

        price.innerHTML = `
            <option value="">Select Price</option>
            <option value="300">₹300 - Basic Wash</option>
            <option value="650">₹650 - Premium Wash</option>
            <option value="1700">₹1700 - Complete Car Spa</option>
            <option value="550">₹550 - Interior Wash</option>
        `;

    } 

    else if (category === "Sedan") {

        price.innerHTML = `
             <option value="350">₹350 - Basic Wash</option>
            <option value="700">₹700 - Premium Wash</option>
            <option value="1600">₹1600 - Complete Car Spa</option>
            <option value="650">₹650 - Interior Wash</option>
        `;

    }

    else if (category === "SUV") {

        price.innerHTML = `
             <option value="450">₹450 - Basic Wash</option>
            <option value="1000">₹1000 - Premium Wash</option>
            <option value="2000">₹2000 - Complete Car Spa</option>
            <option value="800">₹800 - Interior Wash</option>
        `;

    } else {

        price.innerHTML = `
            <option value="">Select Category First</option>
        `;

        price.disabled = true;
        return;
    }

    price.disabled = false;
}


// whatsApp button functionality

// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const name = document.querySelector("input[type=text]").value;
//     const email = document.querySelector("input[type=email]").value;
//     const message = document.querySelector("textarea").value;

//     const text = `🚗 *New Car Wash Booking*

// 👤 Name: ${name}
// 📧 Email: ${email}

// 💬 Message:
// ${message}`;

//     const phone = "919508477916"; // Apna WhatsApp Number

//     window.open(
//         `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
//         "_blank"
//     );

//     form.reset();
// });

// -------------------------

// const form = document.getElementById("contactForm");

// form.addEventListener("submit", async function(e){

//     e.preventDefault();

//     const name=document.getElementById("name").value;
//     const email=document.getElementById("email").value;
//     const message=document.getElementById("message").value;

//     const response=await fetch("http://localhost:5000/contact",{

//         method:"POST",

//         headers:{
//             "Content-Type":"application/json"
//         },

//         body:JSON.stringify({

//             name,
//             email,
//             message

//         })

//     });

//     const data=await response.json();

//     alert(data.message);

//     form.reset();

// });



// -------------------------------------------------------

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    
     // Car Category
    const carCategory = document.getElementById("carCategory").value;

    // Car Name
    const carName = document.getElementById("carName").value;

    // Other Car Name
    const otherCarName = document.getElementById("otherCarName").value;

    // Washing Price
    const washingPrice = document.getElementById("washAmount").value;

    // Vehicle Number
    const vehicleNo = document.getElementById("VechileNo").value;

    // Date
    const date = document.getElementById("date").value;

    //
     const time = document.getElementById("time").value;

    // Payment Method
    const payment = document.getElementById("payment").value;
    

    // Address
    const address = document.getElementById("address").value;

    // Appointment Instruction
    const instruction = document.getElementById("intruction").value;

const whatsappNumber = "919341676414"; // Apna Number
const text =
`🚗 *New Car Wash Booking*
👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
🚙 Car Category: ${carCategory}
🚘 Car Name: ${carName}
🚙 Other Car Name: ${otherCarName}
🧽 Washing Price: ${washingPrice}
🚗 Vehicle Number: ${vehicleNo}
📅 Date: ${date}
🕐 Time Slot: ${time}
📧 Payment Method: ${payment}
📍 Address: ${address}
💬 Special Instructions: ${instruction}`;
const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
 window.open(url, "_blank");
});