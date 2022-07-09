# Social-Network-API

## Description

This application creates and updates a Mongoose NoSQL database as part of a Social-Network-API back end server.  The application allows users to be created, deleted and updated, friends to be created and deleted and associated with users, thoughts to be created, deleted, and updated, and reactions to those thoughts to be created and deleted.

This application uses Express.js for routing, a MongoDB database, and Mongoose Object Data Modeling to manage the relationships between the data and schemas.  The api routes are all tested using Insomnia and validated in the videos in the link below.

There are two videos.  The first video demonstrates all the functionality related to users, including the ability to add and delete friends.  The second video demonstrates all the functionality related to thoughts, including the ability to add and delete reactions.

## Table of Contents

- [Videos](#video)
- [Acceptance Criteria](#acceptance)
- [What I Learned](#learned)
- [Credits](#credits)

## Video

The first video shows all the routes related to Users:  [Video 1](https://drive.google.com/file/d/1JEb6LbRtYjQew1r0ruBfgTi-qF9sxNrb/view)

The second video shows all the routes related to Thoughts:  [Video 2](https://drive.google.com/file/d/1D3x_ZkFVv4UsJQ7V-3B0ITL3UeWkoueH/view)

The code is in the [GitHub Repository](https://github.com/stephencurrie/social-network-api)

## Acceptance

The following were the acceptance criteria for the project:

- [x] When I enter the command to invoke the application, my server is started and the Mongoose models are synced to the MongoDB database
- [x] When I open API GET routes in Insomnia for users and thoughts, the data for each of these routes is displayed in a formatted JSON
- [x] When I test API POST, PUT, and DELETE routes in Insomnia, I am able to successfully create, update, and delete users and thoughts in my database
- [x] When I test API POST and DELETE routes in Insomnia, I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Learned

The following is a list of things I learned:

- How to install and set up a Mongoose NoSQL database
- How to use ODM models and Schemas to store data in a Mongoose NoSQL database 
- How to use virtuals to get data that is not stored in the Mongo database
- How to use commands such as findOne, findOneandUpdate, findOneandDelete, create, set, addToSet, and pull to manipulate data in Mongoose
- How to use getters and setters to execute logic in Mongoose
- How to incorporate Moment.js to get time-stamp data in Mongoose

## Credits
I want to thank our instructor Trey Eckels as he helped bug fix some problematic code.

I want to thank Simon Rennocks, my tutor, who also helped with some of the code.
