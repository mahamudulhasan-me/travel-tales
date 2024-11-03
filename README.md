# 🌍 Travels Tales - Travel Tips & Destination Guides

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue.svg)](https://travel-tales-client.vercel.app/)  
[![Node.js](https://img.shields.io/badge/Node.js-Server-green.svg)](https://github.com/mahamudulhasan-me/travel-tales-server.git)  
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-green.svg)](https://www.mongodb.com/)  
[![JWT](https://img.shields.io/badge/Auth-JWT-orange.svg)](https://jwt.io/)  
[![Stripe](https://img.shields.io/badge/Payment-Stripe-blue.svg)](https://stripe.com/)

## **Project Overview**

Welcome to **Travel Tales**, a dynamic platform designed for travel enthusiasts to share their stories, exchange valuable tips, and connect with fellow travelers! 🌍✈️ With **user authentication**, **social features**, and **premium content access**, this app offers a vibrant community experience where travelers can discover and contribute travel guides, tips, and experiences. Whether you're looking for your next adventure or sharing your latest one, Travel Tales has you covered.

### **Key Features**:

- **User Registration & Authentication**: Secure user login and registration via JWT.
- **Personalized Profiles**: Share stories, update profiles, and connect with others.
- **Rich Text Editor**: Create detailed travel guides with formatting and media attachments.
- **Upvotes & Comments**: Discover popular posts and engage with the community through votes and comments.
- **Premium Content**: Verified users can access exclusive travel guides and tips.
- **Payment Integration**: Pay for premium content and verification using Stripe or Aamarpay.
- **Dynamic News Feed**: Infinite scrolling, upvotes, and sorting to highlight the best content.

---

## **Tech Stack**

- **Frontend**: Next.js, ShadnCN Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL)
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Integration**: Aamarpay
- **Hosting**: Vercel (Frontend)

---

## **Project Setup**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mahamudulhasan-me/travel-tales-server.git
   cd travel-tales-server
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` File**:
   Add your environment variables for MongoDB, JWT Secret, Stripe, and Aamarpay configuration.

   ```env
   NEXT_PUBLIC_BASE_API = https://travel-tales-server.vercel.app/api
   NEXT_PUBLIC_IMAGEBB_API_KEY = api key
   ```

4. **Run the Application**:

   ```bash
   npm start
   ```

5. **Visit the Live App**:  
   [Travel Tales Live](https://travel-tales-client.vercel.app/)

---

## **Features in Detail**

### 1. **User Authentication**

- JWT-based secure login and registration.
- Profile management with uploadable profile pictures.

### 2. **Rich Text Editor**

- Users can create and share detailed travel stories with text formatting and image attachments.

### 3. **Social Engagement**

- Upvote, comment, and follow/unfollow other users.

### 4. **Premium Content Access**

- Verified users can access exclusive travel content with Stripe or Aamarpay payment integration.

### 5. **Admin Dashboard**

- Manage users, posts, and premium content access, with detailed graphs on platform activity.

### 6. **News Feed**

- Infinite scrolling, category filtering, and sorting by upvotes to highlight top travel posts.

---

## **Contributing**

Contributions are welcome! Feel free to fork this project and submit a pull request. Please ensure your contributions align with the goals of the project and follow good coding practices.

---

## **License**

This project is licensed under the MIT License.

---

**Let's Explore the World, One Story at a Time!**  
🌍✈️ Share your travel experiences with the world, discover hidden gems, and connect with fellow travelers through Travel Tales.

**Links**:

- **[Live Site](https://travel-tales-client.vercel.app/)**
- **[Backend Repository](https://github.com/mahamudulhasan-me/travel-tales-server.git)**

---
