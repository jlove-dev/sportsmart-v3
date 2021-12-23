# SportsmartV3

MEAN stack application

### Requirements

1) [NodeJS](https://nodejs.org/en/)
2) [Angular](https://angular.io/cli)
3) [MongoDB](https://docs.mongodb.com/manual/installation/)
   1) It's recommended to run this as a service so you don't have to start Mongo everytime

### Running

Clone or fork this repo into your local environment. Start by changing directories into it such as:

`cd c:/sportsmart-v3`

Then, run `npm install`. This will install all the Angular libraries required.

Following that, you need to install the NodeJS server libraries. Change directories into the server:

`cd c:/sportsmart-v3/server`

Then, run `npm install`. You also specifically need to install concurrently:

`npm install concurrently`

Once installed, and MongoDB is running in the background, simply run: 

`npm run dev`

This will concurrently run the NodeJS backend API & the Angular frontend.

### Auth

I'm working on implementing authentication. The project will create a random private RSA key for you located in: 

`/server/keys/private.key`

Be mindful that this key is utilized for JSON web tokens. If you delete this key and create a new one, you'll likely need to go into the browser and delete the token for authentication to work. 

You also need to create an account once the application is running. Simply enter a username/password into the login field and then click `register`. This username/password can then be reused when clicking `login`.

The register button will be removed in the future, as an admin only function, however it's important to have now for development.

### Future

This project is in development. The hope is to remake the current VBS version of the application so it's more future proof.

### Contributors

[Josh Love](https://github.com/JoshLove-portfolio)

[Ryan Greenman](https://github.com/rgreenman)
