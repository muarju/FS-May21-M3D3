# FS-May21-M3D3
Homework : <a href="https://muarju.github.io/FS-May21-M3D3/">Have a look here</a>

       PICTURE ALBUM EXERCISE

        Starting from the current bootstrap layout, implement as many of the following features as you can:

        First of all: 
        Register on pexels to retrieve your API key: https://www.pexels.com/api/new/

        the key, once acquired, needs to go into the headers of your HTTP request with a property of 
        
        {Authorization: "Bearer [YOUR API KEY]"}
        
        this should be enough for you to make your GET request successfully


        1) When pressing on Load Images button, load the pictures from https://api.pexels.com/v1/search?query=[your-query]
        2) When pressing on Load Seconday Images, load the pictures from https://api.pexels.com/v1/search?query=[your-secondary-query]
        3) The Edit button should be replaced with a "Hide" button. 
        4) When the hide button is pressed, the whole picture card should disappear.
        5) Replace the "9 mins" string in the card template with the ID of the Image
        6) Add in the "jumbotron" a search field. Use the value of the search field to search new images and replace the existing ones.
        
        
        [EXTRA]
        7) After every button is pressed, display an alert for 5 seconds the result of the operation (es.: 20 images loaded)
        8) Handle API errors gracefully, using alert components with the message inside
        9) Add at the bottom of the page a carousel with "forest" images loaded by another API call
        10) When the user clicks on the "VIEW" button inside the Card, open the specified image in a modal view

        [EVEN MORE EXTRA]
        11) Use the map method to create from your pexel's response object an array containing just the url strings
        12) Use filter to modify the result of the api call to filter only images from some specific authors only ( you can choose which ones)
        // YOU CAN SKIP THIS 13) Use the reduce method on the results array to sum up all the id numbers in a single one



        [HINT]
        You can replace the images src for making your pictures appear on button click or you can use template literals to re-create all the cards from scratch.
        Use arrow functions to practice them

        API Docs: 
      
        Documentation for authenticating to the pexels APIs: https://www.pexels.com/api/documentation/?language=javascript#authorization
        Documentation for the search endpoint: https://www.pexels.com/api/documentation/?language=javascript#photos-search
     
