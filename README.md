## Mobile App: Satinder Blog App

### <img width="1920" height="1080" alt="Screenshot (871)" src="https://github.com/user-attachments/assets/624cf7b9-f00b-439f-8b5d-e6e982aebaf8" />

**Full-Stack 'Satinder Blog App' using React Native and the MERN stack (MongoDB, Express, React Native, Node.js)**

---

### ✅ **1. Project Setup**

#### 🔹 Backend (Node.js + Express + MongoDB)

- Init backend folder
- Connect to MongoDB (Mongoose)
- Auth Routes: Sign Up, Login (JWT-based)
- Blog Routes: Create, Read, Update, Delete
- User Routes: Get profile, update user

#### 🔹 Frontend (React Native)

- Setup with Expo
- Folder structure for screens/components/services
- React Navigation (Stack + Drawer)
- Axios for API calls
- Context API / Redux for state management (user/auth)

---

## ✅ **2. App Screens and Routes**

| Screen Name           | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| **Landing Screen**    | Entry screen for first-time users. Option to Login / Sign up |
| **Login/Sign Up**     | Authentication with email & password                         |
| **Home Screen**       | Lists all blogs (with author name, date, preview)            |
| **Blog Detail**       | View full blog, author info                                  |
| **Edit/Delete**       | If blog created by current user, can edit/delete             |
| **Profile Screen**    | View and update profile info, user’s blogs list              |
| **Create Blog**       | Compose a new blog post (title, content, image)              |
| **Drawer Navigation** | For Home, Profile, Create Blog, Logout, etc.                 |

---

## ✅ **3. Backend Setup**

### 🔸 `backend/` folder structure:

```
backend/
├── controllers/
│   ├── authController.js
│   ├── blogController.js
│   └── userController.js
├── models/
│   ├── User.js
│   └── Blog.js
├── routes/
│   ├── auth.js
│   ├── blogs.js
│   └── users.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── db.js
├── .env
├── server.js
└── package.json
```

### ✅ Stack Used:

- `express`, `mongoose`, `jsonwebtoken`, `bcryptjs`, `cors`, `dotenv`

---

## ✅ **4. React Native App Setup**

### 🔸 `frontend/` (React Native via Expo)

```
frontend/
├── App.js
├── navigation/
│   ├── AuthStack.js
│   ├── DrawerNavigator.js
│   └── MainStack.js
├── screens/
│   ├── LandingScreen.js
│   ├── LoginScreen.js
│   ├── SignupScreen.js
│   ├── HomeScreen.js
│   ├── BlogDetailScreen.js
│   ├── CreateBlogScreen.js
│   ├── EditBlogScreen.js
│   └── ProfileScreen.js
├── components/
│   └── BlogCard.js
├── context/
│   └── AuthContext.js
├── services/
│   └── api.js
├── assets/
└── package.json
```

---

## ✅ **5. Backend API Design**

### 🔹 Auth

- `POST /api/auth/signup`
- `POST /api/auth/login`

### 🔹 Blogs

- `GET /api/blogs/` → Get all blogs
- `POST /api/blogs/` → Create new blog (auth required)
- `GET /api/blogs/:id` → Get specific blog
- `PUT /api/blogs/:id` → Edit blog (auth & owner only)
- `DELETE /api/blogs/:id` → Delete blog (auth & owner only)

### 🔹 Users

- `GET /api/users/me` → Get current user profile
- `PUT /api/users/me` → Update user profile

---

## ✅ **6. Key Features**

| Feature           | Description                                            |
| ----------------- | ------------------------------------------------------ |
| Auth              | JWT-based secure login/signup                          |
| Blog Management   | Only author can edit/delete                            |
| Profile           | Shows user details + user’s blogs                      |
| Drawer Navigation | For easy access to screens                             |
| Clean UI          | Use components, consistent design, modern fonts/colors |
| Validation        | Frontend and backend input checks                      |
| Persistent Auth   | Token saved in async storage (React Native)            |
| Error Handling    | Consistent API error messages                          |
| Optimistic UI     | Fast UI updates before server confirms                 |

---

## ✅ **7. UI/UX Notes**

- Use **React Native Paper** or **NativeBase** or **Shadcn for RN** for UI components
- Use **Lottie** animations in Landing
- Use **Drawer Navigation** from `@react-navigation/drawer`
- Clean typography with **Google Fonts RN**
- Add **loading spinners**, **toasts/snackbars**, etc.

---

Here's a **summary** of my **React Native Blog App (MERN Stack)** project:

---

## 📝 **App Overview: Satinder Blog App**

A modern mobile blog application where users can create, read, update, and delete blog posts. It supports authentication, user profiles, and a clean, intuitive user interface with drawer navigation.

---

## 🔧 **Tech Stack**

### 🖥️ **Frontend (Mobile App) - React Native**

- **React Native (Expo)**
- **React Navigation** (Stack + Drawer)
- **Axios** (HTTP requests)
- **Context API or Redux** (Global state/auth)
- **AsyncStorage** (Token persistence)
- **UI Library:** React Native Paper / NativeBase / Custom
- **Lottie / Animated Components** (Optional, for visual appeal)

### 🌐 **Backend - Node.js / Express**

- **Node.js + Express**
- **MongoDB** with **Mongoose**
- **JWT Authentication**
- **bcryptjs** for password hashing
- **dotenv, cors, morgan**

---

## 🧱 **Backend API Structure**

### 🔐 Auth

- `POST /api/auth/signup` – Create account
- `POST /api/auth/login` – Login and get JWT

### 📝 Blogs

- `GET /api/blogs` – Get all blogs
- `POST /api/blogs` – Create a new blog
- `GET /api/blogs/:id` – Blog details
- `PUT /api/blogs/:id` – Edit blog
- `DELETE /api/blogs/:id` – Delete blog

### 👤 Users

- `GET /api/users/me` – Get user profile
- `PUT /api/users/me` – Update user profile

---

## 📱 **Screens & Navigation**

### 🔹 **Public Screens**

- **Landing Screen** – Intro screen with animation/branding
- **Login / Sign Up** – Auth forms

### 🔹 **Protected Screens (with Drawer)**

- **Home Screen** – Blog list (all users)
- **Blog Detail Screen** – Full view of a blog
- **Create Blog Screen** – Write a new blog
- **Edit Blog Screen** – Edit your own blog
- **Profile Screen** – View/edit profile & see your blogs

### 🔹 **Drawer Items**

- Home
- Create Blog
- Profile
- Logout

---

## 🧩 **Key Features**

| Feature                  | Description                                     |
| ------------------------ | ----------------------------------------------- |
| **Authentication**       | JWT + Secure storage                            |
| **Blog CRUD**            | Create, Read, Update, Delete blogs              |
| **User Profiles**        | View & update personal info                     |
| **Drawer Navigation**    | Quick access to key screens                     |
| **Auth Guarding**        | Redirect unauthenticated users                  |
| **Clean UI/UX**          | Responsive, mobile-optimized                    |
| **Persistent Login**     | JWT stored in AsyncStorage                      |
| **Only Author Controls** | Edit/Delete buttons visible only to blog owners |
| **Error Handling**       | Both frontend & backend validation              |

---

## 📦 Folder Structure (Preview)

### 🔹 Backend:

```
backend/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── middleware/
  └── server.js
```

### 🔹 Frontend:

```
frontend/
  ├── screens/
  ├── navigation/
  ├── components/
  ├── context/
  └── App.js
```

---

✅ This setup ensures **clean separation of concerns**, **scalability**, and a **modern mobile experience**.

---
