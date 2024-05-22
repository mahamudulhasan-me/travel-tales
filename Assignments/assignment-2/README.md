# Product Management API with TypeScript, Mongoose, and Zod

This project is an Express application developed with TypeScript, integrating MongoDB with Mongoose for effective data management. It ensures data integrity through validation using Zod.

## Preview - [Live Site](https://apollo-assignment-2-taupe.vercel.app/)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Product Management](#product-management)
  - [Order Management](#order-management)
- [Coding Tools and Libraries](#coding-tools-and-libraries)

## Features

- Create, retrieve, update, and delete products.
- Create and retrieve orders.
- Search for products by a search term.
- Validate incoming data using Zod.
- Ensure data integrity in inventory management when orders are created.

## Installation

To clone and install this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clonehttps://github.com/mahamudulhasan-me/apollo-assignment-2.git
   cd apollo-assignment-2
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:

   ```
   MONGODB_URI= your_mongodb_uri
   PORT= your_port_number
   ```

4. **Run the application:**
   ```bash
   npm run dev
   ```

## Usage

The application exposes several API endpoints to manage products and orders. Below are the details on how to use these endpoints.

## API Endpoints

### Product Management

1. **Create a New Product**

   - **Endpoint:** `/api/products`
   - **Method:** `POST`
   - **Request Body:** Provide product data as per the defined structure.

   ```json
   {
     "name": "iPhone 13",
     "description": "A sleek and powerful smartphone with cutting-edge features.",
     "price": 999,
     "category": "Electronics",
     "tags": ["smartphone", "Apple", "iOS"],
     "variants": [
       {
         "type": "Color",
         "value": "Midnight Blue"
       },
       {
         "type": "Storage Capacity",
         "value": "256GB"
       }
     ],
     "inventory": {
       "quantity": 50,
       "inStock": true
     }
   }
   ```

2. **Retrieve a List of All Products**

   - **Endpoint:** `/api/products`
   - **Method:** `GET`
   - **Response:** Returns a list of all products.

3. **Retrieve a Specific Product by ID**

   - **Endpoint:** `/api/products/:productId`
   - **Method:** `GET`
   - **Response:** Returns the product with the specified ID.

4. **Update Product Information**

   - **Endpoint:** `/api/products/:productId`
   - **Method:** `PUT`
   - **Request Body:** Provide updated product data.

5. **Delete a Product**

   - **Endpoint:** `/api/products/:productId`
   - **Method:** `DELETE`
   - **Response:** Confirms the deletion of the product.

6. **Search a Product**
   - **Endpoint:** `/api/products?searchTerm=term`
   - **Method:** `GET`
   - **Response:** Returns products matching the search term.

### Order Management

1. **Create a New Order**

   - **Endpoint:** `/api/orders`
   - **Method:** `POST`
   - **Request Body:** Provide order data.

   ```json
   {
     "email": "level2@programming-hero.com",
     "productId": "5fd67e890b60c903cd8544a3",
     "price": 999,
     "quantity": 1
   }
   ```

2. **Retrieve All Orders**

   - **Endpoint:** `/api/orders`
   - **Method:** `GET`
   - **Response:** Returns a list of all orders.

3. **Retrieve Orders by User Email**
   - **Endpoint:** `/api/orders?email=user@example.com`
   - **Method:** `GET`
   - **Response:** Returns orders for the specified user email.

## Coding Tools and Libraries

- **Express:** Web framework for Node.js.
- **Mongoose:** ODM for MongoDB.
- **Zod:** TypeScript-first schema declaration and validation library.
- **TypeScript:** JavaScript with syntax for types.
- **ESLint:** Linting tool for identifying and reporting on patterns in JavaScript.
