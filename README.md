# 🚀 MERN Stack Developer Roadmap

This repository contains my full preparation journey for the **MERN Stack Developer** role, covering advanced **Node.js**, complete **MERN stack**, and interview readiness.

---

## 🧩 Job Role Summary

**Role**: MERN Stack Developer  


---

## 🧠 Learning Tracker

### ✅ Progress Legend
| Status | Meaning         |
|--------|-----------------|
| ⏳     | In Progress     |
| ✅     | Completed       |
| ❌     | Not Started     |

---

## 🧱 Core Topics

| Module | Topics Covered | Status | Notes |
|--------|----------------|--------|-------|
| 1. HTML/CSS/JS | Box model, Event handling, DOM, Closures | ✅ | Built a responsive layout |
| 2. React.js | Hooks, Components, State, Props | ✅ | Todo App + Filtering |
| 3. Node.js | Middleware, Event Loop, Async, Modules | ⏳ | Deep dive in progress |
| 4. Express.js | Routing, REST APIs, Error Handling | ⏳ | Connected to MongoDB |
| 5. MongoDB | CRUD, Schema Design, Aggregation | ❌ | Next after Express |
| 6. Git | Branching, PRs, Conflicts | ✅ | Feature branch merged |
| 7. API Integration | Fetch, Axios, CORS | ❌ | Pending API UI |
| 8. Auth & JWT | Secure routes, Token validation | ❌ | Will be part of final app |
| 9. Deployment | Netlify, Render, .env | ❌ | Final stage |
| 10. Bonus | Testing, Agile, Debugging | ❌ | Optional |

---

## 📁 Projects + Tasks

### ✅ React Todo App
- [x] Add Todo
- [x] Delete Todo
- [x] Filter (All / Done / Pending)
- [ ] Integrate with Express API (⏳)

### ✅ REST API with Express
- [x] User Routes (GET, POST, PUT, DELETE)
- [x] Error Handling
- [ ] Add Authentication (❌)
- [ ] MongoDB Integration (⏳)

---

## 🧪 Test Questions

### JavaScript
```javascript
let a = 10;
function test() {
  console.log(a);
  var a = 5;
}
test(); // Output?
```

```React 
useEffect(() => {
  console.log("Mounted or Updated:", count);
}, [count]);
// What triggers this useEffect?
```

``` Express Middleware
app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});
app.get('/', (req, res) => {
  res.send("Home Page");
});
```


📋 Interview Prep Questions
React
What is the virtual DOM and how does React use it?

Explain the purpose of useEffect().

How does state lifting work between components?

Node.js / Express
What is middleware in Express?

How does the event loop work in Node.js?

Difference between app.use() and app.get()?

MongoDB
Difference between .find() vs .findOne()?

How do you model one-to-many relationships in MongoDB?

What is an aggregation pipeline?

Git
How to resolve a merge conflict?

Difference between git pull and git fetch?

What does git stash do?

🚀 Deployment Plan
 Deploy frontend (React) on Netlify

 Deploy backend (Express) on Render

 Connect MongoDB Atlas

 Setup environment variables using .env

📆 Timeline Plan
Week	Topics
Week 1	HTML, CSS, JS, Git
Week 2	React
Week 3	Node.js
Week 4	Express.js + MongoDB
Week 5	Auth, APIs, Final Project
Week 6	Deployment + Mock Interview


🧾 Notes
All tasks are self-built using custom code (no boilerplate).

This repo serves as my public journal to show consistency and skills.

Advanced Node.js concepts are being updated daily.

I am following a disciplined weekly schedule till the deadline.

🔗 Resources & Tools

💻 MongoDB Atlas

🧰 Postman

🔧 Render

📦 Netlify

📝 MERN Stack Notes

