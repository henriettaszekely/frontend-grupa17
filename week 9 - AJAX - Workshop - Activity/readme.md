Using the API provided on http://www.boredapi.com/ create an activity picker, which has filters for the activity type, number of the participants and for the price of the activity.

Type filter: radio buttons for each activity type: education, recreational, social, diy, charity, cooking, relaxation, music, busywork

Participants filter: an input type number

Price filter: 2 number type inputs, one for min price and one for max price

Based on the filters build the request url (each filter represents a query parameter of the request url), and using fetch function get the date from the server. Add error handling as well and display a loader while the HTTP request is made.

