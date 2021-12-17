var slider = document.getElementById("postRange");
var value = document.getElementById("value");
value.innerHTML = slider.value;

slider.oninput = function() {
  value.innerHTML = this.value;
  updateImages(this.value);
}
const DesiredTilesToChange = 2;

imageMappings = [
  {"id": 1, "spans":  [1,2], "path": "images/1-beard.jpeg"},
  {"id": 2, "spans":  [1,2], "path": "images/2-dontknow.jpeg"},
  {"id": 3, "spans":  [1,2], "path": "images/3-fisher.jpeg"},
  {"id": 4, "spans":  [1,2], "path": "images/4-gigachad.jpeg"},
  {"id": 5, "spans":  [2,3], "path": "images/5-same.jpeg"},
  {"id": 6, "spans":  [2,3], "path": "images/6-orb.jpeg"},
  {"id": 7, "spans":  [2,3], "path": "images/7-average.jpeg"},
  {"id": 8, "spans":  [2,3], "path": "images/8-friends.jpeg"},
  {"id": 9, "spans":  [3,4], "path": "images/9-bus.jpeg"},
  {"id": 10, "spans": [3,4], "path": "images/10-bed.jpeg"},
  {"id": 11, "spans": [3,4], "path": "images/11-realism.png"},
  {"id": 12, "spans": [3,4], "path": "images/12-colon.jpeg"},
  {"id": 13, "spans": [4], "path": "images/13-brain.png"},
  {"id": 14, "spans": [4], "path": "images/14-leo.jpeg"},
  {"id": 15, "spans": [4], "path": "images/15-metoo.jpeg"},
  {"id": 16, "spans": [4], "path": "images/16-weeks.jpeg"}
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

  // 2. Update the images
  document.querySelectorAll('img.img-fluid').forEach(function(image, index) {
    imageSrc = imageMappings[index]["path"]
    image.src = imageSrc
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
