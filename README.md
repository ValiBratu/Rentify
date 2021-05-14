# Rentify 

## About the project

Rentify is a online apartment/house listing website. 

The purpose of the app is to make the process of searching for rent or a renter as easy as possible.

Once entering the user is welcomed by the home page:
![image](Screenshots/HomePage.PNG)

A user can register on the website
![image](Screenshots/Register.PNG)

Or he can login if he already has an account:
![image](Screenshots/Login.PNG)

There is a posts page that shows the user all the renting posts made.
The posts can be filtered by city and sorted by the date they were added:
![image](Screenshots/RentPosts.PNG)

If the user is logged in, he can make his own post:
![image](Screenshots/AddNewPost.PNG)

After the post was made, the user click on the show details button on the post card to be redirected to the post page.
There the user can add photos for the post or edit the details.
![image](Screenshots/Carousel.PNG)
![image](Screenshots/PostDetails.PNG)

Each user has it's own profile page, where other users can see the user details and all the posts he made:
![image](Screenshots/ProfilePage.PNG)


If a user introduces a wrong route path in the browser, he will be redirected to a NotFound page:
![image](Screenshots/NotFound.PNG)

Lastly, here is the swagger implementation with some of the routes:
![image](Screenshots/Swagger.PNG)


## Technologies used

For Backend:

- C# Asp.Net Core
- SQL
- Identity Server
- Entity Framework
- Swagger

For Frontend:

- React Js
- Html/Css
- Bootstrap


## To run this project

- Clone this repository
- Set RentingApi and RentingReact projects as startup projects 
- Run