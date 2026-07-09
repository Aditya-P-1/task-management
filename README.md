## 🛠️ Project Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd task-management
```

---

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the `backend` directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/task_management"
PORT=5000
```

Run database migrations:

```bash
npx prisma migrate dev
```

Seed the database with sample tasks:

```bash
npm run seed
```

Start the backend server:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

---

### 3. Frontend Setup

Open a new terminal.

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

### 4. Application

After starting both servers:

* Frontend: `http://localhost:5173`
* Backend API: `http://localhost:5000`

The application is now ready to use.
