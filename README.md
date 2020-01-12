# URL Shortener

A URL shortener is a pretty popular application on the Web. URL shortener saves spaces so that one can send it in emails, tweet it on Twitter while still redirecting to the original URL.

## How URL Shortner works?

URL shortener works in two ways:
-Generate a short URL based on the given URL.
-Redirect short URL to original URL.

## Objective

-To short URL, 
-Generate A Random Hash and assign it to the original URL and store it in our database. 
-On Request to the short URL, the system needs to look up in the database and if found, return the original URL for redirection.

## Stack

- [body.parser](https://www.npmjs.com/package/body-parser)- Parse incoming request bodies.
- [cors](https://www.npmjs.com/package/cors)- Node.js CORS middleware.
- [express](https://www.npmjs.com/package/express)- Fast, unopinionated, minimalist web framework for node.
- [nodemon](https://www.npmjs.com/package/nodemon)- Simple monitor script for use during development of a node.js app.
- [redis](https://www.npmjs.com/package/redis)- Complete and feature rich Redis client for node.js.
- [shortid](https://www.npmjs.com/package/shortid)- Amazingly short non-sequential url-friendly unique id generator..
- [valid-url](https://www.npmjs.com/package/valid-url)- To Check the Url is Valid or not.


