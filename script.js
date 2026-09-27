function searchAnime() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".anime-card");

    cards.forEach(card => {

        const name =
            card
            .getAttribute("data-name");

        if (!name) {
            card.style.display = "block";
            return;
        }

        if (name.toLowerCase().includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}