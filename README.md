# client

## User Stories

- **register:** As an anon I can register to the website
- **Login:** As a user I can login to the website
- **Logout:** As a user I can logout from the website
- **Create Product** As a Admin I can create new course
- **Add lesson** As a user I can add a new lesson to my Product
- **Edit Product** As a Admin I can edit my Product
- **Comment** As a user I can give a comment on Product
- **Like** As a user I can give a like to a Product
- 
---
## Admin Stories

- **delete user** As an admin I can give a user a block from the website
- **delete comment** As an admin I can block a comment- 
---- 
## used library

- [nextjs](https://nextjs.org/)
- [redux](https://www.npmjs.com/package/redux)
- [material ui](https://mui.com/)

----
## Routes

| Path                              | Component    | Permissions    | Behavior                                                             |
| --------------------------------- | ------------ | -------------- | -------------------------------------------------------------------- |
| `/`                               | n/a          | public         | Home page                                                            |
| `/SiginUp`                        | Register     | public         | Register form, link to login, navigate to log in page after register |
| `/login`                          | Login         | public         | Login form, link to register, navigate to homepage after login       |
| `/search/:id`                     |               | public         |                                                                      |
| `/Profile`                        | Setting       | user nad admin | Setting form,                                                        |
| `/create/Product`                 | CreateProduct | user and admin | create new course                                                    |
| `/Product`                        | Product       | public         | show course                                                          |
| `/Product/:id`                    | Product by id | public         | show course                                                          |

---

## Components

- Home
- NavBar
- Header
- Search
- Register
- Login
- FAQs
- Profile
- Product
- oneProduct
- Comments
- Footer
- Auction

---

## Reducer
- index
- sigin

---

## wireframes

 ![Untitled Diagram](https://user-images.githubusercontent.com/92248111/146689309-44bb2655-49af-4904-a203-610fe3791dae.jpg)
 
 ----
 
 ![Register](https://user-images.githubusercontent.com/92248111/146686790-78e7921c-403f-439c-8fa6-a6270762e334.jpg)

---

![Profile](https://user-images.githubusercontent.com/92248111/146686778-96137ff9-377d-4cec-9618-0e0ab02908c0.png)

---

![Log in ](https://user-images.githubusercontent.com/92248111/146686808-2659ef5d-b619-499c-9558-61eca45fd17c.jpg)

---

![WishList](https://user-images.githubusercontent.com/92248111/146686827-a064a1b9-1259-485e-8b09-e7a42c83eca9.jpeg)


----

### GitHub

[Client repository Link](https://github.com/MP-Project-Meead/client)

[Server repository Link](https://github.com/MP-Project-Meead/server)

[Deployed App Link](http://heroku.com/)


## UML
![UML-FrontEnd drawio](https://user-images.githubusercontent.com/92248111/146668935-6dd095b0-7195-42f9-8836-b748c4980d85.png)

### Trello

[Link to trello board](https://trello.com)

### Slides

[Slides Link](http://slides.com/)
