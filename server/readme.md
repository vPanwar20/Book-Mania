# Book-Mania
API That Perform CRUD Operation For Your Books Management

### Setup And Installation -

1. Clone This Repository.
3. Enter Following Commands in your preferred CLI -
    ```js
        cd server/
        npm install
        npx nodemon server
              or
        node server
    ```

### Routes - 
1. `/read_books` to get all available books (Type: **GET**)
2. `/read_book/id` to get specific book (Type: **GET**) [id - Mongodb Generated]
3. `/add_book` to add a new book (Type: **POST**)
4. `/delete_book/id` to remove a book (Type: **DELETE**)
5. `/update_book/id` to update a book (type: **PUT**)

### Things Required For Adding A New Book
- name: String (**required**)
- author: String
- imageURL: String (**Default Available**)
- price: Number
- pageCount: Number
- field: String


> PORT : 4000

```Note: 
- CORS Issue is Being Handled By this API
- Use Thunder Client For VSCode User Or PostMan in General For Playing With API
```
