const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const rateLimiter = require("express-rate-limit") 
const axios = require('axios')
const app = express();
const checkJwt = require("./middleware/auth")
const {PRODUCT_SERVICE_BASE_URL, CART_SERVICE_BASE_URL, ORDER_SERVICE_BASE_URL, PORT, VERIFICATION_SERVICE_BASE_URL} = require("./config/server-config")
app.use(morgan('combined'))
// app.use(rateLimiter({
//   windowMs: 2*60*1000,
//   max: 5
// }))

app.use(cors({
  origin: "http://localhost:5173",
  methods:["PUT", "PATCH", "GET", "DELETE", "POST"],
  credentials: true
}))
app.get('/', (req, res)=>{
  res.send("Apigateway...")
})


app.use("/productService",checkJwt,(req, res, next) => {
  
  if (req.auth?.sub) {
    req.headers["x-user-id"] = req.auth.sub;
  }
  next();
}, createProxyMiddleware({
  target: PRODUCT_SERVICE_BASE_URL,
  changeOrigin: true,
  
}));


app.use("/cartService",checkJwt,(req, res, next) => {
  
  if (req.auth?.sub) {
    req.headers["x-user-id"] = req.auth.sub;
  }
  next();
}, createProxyMiddleware({
  target: CART_SERVICE_BASE_URL,
  changeOrigin: true,
  
}));

app.use("/orderService",checkJwt,(req, res, next) => {
  
  if (req.auth?.sub) {
    req.headers["x-user-id"] = req.auth.sub;
  }
  next();
}, createProxyMiddleware({
  target: ORDER_SERVICE_BASE_URL,
  changeOrigin: true,
  
}));

app.use("/verificationService",checkJwt,(req, res, next) => {
  
  if (req.auth?.sub) {
    req.headers["x-user-id"] = req.auth.sub;
  }
  next();
}, createProxyMiddleware({
  target: VERIFICATION_SERVICE_BASE_URL,
  changeOrigin: true,
  
}));

app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}...`);
});
