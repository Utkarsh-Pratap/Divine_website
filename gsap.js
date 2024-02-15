const imageContainer = document.getElementById('imageContainer');
    const textHeading = document.getElementById('textHeading');
    const textContent = document.getElementById('textContent');

    const imageContent = [
      { heading: 'YouTube', content: 'Mukul' },
      { heading: 'Ironman', content: 'Utkarsh' },
      { heading: 'Name', content: 'Content' }
    ];

    imageContainer.addEventListener('scroll', function() {
      const currentImageIndex = Math.floor(this.scrollTop / this.clientHeight);
      textHeading.innerHTML = `<p>${imageContent[currentImageIndex].heading}</p>`;
      textContent.innerHTML = `<p>${imageContent[currentImageIndex].content}</p>`;
    });




    