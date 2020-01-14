# Exercise: consume a web service via Ajax

- Time necessary : 3 hours
- Work mode : individual
- Repository: `ajax-simple-web-service-request`
- Deployment stragegy : GitHub Page

## Learning Objectives

- A typical Ajax flow : make an asynchronous request to a remote server via javascript and process the response.
- DOM manipulation : modify the DOM according to the result of the Ajax request.

## Mission

Publish a web page that shows a random quote from an available Web Service, from the Quotes serving website: https://thatsthespir.it 

The web service sits at this URL:  https://thatsthespir.it/api. It is called **the endpoint**". 

### Steps

- First, visit the URL in your browser. What you will see is what your code will get.
- Being the smart person you are, ask yourself:
	- what the heck is this  ?
	- what kind of **request** did you do: `POST` or `GET` ?
- Create an html page in your repository, with a DOM element "blockquote" with id "quote".
- Add the [javascript that launches an Ajax request](https://dev.to/bjhaid_93/beginners-guide-to-fetching-data-with-ajax-fetch-api--asyncawait-3m1l) to the Web Service Endpoint.
- Treat the answer : 
	- If the request failed, show an error message to the user.
	- if the request succeed,  transform a JSON response into Html, injected in the DOM.
- Make it look good via CSS ([inspiration](https://www.google.be/search?q=beautiful+web+typography&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjJrbmozOvYAhUE9WMKHXTmDrQQsAQIJg&biw=1440&bih=780)).
- Publish it as a GitHub Page
- When it works, share the link on your startup's Ryver channel.

## Bonus

Do the same exercice using jQuery. Compare the syntax. What are the pros and cons of each approach (jQuery vs Vanilla javascript) ?
