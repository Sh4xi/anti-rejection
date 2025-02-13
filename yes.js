document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.getElementById("bgMusic");

    // Ensure background music plays
    bgMusic.play().catch(error => console.error("Music play error:", error));

    // Function to create floating hearts
    function createHearts() {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.classList.add("heart");
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, 300);
    }

    // Start heart animation
    createHearts();

    // **Heart Trail Effect (Follows Cursor)**
    document.addEventListener("mousemove", function (e) {
        const trailHeart = document.createElement("div");
        trailHeart.innerHTML = "❤️";
        trailHeart.classList.add("heart-trail");

        // Set the position slightly behind the mouse for a smooth effect
        trailHeart.style.left = `${e.clientX - 10}px`;
        trailHeart.style.top = `${e.clientY - 10}px`;

        document.body.appendChild(trailHeart);

        // Remove the heart after a short delay for a smooth disappearing effect
        setTimeout(() => {
            trailHeart.style.opacity = "0";
            setTimeout(() => trailHeart.remove(), 300);
        }, 500);
    });
});
