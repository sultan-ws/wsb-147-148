import React, { useState } from 'react'
import Faq from '../components/Faq';

const data = [
    {
        question: "What is JavaScript and why is it important?",
        answer: "JavaScript is a high-level, interpreted programming language used to create dynamic and interactive web pages. It enables developers to add features like animations, form validations, and real-time content updates without needing to reload the page. JavaScript is widely supported by all modern browsers and plays a key role in front-end as well as back-end development through frameworks like React, Angular, and Node.js."
    },
    {
        question: "How does Node.js work, and what makes it different from traditional server-side technologies?",
        answer: "Node.js is a runtime environment that allows JavaScript to be executed on the server side. It uses a non-blocking, event-driven architecture, making it efficient for handling multiple simultaneous connections. Unlike traditional server-side technologies like PHP or ASP.NET, which create a separate thread for each request, Node.js operates on a single-threaded event loop, improving performance and scalability for applications like chat applications, APIs, and real-time services."
    },
    {
        question: "What are promises in JavaScript and how do they work?",
        answer: "A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, resolved (fulfilled), and rejected. Promises help manage asynchronous code more effectively than callbacks, avoiding 'callback hell.' Methods like `.then()`, `.catch()`, and `.finally()` allow chaining operations, improving readability and maintainability of the code."
    },
    {
        question: "What is the difference between `let`, `const`, and `var` in JavaScript?",
        answer: "In JavaScript, `var` is function-scoped and allows re-declaration within the same function. However, `let` and `const` are block-scoped and do not allow re-declaration within the same block. `const` is used for variables whose values should not change after assignment, whereas `let` is used when reassignment is necessary. Using `let` and `const` improves code readability and prevents unintended variable overwrites."
    },
    {
        question: "What is REST API, and how does it work?",
        answer: "A REST API (Representational State Transfer) is a web service that allows communication between client and server using HTTP methods such as GET, POST, PUT, and DELETE. It follows REST principles, meaning it is stateless and uses standard URIs to access resources. REST APIs are widely used in web and mobile applications for data exchange and are often built with JSON or XML as the data format."
    },
    {
        question: "What is middleware in Express.js, and why is it useful?",
        answer: "Middleware in Express.js refers to functions that execute during the request-response cycle. Middleware can perform tasks like logging, authentication, error handling, and modifying request or response objects. Express.js allows developers to use built-in, third-party, or custom middleware to improve modularity and maintainability in web applications."
    },
    {
        question: "How does authentication work in a web application?",
        answer: "Authentication in web applications involves verifying a user's identity before granting access to protected resources. Common authentication methods include session-based authentication (storing user sessions on the server), token-based authentication (such as JSON Web Tokens or JWTs), and OAuth for third-party authentication (e.g., Google or Facebook login). Secure authentication also involves password hashing, encryption, and implementing security measures like multi-factor authentication (MFA)."
    },
    {
        question: "What is CORS and why is it important in web development?",
        answer: "CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to restrict how resources on a web page can be requested from another domain. By default, browsers block cross-origin requests to prevent security vulnerabilities. However, CORS policies can be configured on the server using headers like `Access-Control-Allow-Origin` to specify which origins are allowed to access the resources. Properly managing CORS is crucial for building secure APIs and web applications."
    },
    {
        question: "What is the difference between SQL and NoSQL databases?",
        answer: "SQL (Structured Query Language) databases, such as MySQL and PostgreSQL, use structured tables with predefined schemas and are ideal for applications requiring complex queries and transactions. NoSQL databases, like MongoDB and Firebase, use flexible schema designs such as key-value stores, document databases, or graph databases. NoSQL is better suited for handling large-scale data, real-time applications, and scenarios requiring scalability."
    },
    {
        question: "What are WebSockets, and how do they differ from HTTP?",
        answer: "WebSockets provide a full-duplex communication channel over a single TCP connection, allowing real-time data exchange between the client and server. Unlike HTTP, which follows a request-response model, WebSockets enable continuous data flow, making them ideal for real-time applications like chat apps, stock market updates, and multiplayer games. WebSockets reduce latency and improve performance compared to traditional polling techniques."
    }
];

const Accordion = () => {
    const [activeFaq, setActiveFaq] = useState(0);

    const handleAccordion = (index)=>{
        if(activeFaq === index) return setActiveFaq(null);
        setActiveFaq(index);
    }
    return (
        <div className='h-[100vh] overflow-y-scroll bg-[whitesmoke] p-[20px]'>
            <div className='max-w-[1000px] m-auto p-10 bg-white rounded-2xl'>
                <div className='text-center mb-4'>
                    <h1 className='uppercase text-4xl'>faq's</h1>
                </div>
                <div>
                    {
                        data.map((faq, index)=>(
                            <Faq key={index} item={faq} isActive={activeFaq === index} active={()=>handleAccordion(index)} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Accordion
