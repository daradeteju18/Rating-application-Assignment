# Rating Application Assignment

This is a full-stack web application built as part of the **FullStack Intern Coding Challenge**.  
The application allows users to register, log in, browse stores, and submit ratings for them.  
Different user roles (System Administrator, Normal User, Store Owner) have distinct functionalities.

---

## 🚀 Tech Stack
- **Frontend:** React.js  
- **Backend:** Express.js (Node.js)  
- **Database:** PostgreSQL / MySQL  
- **Version Control:** Git & GitHub  

---

## 🔑 Features

### 👨‍💼 System Administrator
- Add new stores, users (normal/admin).
- Dashboard with:
  - Total users
  - Total stores
  - Total ratings
- Manage user and store listings with filters and sorting.

### 👤 Normal User
- Register & login.  
- Update password.  
- View all registered stores.  
- Search by store name or address.  
- Submit/modify ratings (1–5).  

### 🏪 Store Owner
- Login & update password.  
- View all ratings given to their store.  
- See average rating.  

---

## ✅ Form Validations
- **Name:** 20–60 characters  
- **Address:** Up to 400 characters  
- **Password:** 8–16 characters, must include 1 uppercase & 1 special character  
- **Email:** Must be valid  

---

## 📂 Project Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/daradeteju18/Rating-application-Assignment.git
   cd Rating-application-Assignment

--- 

## Backend Setup

cd backend


--- 

## Frontend Setup

-cd frontend

-npm install

-npm run dev

--- 

## Database

Create a PostgreSQL/MySQL database.

Run the migration scripts to set up tables.

---

## 📊 Database Schema (Example)

Users: id, name, email, password, address, role

Stores: id, name, email, address

Ratings: id, user_id, store_id, rating

---

## 🙌 Author

👩‍💻 Tejashri Krushna Darade
B.Tech Computer Engineering Student
