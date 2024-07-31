# NodeJS
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code on the server side, outside of a web browser. Node.js is designed to build scalable network applications and is known for its non-blocking, event-driven architecture, which makes it efficient for handling concurrent connections.

- You can run JS outside of the browser.
- JS can talk to native machine because of c++.
- You can create webservers in Javascript Language.
- Node js is a runtime environment for JS.


## npm
- npm init - tu build a new project


## URL
Uniform Resource Locator

## HTTP Methods
- GET : When you want to get some data from the server.
- POST :  When you want to send and mutate some data in the server.
- PUT : When you want to upload some files on the server such as image on the form.
- PATCH : to change some existing data in the database
- DELETE : Basically, to delete an account


## What is REST API ?
Representational State Transfer Application Programming Interface
Rules
- These are standards.
- Works on Server Client architecture and there should not be no dependencies between them according to the REST API.
- Always respect all http methods.


## What are middlewares ?
Middleware functions in Express.js are functions that have access to the request (req), response (res), and the next middleware function in the application’s request-response cycle. They can perform various tasks, such as executing code, modifying the request/response objects, ending the request-response cycle, or calling the next middleware.
- There can be multiple middlewares in a single project or code file.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.


## What are HTTP Headers ?
- HTTP Headers are an important art of the API request and response as they represent the meta-data associated with the API request and response.
- Headers carry information for the request and response body.



## MongoDB
- No-sql Document Based Database
- Strong Support for Aggregation Pipelines
- Works on BSON format
- Best for Node Applications



## Mongoose
- Schema - Define the structure
- Schema - Model (using this model, we do CRUD operations)



## Authentication
There are two types of patterns in authentication.
- Statefull = Which maintains state or data or server side
- Stateless = which has no state



## How to transfer uid ?
- cookies
- response
- headers


## Cookies
- They are domain specific.