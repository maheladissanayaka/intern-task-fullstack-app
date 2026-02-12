# intern-task-fullstack-app
A secure full-stack authentication system built with NestJS, React, TypeORM, and Tailwind CSS. Features JWT login, persistent sessions, and a mobile-responsive dashboard.

# Full-Stack Authentication System (Intern Onboarding Task)

A robust, enterprise-grade authentication system built as a monorepo. This project features a secure **NestJS** REST API backend and a responsive **React + Vite** frontend dashboard, demonstrating secure JWT authentication, state management, and mobile-first design.

## Project Structure

* **`/backend`**: NestJS API with TypeORM & MySQL (Aiven Cloud).
* **`/frontend`**: React SPA with Tailwind CSS & Context API.

---

## Backend Features (NestJS)

The backend provides a secure, production-ready RESTful API.

### Security & Authentication
* **JWT Implementation:** Generates and validates JSON Web Tokens (`@nestjs/jwt`) with a strict **24-hour expiration** window.
* **Password Hashing:** Utilizes `bcrypt` to securely salt and hash passwords before saving them to the database.
* **Protected Routes:** Implements a custom `JwtAuthGuard` to restrict access to sensitive endpoints (e.g., User Profile).

### Architecture & Validation
* **Data Transfer Objects (DTOs):** Strictly types incoming request payloads (e.g., `RegisterDto`) to prevent malformed data.
* **Input Validation:** Leverages `class-validator` and `class-transformer` for robust server-side validation (e.g., enforcing `@IsEmail()` and `@MinLength()` constraints).
* **Proper Error Handling:** Uses built-in NestJS HTTP Exceptions (`UnauthorizedException`, `BadRequestException`, `NotFoundException`) to provide clear feedback.
* **ORM:** Utilizes **TypeORM** for safe, injection-resistant database queries.

---

## Frontend Features (React + Vite)

The frontend is a blazing-fast Single Page Application (SPA) focusing on user experience and security.

### State Management & Routing
* **Custom Authentication Hook:** Built a global `useAuth` hook using the **React Context API** to manage user state across the entire application.
* **JWT Persistence:** Securely stores the JWT token and user profile in `localStorage` for instant state hydration on page refresh.
* **Protected Routes:** Implemented a `<ProtectedRoute>` gatekeeper component that automatically intercepts unauthenticated users and redirects them to login.
* **Axios Interceptors:** Configured a custom Axios instance to automatically attach the `Authorization: Bearer <token>` header to all outgoing API requests.

### UI / UX Design
* **Mobile-First Responsiveness:** Built entirely with **Tailwind CSS v4**, utilizing dynamic grid layouts, responsive padding, and text truncation.
* **Interactive Sidebar:** Features a mobile-responsive sidebar with a dark-mode overlay backdrop and slide-in animations.
* **Global Notifications:** Integrated `react-hot-toast` to provide elegant, animated success and error alerts.
* **Confirmation Modals:** Custom Tailwind confirmation modal for "Sign Out" actions to prevent accidental logouts.
* **Loading States:** Forms feature disabled states and dynamic button text (e.g., "Signing in...") during API calls.

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 18, Vite, Tailwind CSS v4, Axios, React Router DOM v6, React Hot Toast, Lucide React |
| **Backend** | NestJS, TypeScript, Passport.js, JWT, Bcrypt |
| **Database** | MySQL (Hosted on Aiven Cloud), TypeORM |

---

## API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/auth/register` | Registers a new user with `firstName`, `lastName`, `email`, and `password`. | No |
| `POST` | `/auth/login` | Authenticates a user and returns a JWT `access_token` and user profile. | No |
| `GET` | `/users/profile` | Retrieves the authenticated user's profile details. | **Yes** (JWT) |
| `PUT` | `/users/profile` | Updates the authenticated user's profile details. | **Yes** (JWT) |

---

## ⚙️ Local Setup Instructions

Follow these steps to run the full application locally.

### 1. Backend Setup
Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install