# 📦 Node.js Core Modules Practice

This repository is a personal learning project to explore and understand **Node.js core (built-in) modules** such as `fs`, `path`, `url`, and `http`. It includes hands-on code examples for file handling, path manipulation, URL parsing, and basic HTTP server creation.

> ✅ I plan to expand this project by adding **external NPM modules** like `express`, `mongoose`, `dotenv`, and more in upcoming updates.

---

## 📁 Project Structure

.
├── fileSystem.js # File operations using 'fs' (read/write/append)
├── path.mjs # Path utilities like basename, dirname, extname
├── url.mjs # URL parsing and basic server with routing
├── package.json # Project configuration and dependencies

yaml
Copy
Edit

---

## 🔧 Modules Covered

### ✅ Core/Built-in Modules (Node.js)
| Module     | Description |
|------------|-------------|
| `fs`       | File system operations: create, read, write, append |
| `path`     | Handles file paths and extensions |
| `url`      | Parses URLs and extracts query, hostname, etc. |
| `http`     | Creates a simple server to handle routes |
| `v8`       | Used briefly with `queryObjects` (for deeper inspection) |

---

## 📝 File Descriptions

### `fileSystem.js`
- Creates `hello.txt` with some text.
- Reads and prints file content with string manipulations.
- Copies an image file using buffer read/write.
- Appends text to an existing file.

### `path.mjs`
- Demonstrates how to extract:
  - File name (`basename`)
  - Directory name (`dirname`)
  - File extension (`extname`)

### `url.mjs`
- Parses a custom URL using the `url` module.
- Starts an HTTP server that:
  - Returns a list of users at `/user`
  - Returns a single user by `id` at `/user?id=1`
  - Handles 404 errors for unknown routes

---

## 📦 NPM Dependency

```json
"dependencies": {
  "nodemon": "^3.1.10"
}
nodemon is used to automatically restart the server on file changes.
More NPM packages (like express, jsonwebtoken, dotenv, etc.) will be added soon.

🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yashswi23/Backend-modules

cd your-repo-name
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run Files
Run .js file:

bash
Copy
Edit
node fileSystem.js
Run .mjs files (ES modules):

bash
Copy
Edit
node path.mjs
node url.mjs
Run using nodemon (auto-reload):

bash
Copy
Edit
npx nodemon fileSystem.js
🔮 Upcoming Additions
 REST APIs using express

 MongoDB integration with mongoose

 Authentication using jsonwebtoken

 Config management via dotenv

 File upload using multer

 Input validation using express-validator

 Logging with morgan or winston

👩‍💻 Author
Yashswi Sharma
💬 Passionate about backend development and learning Node.js ecosystem.

Connect with me for suggestions or collaborations!

📄 License
This project is licensed under the ISC License.

