document.addEventListener("DOMContentLoaded", function() {
    var imageContainers = document.querySelectorAll(".image-container");

    imageContainers.forEach(function(container) {
        var img = container.querySelector("img");
        var description = img.getAttribute("data-description");
        var history = img.getAttribute("data-history");
        var descriptionElement = document.createElement("div");
        descriptionElement.classList.add("image-description");
        descriptionElement.textContent = description + "\n\n" + "History: " + history;
        container.appendChild(descriptionElement);
    });

    function showImageDescription(img) {
        var modal = document.getElementById("image-modal");
        var modalImg = document.getElementById("modal-image");
        var description = document.getElementById("image-description");
    
        modal.style.display = "flex";
        modalImg.src = img.src;
        description.textContent = img.getAttribute("data-description") + "\n\n" + "History: " + img.getAttribute("data-history");
        description.style.color = "#fff";
    }
    
    function closeImageModal() {
        var modal = document.getElementById("image-modal");
        modal.style.display = "none";
    }

    window.showImageDescription = showImageDescription;
    window.closeImageModal = closeImageModal;
})