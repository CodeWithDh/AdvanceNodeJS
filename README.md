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


### Preparation Questions 
```
Psquare Interview high posibility questions 


1. What is the difference between id and class in HTML?
2. How does the box model work in CSS?
3. What is event bubbling in JavaScript?
4. What is the difference between functional and class components?
5. Explain useEffect() and its dependency array.
6. What is the virtual DOM?

- How does state lifting work in React?

🧪 Task:
Build a simple Todo App with CRUD functionality using React. Add filtering (All, Completed, Pending) using useState and useEffect.

1. How does middleware work in Express?
2. What is the difference between app.use() and app.get()?
3. How does Node handle asynchronous code?
4. What is event loop in Node.js?

🧪 Task:
Build a REST API to manage users (CRUD). Each user has a name, email, and phone number. Include proper status codes and JSON responses.

1. What is the difference between find() and findOne()?
2. How do you perform aggregation in MongoDB?
3. How do you model relationships in MongoDB?

🧪 Task:
Create a MongoDB schema for an e-commerce app with products, users, and orders. Include relationships using references.

1. What is the difference between git pull and git fetch?
2. How do you resolve merge conflicts?
3. What does git stash do?

🧪 Task:
Push a MERN app to GitHub, create a new branch for “login feature,” merge it into main with a pull request.

1. How do you handle errors in API calls?
2.What is CORS and how to handle it in Express?
3. How do you test APIs with Postman?

🧪 Task:
Integrate your React Todo App with your Express API. Store todos in MongoDB, and perform all CRUD via backend API.

1. Difference between authentication and authorization?
2. How does JWT work?
3. How do you protect routes in Express?

🧪 Task:
Implement login and signup functionality with JWT tokens and protected dashboard route in React.

1. How do you deploy a full-stack app?
2. What is environment variable and how do you manage it in deployment?

🧪 Task:
Deploy your MERN app with frontend on Netlify and backend on Render. Connect to MongoDB Atlas. Use .env for secrets.

1. Agile & Scrum understanding
2. Unit Testing using Jest or Mocha
3. Debugging skills using Chrome DevTools
4. How do you handle state management across multiple components in React?
5. What is the difference between PUT and PATCH methods in REST?
6. How do you design a schema for nested comments in MongoDB?
```

