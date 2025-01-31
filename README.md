# Vanilla JS App

**An example app built with vanilla JS. It presents a lightweight headless frontend and backend. It's developed without frameworks.**

## 📌 Features
- **Vanilla JavaScript + TypeScript** → No frameworks, just native web technologies.
- **Monorepo with npm Workspaces** → Clean separation of frontend & backend.
- **Lightweight & modular** → Separate packages for clients, frontend, and backend.
- **API integration via OpenAPI Generator** → Automatically generated API clients.
- **Testing with Jest** → Unit tests for the frontend.

---

## 🏗 **Project Structure**

```
/my-app
├── /frontend         # Vanilla JS & TypeScript frontend
│   ├── /src          # App source code
│   ├── /dist         # Build target dir
│   ├── /__tests__    # Jest tests
│   ├── index.html    # Main HTML file
│   ├── package.json  # Frontend-specific configuration
├── /backend          # API backend (Node.js with Express)
│   ├── /src          # API endpoints & business logic
│   ├── /data         # JSON database or other resources
│   ├── package.json  # Backend configuration
├── /packages/clients # OpenAPI-generated clients for API interactions
│   ├── /find-me      # Client for the “Find Me” API
│   ├── /find-you     # Client for the “Find You” API
├── package.json      # Root configuration with workspaces
├── README.md         # This file

```

---

## ⚙ **Installation & Setup**
### **🔹 Requirements**
- **Node.js (v18 or later)**
- **npm (v9 or later)**

### **🔹 Setting up the project**
1. **Clone the repository & navigate into the project folder**
```sh
git clone git@github.com:alexanderweigelt/VanillaJsApp.git
cd my-app
```

2. Install dependencies

```
npm install
```

🚀 Development & Usage

🔹 Build the project

```
npm run build
```

•	Builds both the frontend and backend.

🔹 Start the application

```
npm run start
```

•	Starts the frontend and backend simultaneously.

🔹 Start only the frontend

```
npm run start:frontend
```

🔹 Start only the backend

```
npm run start:backend
```

🔹 Run tests

```
npm run test
```

•	Runs unit tests with Jest for the frontend.

🔹 Format code

```
npm run format
```

•	Formats the code using Prettier.

🔹 Linting

```
npm run lint
```

•	Checks the code using ESLint.

🔹 Generate OpenAPI clients

If the API definition has been updated, you can regenerate API clients:

```
npm run openapi-generator
```

## 🎯 Technologies & Tools

| Technology                      | Purpose                                 |
|---------------------------------|-----------------------------------------|
| Vanilla JavaScript + TypeScript | Frontend development without frameworks |
| Node.js + Express               | Backend API                             |
| Jest                            | Testing framework for the frontend      |
| OpenAPI Generator               | Automatic client generation for APIs    |
| Prettier & ESLint               | Code formatting and linting             |
| npm Workspaces                  | Monorepo management                     |


## ⚠ Known Issues
1.	Unit tests are currently failing

- The Jest setup is not correctly configured.
- Mocking dependencies (e.g., @my-client/find-me and @my-client/find-you) is not working properly.
- Some private class members cannot be accessed directly in tests.

2.	Jest configuration issues

- Jest may not be recognizing TypeScript properly.
- Additional setup might be needed to resolve module paths for the monorepo structure.

### Next Steps:

- Debug Jest configuration to properly handle TypeScript and module resolution.
- Improve mock handling for external dependencies.
- Adjust test strategy to correctly access private members where necessary.
