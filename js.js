document.querySelector('select').addEventListener("change", function() {
    const selectedColor = this.value;
    document.body.style.backgroundColor = selectedColor;

    // Label renklerini ayarla
    const labels = document.querySelectorAll('.labell');
    labels.forEach(label => {
        label.style.color = (selectedColor === "black") ? "white" : "black"; // Siyah arka planda beyaz yazı
    });

    // Section elemanlarının gölgesini ayarla
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (selectedColor === "black") {
            section.style.boxShadow = "0 0 10px white"; // Beyaz gölge
        } else {
            section.style.boxShadow = "none"; // Gölgeyi kaldır
        }
    });
});
