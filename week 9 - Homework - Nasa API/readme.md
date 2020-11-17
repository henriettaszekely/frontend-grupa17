Using NASA's Astronomy Picture of the Day API get the Astronomy Picture of the selected day.
Go to the Nasa Api website https://api.nasa.gov/, access the Browse APIs section and there you find the documantation of the APOD: Astronomy Picture of the Day.

Details: 
1. Generate an API Key on there website: https://api.nasa.gov/

2. Study how the APOD API works, using Postman, check the response for the valid and invalid dates.

3. Implement the UI from the attached screenshots: add the page title and logo, add a input type="date" to select the date, and a "See picture" button.

3. Using fetch call the API to get the Astronomy Picture of the Day and display the picture and its title to the page. When you load the page display by default today's picture, after that when the user selects a date and clicks on the "See picture" button display the picture for the selected date and its title.

4. Before making a request to the server hide the previouse picture and show a loader, after receiving the response add display and display the image add an event listener to the image "load" event, only after the image is loaded display the image, its title and hide the loader.

5. Format the title text based on the date: if the response's date is equal to today's date display: "Today's picture: " otherwise display the response's date concatenated with "picture: " and folowed by the title from the response. You will need to use JavaScripts Date object and its getFullYear(), getMonth(), getDate() methods to be able to compare the dates.

    https://www.w3schools.com/js/js_dates.asp
    
    https://www.w3schools.com/js/js_date_methods.asp


6. Pay attiontion to the error handling. As you saw when you played with the API when you send a future date to the server it sends a response which contains a "code" and "msg", check if the response has the code property in that case throw an error with the recieved message. Also some dates don't have an image they have video or another type of media. Therefore after getting the parsed response check the respon's "media_type" property to see if it is an image, otherwise throw an error to inform the user. 

7. As you saw this API works with query parameters you will need to use the JavaScript's URL object to be able to easily set query parameters or search parameters. Check the links below:

    https://developer.mozilla.org/en-US/docs/Web/API/URL
    
    https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
    
    https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/set

