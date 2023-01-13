# TalkToMe
TalkToMe is a serverless MERN web application that encourages personal journaling. It is a platform that allows you to record and save the pep talks and conversations you have with yourself daily, to help you work through good and bad days.


## Installation
To run it locally:
1. Clone the repository: git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
2. Use the package manager [npm](https://www.npmjs.com/) to install TalkToMe:

```bash
# install the backend
cd backend
npm i
#install the client
cd client
npm i

```
3. Create a .env file in the root of the backend and client directory and include the following variables:
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