
# Timestamp Microservice

The Timestamp Microservice project by freeCodeCamp is a Node.js API that can convert dates into Unix timestamps and UTC format. It is a good project for beginners to practice building microservices, as it is relatively straightforward to implement and passes a variety of tests.

### How Timestamp Microservice was build:

> Create a new Node.js project and install the Express.js framework.

> Create a new route that handles GET requests to the /api/:date? endpoint.

> Use the new Date(date_string) function to parse the input date string and convert it into a Unix timestamp and UTC format.

> Return a JSON object with the unix and utc properties set to the converted date and time.

> Add error handling to handle invalid date strings.

> Once you have implemented the Timestamp Microservice, you can test it by making GET requests to the /api/:date? endpoint with different date strings. For example, to convert the date "2023-10-03 07:13:58 PST" to a Unix timestamp and UTC format, you would make the following request:

GET /api/2023-10-03 07:13:58 PST
The response would be a JSON object with the following properties:

```JSON
{
  "unix": 1664793818,
  "utc": "2023-10-03T07:13:58Z"
}
```

> You can also test the Timestamp Microservice by making GET requests to the /api/:date? endpoint without a date string. In this case, the Timestamp Microservice should return the current time in Unix timestamp and UTC format.



## Lessons Learned

> The Timestamp Microservice project is a good way to practice building microservices and learn how to use the Express.js framework. It is also a good way to learn about date conversion in JavaScript.

## Screenshots

![App Screenshot](https://github.com/mskDev0092/Timestamp-Microservice/blob/main/Screenshot%202023-09-23%20at%2001-22-42%20Timestamp%20Microservice%20freeCodeCamp.org.png)


## Run Locally

Clone the project 

```bash
  git clone https://github.com/mskDev0092/Timestamp-Microservice
```

Go to the project directory

```bash
  cd Timestamp-Microservice
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Tech Stack

**Client:** HTML , CSS

**Server:** Node, Express


## Usage/Examples

#### The Timestamp Microservice can be used in a variety of ways. For example, you could use it to:

> Convert dates into Unix timestamps and UTC format for storage in a database.

> Convert dates into Unix timestamps and UTC format for use in APIs.

> Convert dates into Unix timestamps and UTC format for display in a user interface.


## Authors

- [@ShehzadKhan](https://github.com/mskDev0092)


## Feedback

If you have any feedback, please reach out to us at - [Linkedin](https://www.linkedin.com/in/shehzad-khan-3ab41b235)

