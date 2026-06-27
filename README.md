# 🔐 User Auth System

A simple client-side **Sign Up & Login** web application built with vanilla HTML, CSS, and JavaScript — powered by a REST API backend via [MockAPI](https://mockapi.io).

---
## 🌐 Live Demo
[Click here to view the live demo](https://elyasforghani.github.io/signup-login/)
<img width="1589" height="761" alt="Image" src="https://github.com/user-attachments/assets/59e57439-e4f6-4166-8619-5e22a1d7f2a9" />

<img width="1566" height="723" alt="Image" src="https://github.com/user-attachments/assets/7f675e5b-9c63-4d40-a6c8-3934b866ada3" />

<img width="1050" height="694" alt="Image" src="https://github.com/user-attachments/assets/2ed88163-27f3-4789-a2ff-24a6f484c2f8" />

## 📋 Features

- **Sign Up** — Register a new user with full name, email, age, and password
- **Log In** — Authenticate using email and password with API lookup
- **Remember Me** — Persistent login session using cookies (via `js.cookie`)
- **Edit Profile** — Update your account details after logging in
- **Delete Account** — Permanently remove your account from the database
- **Log Out** — Clear session cookies and return to the login screen

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling |
| JavaScript (ES6+) | Logic & DOM manipulation |
| Fetch API | HTTP requests (GET, POST, PUT, DELETE) |
| MockAPI | Cloud-hosted REST API / database |
| js.cookie | Cookie management for "Remember Me" |

---

## 📁 Project Structure

```
├── index.html           # Sign Up page
├── index2login.html     # Login & user dashboard page
├── assets/
│   ├── stylesheet/
│   │   ├── master.css   # Styles for sign up page
│   │   └── master2.css  # Styles for login page
│   ├── script/
│   │   ├── master.js    # Sign up logic
│   │   ├── master2.js   # Login, edit, delete logic
│   │   └── js.cookie.min.js  # Cookie library
│   └── img/
│       └── 1.png        # Logo
```

---

## 🚀 How It Works

### Sign Up (`index.html` + `master.js`)
1. The user fills in their **Full Name**, **Email**, **Age**, and **Password**
2. On submit, a `POST` request is sent to the MockAPI endpoint
3. The new user is stored in the cloud database

### Login (`index2login.html` + `master2.js`)
1. The user enters their **Email** and **Password**
2. A `GET` request queries the API with those credentials
3. On success, the user's profile is displayed in a table
4. If **Remember Me** is checked, credentials are saved in cookies for 7 days
5. On next visit, the app reads the cookies and logs in automatically

### Edit / Delete
- **Edit**: Pre-fills a popup form with current user data and sends a `PUT` request
- **Delete**: Sends a `DELETE` request and logs the user out

---

## ⚙️ Setup & Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/Elyasforghani/Elyasforghani.git
   ```
2. Open `index.html` in your browser to get started
3. No build step or server required — runs entirely in the browser

> **Note:** The project uses a shared MockAPI endpoint. You can replace the `myUrl` / `mytoken` variable in the JS files with your own MockAPI project URL for a private database.

---

## 📸 Pages

| Page | Description |
|---|---|
| `index.html` | Sign Up form |
| `index2login.html` | Login form + user dashboard after authentication |

---

## 📬 Contact

Made with ❤️ by **Elyas Forghani**

[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/elyasforqani.dev)
[![GitHub](https://img.shields.io/badge/GitHub-%23181717.svg?style=flat&logo=github&logoColor=white)](https://github.com/Elyasforghani/Elyasforghani)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alireza-forghani-b4746b263)

---

© 2026 Elyas Forghani. All rights reserved.
