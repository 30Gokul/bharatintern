document.addEventListener('DOMContentLoaded', function () {
  const addTextButton = document.getElementById('addText');
  const addImageButton = document.getElementById('addImage');
  const addVideoButton = document.getElementById('addVideo');
  const contentContainer = document.getElementById('content');
  const saveButton = document.getElementById('saveButton');
  const boxes = document.querySelectorAll(".box"),
  image = document.querySelector(".image");

  boxes.forEach((box) => {
  
    box.addEventListener("dragover", (e) => {
      e.preventDefault(); 
      box.classList.add("hovered");
    });
    
    box.addEventListener("dragleave", () => {
      box.classList.remove("hovered");
    });
    
    box.addEventListener("drop", () => {
      box.appendChild(image);
      box.classList.remove("hovered");
    });
  });


  addTextButton.addEventListener('click', function () {
      const textElement = document.createElement('p');
      textElement.innerText = 'Your text goes here.';
      contentContainer.appendChild(textElement);
  });

  addImageButton.addEventListener('click', function () {
      const imageElement = document.createElement('img');
      imageElement.src = 'placeholder-image.jpg'; 
      imageElement.alt = 'Image';
      contentContainer.appendChild(imageElement);
  });

  addVideoButton.addEventListener('click', function () {
      const videoElement = document.createElement('iframe');
      videoElement.src = 'https://www.youtube.com/embed/VIDEO_ID'; 
      videoElement.width = '560';
      videoElement.height = '315';
      videoElement.frameborder = '0';
      videoElement.allowfullscreen = 'true';
      contentContainer.appendChild(videoElement);
  });

  saveButton.addEventListener('click', function () {
      const contentHTML = contentContainer.innerHTML;
      
      console.log('Content saved:', contentHTML);
      
  });
});
