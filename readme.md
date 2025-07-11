## Final Project submitted by singh.jaskaran2024@gmail.com [Celebal_Technologies] CSI Nodejs Backend Internship 2025

# 👟 Shoe Selling App - BareFoot

> A full-featured e-commerce platform for showcasing and selling shoes.  
> Built using Nodejs, powered with **Auth0**

## Features

- User Authentication with **Auth0**
- OTP-based Email Verification for addresses
- Rate Limiting
- Add to Cart, Choose Size, Place Orders, Add Shoe, Add Shoe Variants, update shoe Variants
- Add favourites, remove Favourites
- Apply Coupons and Promo Codes
- Admin Panel: Upload Products, Add Images & Variants
- Redis Caching for Super Fast API Responses
- Email Notifications with Nodemailer

In this project I've implemented microservices. Each service has been deployed independently on render(deploying platform).

![Home](./assets/image01.png)

Role Based Access Control: Managed by Auth0 </br>
Application could be slow as it is deployed under the free tier plan. <br/>
Each request after a specific time of inactivity leads to the cold start of the complete service. <br/>
So for the first time features might take 15-20 seconds to load. <br/>
Some routes are yet to be implemented, this frontend is the minimal representation of the product. </br>
The MVP of this backend project can be viewed on <i>https://upes.vercel.app</i>

To access features available to admins use - Id: jaskaranyt123@gmail.com - Password: !Qw12345

Routes Implemented:

1. CartService:</br>
   ![Home](./assets/image02.png)
2. OrderService:</br>
   ![Home](./assets/image03.png)
3. ProductService</br>
   ![Home](./assets/image03.png)
4. OrderService</br>
   ![Home](./assets/image04.png)
5. VerificationService</br>
   ![Home](./assets/image05.png)

The current folder is a monorepo. To view each service in detail. Their repository links on my github profile are:

1. ApiGateway: https://github.com/prestigious-protagonist/BareFoot_ApiGateway </br>
   Deployed at: https://barefoot-apigateway.onrender.com</br>

2. CartService: https://github.com/prestigious-protagonist/BareFoot_CartService</br>
   Deployed at: https://barefoot-cartservice.onrender.com</br>

3. ProductService: https://github.com/prestigious-protagonist/BareFoot_ProductService</br>
   Deployed at: https://barefoot-productservice.onrender.com</br>

4. OrderService: https://github.com/prestigious-protagonist/BareFoot_OrderService</br>
   Deployed at: https://barefoot-orderservice.onrender.com</br>

5. VerificationService: https://github.com/prestigious-protagonist/BAREFOOT_VerificationService</br>
   Deployed at: https://barefoot-verificationservice.onrender.com
   </br>
