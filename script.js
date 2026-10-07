function openLetter() {

    document
        .getElementById("letter")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function showLove() {

    document
        .getElementById("secret")
        .innerHTML =
        "I knew it, meri jaanii 🥹❤️ Now come here and give your Eeshu a hug! 🫂❤️";

    createHeartBurst();

}


function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    const emojis = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "🥹"
    ];

    heart.innerHTML =
        emojis[
            Math.floor(
                Math.random() * emojis.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        15 + Math.random() * 25 + "px";


    heart.style.animationDuration =
        5 + Math.random() * 5 + "s";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


function createHeartBurst() {

    for (let i = 0; i < 25; i++) {

        setTimeout(
            createHeart,
            i * 100
        );

    }

}


/* Random floating hearts */

setInterval(
    createHeart,
    1300
);