// All Choose Plan buttons
const planButtons = document.querySelectorAll(".plan-btn");

planButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        // Current plan card
        const card = button.closest(".plan-card");

        // Service box
        const serviceBox = button.closest(".service-box");

        // Monthly or Quarterly
        const section = button.closest(".plans-section");

        let duration = "Monthly";

        if (section.classList.contains("quarterly")) {
            duration = "Quarterly";
        }

        // Package name
        const packageName = serviceBox
            .querySelector(".service-title h3")
            .textContent
            .replace("🚿", "")
            .replace("✨", "")
            .replace("💎", "")
            .replace("🧽", "")
            .trim();

        // Number of washes
        const washes = card
            .querySelector("h4")
            .textContent
            .trim();

        // Price
        const price = card
            .querySelector(".price")
            .textContent
            .trim();

        // Create membership object
        const membershipData = {
            duration: duration,
            packageName: packageName,
            washes: washes,
            price: price
        };

        // Save selected plan
        localStorage.setItem(
            "selectedMembership",
            JSON.stringify(membershipData)
        );

        // Open membership booking page
        window.location.href = "membership-booking.html";

    });

});