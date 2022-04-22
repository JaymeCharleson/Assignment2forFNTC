		//https://www.geeksforgeeks.org/how-to-change-image-dynamically-when-user-scrolls-using-javascript/
    
    window.onload = function() {


			var imageIndex = 0;


			var images =
				document.getElementsByClassName('test');


			var isMouseOverImage = false;


			var scrollImages =
				document.getElementById('scroll-image');


			var x, y;


			function noScroll() {
				window.scrollTo(x, y);
			}


			scrollImages.addEventListener(
					"mouseenter", function() {


				x = window.pageXOffset;
				y = window.pageYOffset;


				window.addEventListener("scroll", noScroll);


				isMouseOverImage = true;
			});

			scrollImages.addEventListener(
					"mouseleave", function() {


				isMouseOverImage = false;


				window.removeEventListener(
							"scroll", noScroll);
			});


			scrollImages.addEventListener(
						"wheel", function(e) {


				if (isMouseOverImage) {
					var nextImageIndex;


					if (e.deltaY > 0)
						nextImageIndex = (imageIndex + 1)
										% images.length;
					else
						nextImageIndex =
								(imageIndex - 1
								+ images.length)
								% images.length;


					images[imageIndex].style.zIndex = "0";


					images[nextImageIndex].style.zIndex = "1";
					imageIndex = nextImageIndex;
				}
			});
		}

		function myFunction() {



  let text = null;
  let month = prompt("What month would you like to know about?","Please type your answer here").toLowerCase();

  switch(month) {
    case "january":
      text = "There are 31 days in the month of January.";
      break;
    case "february":
      text = "There are 28 days in the month of February, and 29 days on a leap year.";
      break;
    case "march":
      text = "There are 31 days in the month of March.";
      break;
    case "april":
      text = "There are 30 days in the month of April.";
      break;
    case "may":
      text = "There are 31 days in the month of May.";
      break;
    case "june":
      text = "There are 30 days in the month of June.";
      break;
    case "july":
      text = "There are 31 days in the month of July.";
      break;
    case "august":
      text = "There are 31 days in the month of August.";
      break;
    case "september":
      text = "There are 30 days in the month of September.";
      break;
    case "october":
      text = "There are 31 days in the month of October.";
      break;
    case "november":
      text = "There are 30 days in the month of November.";
      break;
    case "december":
        text = "There are 31 days in the month of December.";
      break;
      default:
        alert('Incorrect Input, Please Try Again!');
        myFunction();

  }
  if (text)
  document.getElementById("days").innerHTML = text;

}
