function grey(){


function setImgSrcToEmpty() {
    // Get all img tags on the page
    const imgTags = document.querySelectorAll('img');

    // Loop through each img tag
    imgTags.forEach(img => {
        // Check if the current src is not already an empty string
        if (img.src !== '') {
            // Set the src attribute to an empty string
            img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/epBmAAAAABJRU5ErkJggg==';
        }
                if (img.alt !== '') {
            // Set the src attribute to an empty string
            img.alt = '';
        }
    });
}

// Run the function initially
setImgSrcToEmpty();

 function handleScroll() {
      console.log("User is scrolling!");
      setImgSrcToEmpty()
    }

    // Attach the function to the scroll event
    window.onscroll = handleScroll;}







function skip(){


function clickButtonsWithSkipClass() {
    // Find all elements with tag name 'button'
    let buttons = document.getElementsByTagName('button');

    // Iterate over each button element
    for (let button of buttons) {
        // Check if the class name includes the word 'skip'
        if (button.className.includes('skip')) {
            // Click on the button element
            button.click();
        }
    }
}

// Call the function every 2 seconds
setInterval(clickButtonsWithSkipClass, 500);
}
