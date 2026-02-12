# Full-Stack Authentication System - Backend (NestJS)

This is the backend repository for the Full-Stack Authentication Onboarding Task. It provides a secure, production-ready RESTful API built with NestJS, featuring JWT-based authentication, password hashing, and a cloud-hosted Aiven MySQL database.



## 🚀 Technical Features & Criteria Met

### Security & Authentication
* **JWT Implementation:** Generates and validates JSON Web Tokens (`@nestjs/jwt`) with a strict **24-hour expiration** window.
* **Password Hashing:** Utilizes `bcrypt` to securely salt and hash passwords before saving them to the database.
* **Protected Routes:** Implements a custom `JwtAuthGuard` to restrict access to the `/users/profile` endpoints.

### Architecture & Validation
* **Data Transfer Objects (DTOs):** Strictly types incoming request payloads (e.g., `RegisterDto`).
* **Input Validation:** Leverages `class-validator` and `class-transformer` for robust server-side validation (e.g., enforcing `@IsEmail()` and `@MinLength()` constraints).
* **Proper Error Handling:** Uses built-in NestJS HTTP Exceptions (`UnauthorizedException`, `BadRequestException`, `NotFoundException`) to provide clear, actionable feedback to the client.
* **ORM:** Utilizes `TypeORM` for safe, injection-resistant database queries.

## 🛠️ Tech Stack
* **Framework:** NestJS
* **Database:** MySQL (Hosted on Aiven Cloud)
* **ORM:** TypeORM
* **Security:** Passport.js, JWT, bcrypt
* **Language:** TypeScript

## 🔌 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/auth/register` | Registers a new user with `firstName`, `lastName`, `email`, and `password`. | No |
| `POST` | `/auth/login` | Authenticates a user and returns a JWT `access_token` and user profile. | No |
| `GET` | `/users/profile` | Retrieves the authenticated user's profile details. | **Yes** (JWT) |
| `PUT` | `/users/profile` | Updates the authenticated user's profile details. | **Yes** (JWT) |

## ⚙️ Local Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install