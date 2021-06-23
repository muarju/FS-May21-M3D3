

window.onload = () => {
    const loadImagesButton = document.querySelector("#load-images-button")
    loadImagesButton.addEventListener("click", loadcards)
    const loadImagesButtonSecondary = document.querySelector("#load-Secondary-images-button")
    loadImagesButtonSecondary.addEventListener("click", loadcardsSecondary)
    const loadSearchImages = document.querySelector("#search-button")
    loadSearchImages.addEventListener("click", loadcardsbySearch)

    //task no 9
    
    function carouselPhotos(mydata) {
        console.log(mydata)
        const carouselInner = document.querySelector(".carousel-inner")
       
        const { photos } = mydata
        carouselitem = ""
        photos.forEach((photo,index) => {
            if(index==0){
                carouselitem += `
                    <div class="carousel-item active">
                    <img src="${photo.src.landscape}" class="d-block w-100" alt="">
                    </div>
                    `
                }else{
                    carouselitem += `
                    <div class="carousel-item">
                    <img src="${photo.src.landscape}" class="d-block w-100" alt="">
                    </div>
                    `
                }
        })
        carouselInner.innerHTML = carouselitem
      }

    fetch("https://api.pexels.com/v1/search?query=forest", {
      headers: {
        Authorization: "563492ad6f917000010000016c4555e8c26d439eae2bb113c225e0e5",
      },
    })
      .then((data) => data.json())
      .then((mydata) => carouselPhotos(mydata))
      .catch((error) => console.error(alert(error)))
  }
  
  const loadcards = () => {
    fetch("https://api.pexels.com/v1/search?query=cat", {
      headers: {
        Authorization: "563492ad6f917000010000016c4555e8c26d439eae2bb113c225e0e5",
      },
    })
      .then((data) => data.json())
      .then((mydata) => getPhotos(mydata))
      .then(hideCard)
      .catch((error) => console.error(alert(error)))
  }
  const loadcardsSecondary = () => {
    fetch("https://api.pexels.com/v1/search?query=dog", {
      headers: {
        Authorization: "563492ad6f917000010000016c4555e8c26d439eae2bb113c225e0e5",
      },
    })
      .then((data) => data.json())
      .then((mydata) => getPhotos(mydata))
      .then(hideCard)
      .catch((error) => console.error(alert(error)))
  }
  const loadcardsbySearch = () => {
    const userQuery = document.querySelector("#search-input")
    fetch(`https://api.pexels.com/v1/search?query=${userQuery.value}`, {
      headers: {
        Authorization: "563492ad6f917000010000016c4555e8c26d439eae2bb113c225e0e5",
      },
    })
      .then((data) => data.json())
      .then((mydata) => getPhotos(mydata))
      .then(hideCard)
      .catch((error) => console.error(alert(error)))
      
    userQuery.value=''
  }
  
  function getPhotos(mydata) {
    console.log(mydata)
    
    const cardImgs = document.querySelector("#main-cards")
    const allmodal = document.querySelector("#allmodal")
    const { photos } = mydata
    cards = ""
    modal = ""
    photos.forEach((photo) => {
      cards += `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src=${photo.src.landscape} alt="">
  
            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div
                class="d-flex justify-content-between align-items-center"
              >
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary btn-modal"
                    data-toggle="modal" data-target="#s${photo.id}"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary btn-hide"
                  >
                    Hide
                  </button>
                </div>
                <small class="text-muted">${photo.id}</small>
              </div>
            </div>
          </div>
        </div>
      `
      modal +=`<div class="modal fade" id="s${photo.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <img src=${photo.src.landscape} alt="" class="img-fluid">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>`
    })
    cardImgs.innerHTML = cards
    allmodal.innerHTML = modal

    setTimeout(function () { alert(mydata.per_page + ' images loaded'); }, 5000);
  }
  
  function hideCard() {
    const btnList = document.querySelectorAll(".btn-hide")
    const card = document.querySelectorAll(".col-md-4")
    btnList.forEach((btn, i) =>
      btn.addEventListener("click", () => {
        card[i].classList.add("d-none")
      })
    )
  }

let arrayOfUrlStr = [];
//EVEN MORE EXTRAS (outcome in the console)
fetch("https://api.pexels.com/v1/search?query=cat", {
    headers: {
      Authorization: "563492ad6f917000010000016c4555e8c26d439eae2bb113c225e0e5",
    },
  })
  .then((data) => data.json())
  .then((mydata) =>{
    //EX11  (arrOfUrlStr is at the top of the file)
    mydata.photos.map((image) => {
        arrayOfUrlStr.push(image.src.medium);
    })
    })
  .catch((error) => console.error(alert(error)))
  
  console.log("ARRAY OF URLS", arrayOfUrlStr)