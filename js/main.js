var slider = document.getElementById("postRange");
var value = document.getElementById("value");
value.innerHTML = slider.value;

slider.oninput = function() {
  value.innerHTML = this.value;
  updateImagesRandom(this.value);
}
const DesiredTilesToChange = 10;

var imageMappings;

imageMappings = [
  {"id": 1,   "spans": [1,2], "path": "archive/1-06.png"},
  {"id": 2,   "spans": [1,2], "path": "archive/IMG_0181.jpg"},
  {"id": 3,   "spans": [1,2], "path": "archive/IMG_0291.jpg"},
  {"id": 4,   "spans": [1,2], "path": "archive/IMG_0651.jpg"},
  {"id": 5,   "spans": [1,2], "path": "archive/IMG_9094.jpg"},
  {"id": 6,   "spans": [1,2], "path": "archive/IMG_9678.jpg"},
  {"id": 7,   "spans": [1,2], "path": "archive/2-08.png"},
  {"id": 8,   "spans": [1,2], "path": "archive/IMG_0182.jpg"},
  {"id": 9,   "spans": [1,2], "path": "archive/IMG_0319.JPG"},
  {"id": 10,  "spans": [1,2], "path": "archive/IMG_0660.jpg"},
  {"id": 11,  "spans": [1,2], "path": "archive/IMG_9461.JPG"},
  {"id": 12,  "spans": [1,2], "path": "archive/IMG_9694.jpg"},
  {"id": 13,  "spans": [1,2], "path": "archive/3-09.png"},
  {"id": 14,  "spans": [1,2], "path": "archive/IMG_0183.jpg"},
  {"id": 15,  "spans": [1,2], "path": "archive/IMG_0339.jpg"},
  {"id": 16,  "spans": [1,2], "path": "archive/IMG_0680.jpg"},
  {"id": 17,  "spans": [1,2], "path": "archive/IMG_9487.jpg"},
  {"id": 18,  "spans": [1,2], "path": "archive/IMG_9728.JPG"},
  {"id": 19,  "spans": [2,3], "path": "archive/IMG_0002.JPG"},
  {"id": 20,  "spans": [2,3], "path": "archive/IMG_0185.jpg"},
  {"id": 21,  "spans": [2,3], "path": "archive/IMG_0350.JPG"},
  {"id": 22,  "spans": [2,3], "path": "archive/IMG_0710 2.jpg"},
  {"id": 23,  "spans": [2,3], "path": "archive/IMG_9529.jpg"},
  {"id": 24,  "spans": [2,3], "path": "archive/IMG_9730.jpg"},
  {"id": 25,  "spans": [2,3], "path": "archive/IMG_0016.jpg"},
  {"id": 26,  "spans": [2,3], "path": "archive/IMG_0202.jpg"},
  {"id": 27,  "spans": [2,3], "path": "archive/IMG_0352.jpg"},
  {"id": 28,  "spans": [2,3], "path": "archive/IMG_0710.jpg"},
  {"id": 29,  "spans": [2,3], "path": "archive/IMG_9536.JPG"},
  {"id": 30,  "spans": [2,3], "path": "archive/IMG_9739.jpg"},
  {"id": 31,  "spans": [2,3], "path": "archive/IMG_0035.jpg"},
  {"id": 32,  "spans": [2,3], "path": "archive/IMG_0206.jpg"},
  {"id": 33,  "spans": [2,3], "path": "archive/IMG_0354.JPG"},
  {"id": 34,  "spans": [2,3], "path": "archive/IMG_0712.jpg"},
  {"id": 35,  "spans": [2,3], "path": "archive/IMG_9549.jpg"},
  {"id": 36,  "spans": [2,3], "path": "archive/IMG_9758.jpg"},
  {"id": 37,  "spans": [2,3], "path": "archive/IMG_0057.JPG"},
  {"id": 38,  "spans": [2,3], "path": "archive/IMG_0214.jpg"},
  {"id": 39,  "spans": [2,3], "path": "archive/IMG_0443.jpg"},
  {"id": 40,  "spans": [2,3], "path": "archive/IMG_0714.jpg"},
  {"id": 41,  "spans": [2,3], "path": "archive/IMG_9552.jpg"},
  {"id": 42,  "spans": [2,3], "path": "archive/IMG_9776.jpg"},
  {"id": 43,  "spans": [2,3], "path": "archive/IMG_0069.jpg"},
  {"id": 44,  "spans": [2,3], "path": "archive/IMG_0215.jpg"},
  {"id": 45,  "spans": [3,4], "path": "archive/IMG_0465.jpg"},
  {"id": 46,  "spans": [3,4], "path": "archive/IMG_0715.jpg"},
  {"id": 47,  "spans": [3,4], "path": "archive/IMG_9566.jpg"},
  {"id": 48,  "spans": [3,4], "path": "archive/IMG_9785.jpg"},
  {"id": 49,  "spans": [3,4], "path": "archive/IMG_0079.jpg"},
  {"id": 50,  "spans": [3,4], "path": "archive/IMG_0221.jpg"},
  {"id": 51,  "spans": [3,4], "path": "archive/IMG_0477.jpg"},
  {"id": 52,  "spans": [3,4], "path": "archive/IMG_0716.jpg"},
  {"id": 53,  "spans": [3,4], "path": "archive/IMG_9616.jpg"},
  {"id": 54,  "spans": [3,4], "path": "archive/IMG_9789.jpg"},
  {"id": 55,  "spans": [3,4], "path": "archive/IMG_0092.JPG"},
  {"id": 56,  "spans": [3,4], "path": "archive/IMG_0227.JPG"},
  {"id": 57,  "spans": [3,4], "path": "archive/IMG_0493.jpg"},
  {"id": 58,  "spans": [3,4], "path": "archive/IMG_0717.jpg"},
  {"id": 59,  "spans": [3,4], "path": "archive/IMG_9618.jpg"},
  {"id": 60,  "spans": [3,4], "path": "archive/IMG_9823.jpg"},
  {"id": 61,  "spans": [3,4], "path": "archive/IMG_0094.JPG"},
  {"id": 62,  "spans": [3,4], "path": "archive/IMG_0230.JPG"},
  {"id": 63,  "spans": [3,4], "path": "archive/IMG_0495.JPG"},
  {"id": 64,  "spans": [3,4], "path": "archive/IMG_0719.jpg"},
  {"id": 65,  "spans": [3,4], "path": "archive/IMG_9620.jpg"},
  {"id": 66,  "spans": [3,4], "path": "archive/IMG_9879.jpg"},
  {"id": 67,  "spans": [3,4], "path": "archive/IMG_0100.jpg"},
  {"id": 68,  "spans": [3,4], "path": "archive/IMG_0260.JPG"},
  {"id": 69,  "spans": [3,4], "path": "archive/IMG_0505.jpg"},
  {"id": 70,  "spans": [3,4], "path": "archive/IMG_0720.jpg"},
  {"id": 71,  "spans": [4,5], "path": "archive/IMG_9621.jpg"},
  {"id": 72,  "spans": [4,5], "path": "archive/IMG_9931.jpg"},
  {"id": 73,  "spans": [4,5], "path": "archive/IMG_0120.jpg"},
  {"id": 74,  "spans": [4,5], "path": "archive/IMG_0261.JPG"},
  {"id": 75,  "spans": [4,5], "path": "archive/IMG_0544.jpg"},
  {"id": 76,  "spans": [4,5], "path": "archive/IMG_0735.PNG"},
  {"id": 77,  "spans": [4,5], "path": "archive/IMG_9630.jpg"},
  {"id": 78,  "spans": [4,5], "path": "archive/IMG_9943.jpg"},
  {"id": 79,  "spans": [4,5], "path": "archive/IMG_0128.jpg"},
  {"id": 80,  "spans": [4,5], "path": "archive/IMG_0262.jpg"},
  {"id": 81,  "spans": [4,5], "path": "archive/IMG_0572.jpg"},
  {"id": 82,  "spans": [4,5], "path": "archive/IMG_0736.PNG"},
  {"id": 83,  "spans": [4,5], "path": "archive/IMG_9645.jpg"},
  {"id": 84,  "spans": [4,5], "path": "archive/IMG_9947.jpg"},
  {"id": 85,  "spans": [4,5], "path": "archive/IMG_0134.JPG"},
  {"id": 86,  "spans": [4,5], "path": "archive/IMG_0265.JPG"},
  {"id": 87,  "spans": [4,5], "path": "archive/IMG_0577.jpg"},
  {"id": 88,  "spans": [4,5], "path": "archive/IMG_0737.PNG"},
  {"id": 89,  "spans": [4,5], "path": "archive/IMG_9659.jpg"},
  {"id": 90,  "spans": [4,5], "path": "archive/IMG_9968.jpg"},
  {"id": 91,  "spans": [4,5], "path": "archive/IMG_0147.JPG"},
  {"id": 92,  "spans": [4,5], "path": "archive/IMG_0289.jpg"},
  {"id": 93,  "spans": [4,5], "path": "archive/IMG_0611.JPG"},
  {"id": 94,  "spans": [4,5], "path": "archive/IMG_5293.png"},
  {"id": 95,  "spans": [4,5], "path": "archive/IMG_9664.jpg"},
  {"id": 96,  "spans": [4,5], "path": "archive/IMG_9973.jpg"},
  {"id": 97,  "spans": [5], "path": "archive/IMG_0169.jpg"},
  {"id": 98,  "spans": [5], "path": "archive/IMG_0290.jpg"},
  {"id": 99,  "spans": [5], "path": "archive/IMG_0650.jpg"},
  {"id": 100, "spans": [5], "path": "archive/IMG_9009.JPG"},
  {"id": 101, "spans": [5], "path": "archive/IMG_9669.jpg"}
]

