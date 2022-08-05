This Memories App was created using MERN Stack Application following the tutorial by JSMastery on YT.

PSA, this project is for learning purposes, meaning the code written and library versions used are the exact same as shown in the tutorial mentioned above.

### REAPZ ###

To look at the hosted app, please visit the following urls.

Frontend (React): https://revaldir-memories-app.netlify.app/

Backend API (Express, MongoDB, Node.js): https://mern-memories-mjs.herokuapp.com/

# API DOCS #
### POSTS ###
1. .../posts/ (GET) => Fetch all posts
2. .../posts/ (POST) => Create new post
3. .../posts/:id (PATCH) => Update post by _id
4. .../posts/:id (DELETE) => Delete post by _id
5. .../posts/:id/likePost (PATCH) => Increase posts like count by _id

### AUTH ###
1. .../user/signup (POST) => Sign up new user using email & password
2. .../user/signin (POST) => Sign in to an existing user with JWT
