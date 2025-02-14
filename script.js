document.addEventListener("DOMContentLoaded", function () {
    // const noBtn = document.getElementById("noBtn");


    // // Event listener for "No" button click (sad GIF appears)
    // noBtn.addEventListener("click", function () {
    //     // Update the page with a sad GIF
    //     document.body.innerHTML = `
    //         <div class="container">
    //             <h1>huhubells</h1>
    //             <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExem5seG5vZnA4ODV4ZWxoaDk2eGR0NzNjd3FpMTlxYWxxYXM1YXRhMjBnd3p0YzVyaHE2YzNhZG9rY3NmYl90cWhjaDlqZTpwczg1cXM4NTVqa3FzaC9vTQ/giphy.gif" alt="Sad" class="sad-gif">
    //         </div>
    //     `;
    // });

    document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");

    // Check if the device is mobile
    function isMobile() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }

    // "No" button hover effect (desktop) / touch effect (mobile)
    function moveNoButton() {
        let padding = 50; // Safe padding from edges

        let maxX = window.innerWidth - noBtn.offsetWidth - padding;
        let maxY = window.innerHeight - noBtn.offsetHeight - padding;

        let minX = padding;
        let minY = padding;

        let currentX = noBtn.offsetLeft;
        let currentY = noBtn.offsetTop;

        let newX, newY;

        do {
            newX = Math.random() * (maxX - minX) + minX;
            newY = Math.random() * (maxY - minY) + minY;
        } while (Math.abs(newX - currentX) < 100 && Math.abs(newY - currentY) < 100);

        noBtn.style.transition = "all 0.3s ease-in-out";
        noBtn.style.position = "absolute";
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    }

    // Apply movement logic based on the device type
    if (isMobile()) {
        noBtn.addEventListener("touchstart", moveNoButton); // Mobile touch effect
    } else {
        noBtn.addEventListener("mouseover", moveNoButton); // Desktop hover effect
    }
});


    // Event listener for "No" button hover (runs away effect)
    noBtn.addEventListener("mouseover", function () {
        let padding = 50; // Safe padding from edges

        let maxX = window.innerWidth - noBtn.offsetWidth - padding;
        let maxY = window.innerHeight - noBtn.offsetHeight - padding;

        let minX = padding;
        let minY = padding;

        let currentX = noBtn.offsetLeft;
        let currentY = noBtn.offsetTop;

        let newX, newY;

        do {
            newX = Math.random() * (maxX - minX) + minX;
            newY = Math.random() * (maxY - minY) + minY;
        } while (Math.abs(newX - currentX) < 100 && Math.abs(newY - currentY) < 100); // Ensure enough distance from previous position

        noBtn.style.transition = "all 0.3s ease-in-out";
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });



    // Function to create heart animations
    function createHearts() {
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.classList.add("heart");

            // Random position on the screen
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `${Math.random() * 100}vh`;

            // Random animation duration for hearts
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

            document.body.appendChild(heart);

            // Remove heart after 10 seconds
            setTimeout(() => {
                heart.remove();
            }, 10000);
        }
    }

    // **Heart Trail Effect** (smooth movement on mouse move)
    document.addEventListener("mousemove", function (e) {
        const trailHeart = document.createElement("div");
        trailHeart.innerHTML = "❤️";
        trailHeart.classList.add("heart-trail");

        // Set the position to follow the mouse
        trailHeart.style.left = `${e.clientX}px`;
        trailHeart.style.top = `${e.clientY}px`;

        // Append the heart to the body
        document.body.appendChild(trailHeart);

        // Remove the heart after 0.8s (adjustable time)
        setTimeout(() => {
            trailHeart.remove();
        }, 800);
    });

    // Helper function for smoother animations (using requestAnimationFrame)
    function animateHearts() {
        requestAnimationFrame(animateHearts);
    }

    animateHearts(); // Start the smooth animation loop
});