window.onload = function(){
  degreeOfPostness = 1

  // 1. Get how many images we need to change
  toChange = Math.max(DesiredTilesToChange, document.querySelectorAll('img.img-fluid').length);

  // 2. Fetch images to use
  filteredByPostness = imageMappings.filter(function(imgMapping) {
    return imgMapping["spans"][0] == degreeOfPostness
  });
  sortedByLength = filteredByPostness.sort(function(first, second) {
    return second["spans"].length - first["spans"].length
  }).slice(0, toChange)

  console.log(sortedByLength);

  // 3. Update the images
  document.querySelectorAll('img.img-fluid').forEach(function(image, index) {
    imageSrc = imageMappings[index]["path"]
    image.src = imageSrc
  });
}

function updateImagesRandom(degreeOfPostness) {
  // 1. Get how many images we need to change
  var degreeOfPostness = parseInt(degreeOfPostness);
  inUseImages = []

  document.querySelectorAll('img.img-fluid').forEach(function(image) {
    image = imageMappings.find(function(imgMapping) {
      return imgMapping["path"] == image.src.split("/").slice(-2).join("/");
    })
    if (image != null) {
      console.log("HOWWOW");
      console.log(image["path"]);
      inUseImages.push(image["path"]);
    }
  });

  availableImages = imageMappings.filter(function(image) {
    return !inUseImages.includes(image["path"]);
  });

  // 3. Update the images
  totalChanged = 0;
  remainingToChangeCounter = DesiredTilesToChange;
  document.querySelectorAll('img.img-fluid').forEach(function(image, index) {
    trimmedImgPath = image.src.split("/").slice(-2).join("/");
    if ((getRandomInt(2) % 2 == 0) && (totalChanged < remainingToChangeCounter)) {
      imageSrc = availableImages[getRandomInt(availableImages.length - 1)]["path"];
      image.src = imageSrc;
      totalChanged += 1;
    }
  });
}

