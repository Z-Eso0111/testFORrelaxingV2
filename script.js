document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const generateButton = document.getElementById("generateButton");
    const downloadButton = document.getElementById("downloadButton");

    generateButton.addEventListener("click", generateRandomImage);
    downloadButton.addEventListener("click", downloadImage);

    function generateRandomImage() {
        canvas.innerHTML = ""; // Temizle

        const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "cyan"];
        const shapes = ["square", "circle", "triangle"];
        const fillTypes = ["filled", "unfilled"];

        const numShapes = Math.floor(Math.random() * 10) + 5; // 5-14 arası şekil
        const canvasWidth = canvas.offsetWidth;
        const canvasHeight = canvas.offsetHeight;

        for (let i = 0; i < numShapes; i++) {
            const shape = document.createElement("div");
            const size = Math.floor(Math.random() * 100) + 50; // 50-149 arası boyut
            const left = Math.floor(Math.random() * (canvasWidth - size));
            const top = Math.floor(Math.random() * (canvasHeight - size));
            const color = colors[Math.floor(Math.random() * colors.length)];
            const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
            const fillType = fillTypes[Math.floor(Math.random() * fillTypes.length)];

            shape.classList.add("shape", shapeType, fillType);
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.left = `${left}px`;
            shape.style.top = `${top}px`;
            shape.style.backgroundColor = color;

            canvas.appendChild(shape);
        }
    }

    function downloadImage() {
        const canvas = document.getElementById("canvas");
        const button = document.getElementById("downloadButton");

        html2canvas(canvas).then(canvas => {
            let link = document.createElement('a');
            link.download = 'random_image.png';
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    }
});
