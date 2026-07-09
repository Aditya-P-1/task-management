<img width="1465" height="913" alt="Screenshot from 2026-07-09 12-08-42" src="https://github.com/user-attachments/assets/c1d5619c-518c-48ef-83e7-5e3223759bd8" />
<img width="1465" height="913" alt="Screenshot from 2026-07-09 12-08-37" src="https://github.com/user-attachments/assets/8fdb4dc8-8a73-49b5-a896-ebf852d2d597" />
<img width="1465" height="913" alt="Screenshot from 2026-07-09 12-08-31" src="https://github.com/user-attachments/assets/7116b585-376d-44b3-8c18-4f8c3daf1b4e" />
<img width="1465" height="913" alt="Screenshot from 2026-07-09 12-08-14" src="https://github.com/user-attachments/assets/0f4f6359-bc0b-41dc-aedc-dcc9d2008c4d" />
<img width="1465" height="913" alt="Screenshot from 2026-07-09 12-07-59" src="https://github.com/user-attachments/assets/bed3cd28-132c-4bad-a321-fd46bdf063ea" />
<img width="1465" height="913" alt="Screenshot from 2026-07-09 12-07-50" src="https://github.com/user-attachments/assets/362c43af-1a06-4b13-82f4-22517dd1bf6a" />
<img width="1465" height="913" alt="Screenshot from 2026-07-09 12-07-35" src="https://github.com/user-attachments/assets/342108e8-da2d-4c29-b1a3-f04c4f5e86ed" />
## 🛠️ Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Aditya-P-1/task-management.git
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
