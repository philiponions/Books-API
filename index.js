import express from 'express';
import bodyParser from 'body-parser' // take in incoming post request bodies
import bookRoutes from './routes/books.js'
import dotenv from 'dotenv';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDocs from 'swagger-jsdoc';


const app = express();
const PORT = 5000; 

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
          title: "Books API",
          version: "1.0.0",
          description:
            "Store information regarding books.",
        },
        servers: [
          {
            url: "http://localhost:5000/",
            description: "API Documentation"
          }]
        },
    apis: ["./routes/*.js"],
  };
  

const specs = swaggerJSDocs(options)
app.use("/docs", swaggerUI.serve)
app.get("/docs",
swaggerUI.setup(specs, {
  explorer: true
})
);

// we're using json data in our app
app.use(bodyParser.json())

app.listen(PORT, () => { console.log(`Server Running on port: http://localhost:${PORT}`)})

// create routes
app.get('/', (req,res) => {
    res.send('Hello from homepage')
})

app.use('/books', bookRoutes)