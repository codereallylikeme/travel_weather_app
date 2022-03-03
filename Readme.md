### Udacity Final project Travel-App


This projects builds out a travel app, that enables the user to gives a desired trip location & date, and then displays weather and an image of the location using information obtained from external APIs. which wil be obtained from Geonames Api, weatherbit Api and Pixabay Api


## API Reference

#### Get all items
Most importantly you have to sign up for API keys from this various sites that I mentioned above
```http
  GET /http://api.geonames.org/searchJSON?q
  GET /https://api.weatherbit.io/v2.0/forecast/daily?
  GET /http://https://pixabay.com/api/?

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Screenshots

![App Screenshot](/src/client/assets/images/travel_screenshot.png)


## Tech Stack

**Client:** HtML, sass, Vanilla JavaScript

**Server:** Node, Express,Axios

**Depencies:** Babel, Babel loader, CSS Loader, File Loader, HTML Loader, HTML Webpack plugin, Node Sass, Sass Loader, Style Loader, Webpack, Webpack Cli, and Webpack Dev Server


## Running Tests

To run tests, run the following command

```bash
  npm run jest
```


## Lessons Learned

I do learned couple of things while working on this project.
1. How promise.all() method takes an iterables of promises of a different api endponts and puts in into a single promise, which will then resolves to an array of promises, which can either be resolved or reject on response.
2. Destructuring an array and then use it as an object that will then be sent to client side.
3. Using conditional tertiary operation can be helpful in determing which response you are getting from an external API
5. In CLient side, I learnt how extreme important to validate user input , if not this can have a negative impact on  your UI.
6. I must admit using global variables can make life difficult for you when finally testing your codes. 
7. I got to practices various ways of manipulating the DOM.




