require("dotenv").config()
module.exports = {
    ISSUER : process.env.ISSUER,
    AUDIENCE : process.env.AUDIENCE,
    JWKSURI : process.env.JWKSURI,
    PRODUCT_SERVICE_BASE_URL : process.env.PRODUCT_SERVICE_BASE_URL,
    CART_SERVICE_BASE_URL : process.env.CART_SERVICE_BASE_URL,
    ORDER_SERVICE_BASE_URL : process.env.ORDER_SERVICE_BASE_URL,
    VERIFICATION_SERVICE_BASE_URL : process.env.VERIFICATION_SERVICE_BASE_URL,
    PORT: process.env.PORT
}