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

### Future

This project is in development. The hope is to remake the current VBS version of the application so it's more future proof.

### Contributors

[Josh Love](https://github.com/JoshLove-portfolio)

[Ryan Greenman](https://github.com/rgreenman)
