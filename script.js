document.addEventListener("DOMContentLoaded", function() {
    // This function runs after the DOM has fully loaded
  
    // Get the output-container element
    var outputContainer = document.getElementById("output-container");
  
    // Create a new paragraph element
    var paragraph = document.createElement("p");
  
    // Set the text content of the paragraph
    paragraph.textContent = "Hello, this content is generated using JavaScript.";
  
    // Append the paragraph to the output-container
    outputContainer.appendChild(paragraph);
  });
  