# TalkToMe

TalkToMe is a serverless MERN web application with the ultimate goal of encouraging personal journaling.
It is a platform that allows you to record those pep talks, and conversations you have with yourself daily to encourage and help you work through the good and bad days
## Installation
To run it locally:

1. clone the repository
``` 
git cl
```
Use the package manager [npm](https://www.npmjs.com/) to install TalkToMe

```bash
# install the backend
cd backend
npm i
#install the client
cd client
npm i

```
ensure to include your `.env variables` files in this format
```bash
#for the backend:
MONGODB_URI:
MONGODB_dbName:
JWT_SECRET:

# FOR THE CLIENT
REACT_APP_BASE_URL=
REACT_APP_CLOUD_NAME=

```
## Usage
```bash
# start the backend end and the client concurrently by:
sls offline #for the backend
npm start #for the client

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)