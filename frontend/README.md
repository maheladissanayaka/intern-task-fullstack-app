
---

### 2. Frontend README
Create a file named `README.md` inside your `frontend` folder and paste this in:

```markdown
# Full-Stack Authentication System - Frontend (React + Vite)

This is the frontend repository for the Full-Stack Authentication Onboarding Task. It is a blazing-fast, Single Page Application (SPA) built with React and Vite, featuring a highly responsive dashboard layout, persistent authentication state, and modern UI/UX practices.



## 🚀 Technical Features & Criteria Met

### State Management & Routing
* **Custom Authentication Hook:** Built a global `useAuth` hook using the React Context API to manage user state across the entire application.
* **JWT Persistence:** Securely stores the JWT token and user profile in `localStorage` for instant state hydration on page refresh.
* **Protected Routes:** Implemented a `<ProtectedRoute>` gatekeeper component that automatically intercepts unauthenticated users and bounces them back to the login screen.
* **Axios Interceptors:** Configured a custom Axios instance to automatically attach the `Authorization: Bearer <token>` header to all outgoing API requests.

### UI / UX Design
* **Mobile-First Responsiveness:** Built entirely with **Tailwind CSS v4**, utilizing dynamic grid layouts, responsive padding, and text truncation.
* **Interactive Sidebar:** Features a mobile-responsive sidebar with a dark-mode overlay backdrop and slide-in animations.
* **Global Notifications:** Integrated `react-hot-toast` to provide elegant, animated success and error alerts in the top right corner.
* **Confirmation Modals:** Implemented a custom Tailwind confirmation modal for the "Sign Out" action to prevent accidental logouts.
* **Loading States:** All forms feature disabled states and dynamic button text (e.g., "Signing in...") during API calls.

## 🛠️ Tech Stack
* **Build Tool:** Vite
* **Library:** React 18
* **Styling:** Tailwind CSS v4
* **Routing:** React Router DOM v6
* **HTTP Client:** Axios
* **Icons:** Lucide React
* **Notifications:** React Hot Toast

## ⚙️ Local Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
