window.onload = () => {
    const loadImagesButton = document.querySelector("#load-images-button")
    loadImagesButton.addEventListener("click", loadcards)
    const loadImagesButtonSecondary = document.querySelector("#load-Secondary-images-button")
    loadImagesButtonSecondary.addEventListener("click", loadcardsSecondary)
    const loadSearchImages = document.querySelector("#search-button")
    loadSearchImages.addEventListener("click", loadcardsbySearch)
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
      .catch((error) => console.error(error))
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
      .catch((error) => console.error(error))
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
      .catch((error) => console.error(error))
    userQuery.value=''
  }
  
  function getPhotos(mydata) {
    console.log(mydata)
    
    const cardImgs = document.querySelector("#main-cards")
    const { photos } = mydata
    cards = ""
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
                    class="btn btn-sm btn-outline-secondary"
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
    })
    cardImgs.innerHTML = cards

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
  