function updateImages(degreeOfPostness) {
  // 1. Get how many images we need to change
  var degreeOfPostness = parseInt(degreeOfPostness);
  inUseImages = []

  document.querySelectorAll('img.img-fluid').forEach(function(image) {
    image = imageMappings.find(function(imgMapping) {
      return imgMapping["path"] == image.src.split("/").slice(-2).join("/");
    })
    inUseImages.push(image);
  });

  mustChangeImages = inUseImages.filter(function(image) {
    return image["spans"].length == 1 || !image["spans"].includes(degreeOfPostness);
  });

  toChangeCount = Math.max(DesiredTilesToChange, mustChangeImages.length);

  mustChangeImagesPaths = mustChangeImages.map((image) => { return image["path"]});
  console.log("MUST CHANGE IMAGES PATHS:");
  console.log(mustChangeImagesPaths);

  // 2. Fetch images to use
  filteredByPostness = imageMappings.filter(function(imgMapping) {
    return imgMapping["spans"][0] == degreeOfPostness
  });
  sortedByLength = filteredByPostness.sort(function(first, second) {
    return second["spans"].length - first["spans"].length
  }).slice(0, toChangeCount)

  console.log("TO FILL IMAGES:");
  console.log(sortedByLength);

  // 3. Update the images
  totalChanged = 0;
  remainingToChangeCounter = mustChangeImages.length;
  document.querySelectorAll('img.img-fluid').forEach(function(image, index) {
    trimmedImgPath = image.src.split("/").slice(-2).join("/");
    if (mustChangeImagesPaths.includes(trimmedImgPath)) {
      imageSrc = sortedByLength[totalChanged]["path"];
      image.src = imageSrc;
      totalChanged += 1;
      remainingToChangeCounter -= 1;
    } else {
      remainingCount = sortedByLength.length - totalChanged;
      if (remainingCount > remainingToChangeCounter) {
        imageSrc = sortedByLength[totalChanged]["path"];
        image.src = imageSrc;
        totalChanged += 1;
      }
    }
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

///////////////////////////////////////////////////
//////////////    MODAL STUFF        //////////////
///////////////////////////////////////////////////
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img
// Get the image and insert it inside the modal - use its "alt" text as a caption
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-img");
function openImageInModal(img){
  modal.style.display = "block";
  modalImg.src = img.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}


// function that returns which tiles to change
// function that returns which images to use for changing
// Cases
//   1. All tiles can only span one level                 => replace all
//   2. Range slider have jumped more than one level      => replace all
//   3. Desired no. of tiles (N) to change (CONSTANT) is within no.
//      of possible tiles to change (M)                   => replace N tiles
//   4. Desired no. of tiles (N) to change is smaller than 
//      no of tiles that must change (M)                  => replace M tiles
// - Always favor tiles that span more than one level
// - 
