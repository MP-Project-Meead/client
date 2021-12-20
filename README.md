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

### GitHub

[Client repository Link](https://github.com/MP-Project-Meead/client)

[Server repository Link](https://github.com/MP-Project-Meead/server)

[Deployed App Link](http://heroku.com/)


## UML
![UML-FrontEnd drawio](https://user-images.githubusercontent.com/92248111/146668935-6dd095b0-7195-42f9-8836-b748c4980d85.png)

