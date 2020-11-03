// console.log("hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Before and After[esudo Selector</title>
      <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet">
      <style>
          body{
              background-color: black;
              color: white;
              margin: 0px;
              padding: 0px;
              background: url('https://source.unsplash.com/random') no-repeat center center/cover;
  
          }
          header::before{
              position: absolute;
              top:0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
              opacity: 100;
          }
          header{
              display: flex;
              flex-direction: column;
          }
          .navagation{
              display: flex;
              list-style-type: none;
              /* padding: 50px; */
          }
          li{
              padding: 15px;
          }
          section{
              margin: 5px 85px;
              text-align: center;
              flex-direction: column;
              /* border:2px solid rgb(255, 0, 0); */
              justify-content: center;
              font-family: 'Krona One', sans-serif;
              /* height: 200px; */
          }
          /* section::before{
              content: "this is my Content"; */
          }
          h1{
              font-size: 4rem;
          }
      </style>
  </head>
  <body>
      <header>
          <nav class="navbar">
              <ul class="navagation">
                  <li class="item">Home</li>
                  <li class="item">About</li>
                  <li class="item">Services</li>
                  <li class="item">Contact Us</li>
              </ul>
          </nav>
      </header>
      <section>
          <h1>Welcome Back Badshah </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam itaque repudiandae, eligendi tempore officia ut in sint sapiente consectetur veritatis, aperiam fugiat vel nesciunt cum necessitatibus amet, beatae libero facilis.</p>
          <hr>
      </section>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});