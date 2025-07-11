## Final Project submitted by singh.jaskaran2024@gmail.com [Celebal_Technologies] CSI Nodejs Backend Internship 2025

# 👟 Shoe Selling App - BareFoot

> A full-featured e-commerce platform for showcasing and selling shoes.  
> Built using Nodejs, powered with **Auth0**

## Features

- Microservices Architecture
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

Screenshots from https://upes.vercel.app

1. Home page</br>
   ![Home](./assets/home.png)</br>
2. Cart</br>
   ![Home](./assets/cart.png)</br>
3. Favourites</br>
   ![Home](./assets/favourites.png)</br>
4. My Orders</br>
   ![Home](./assets/orders.png)</br>
5. Product</br>
   ![Home](./assets/product.png)</br>
6. Add to Cart</br>
   ![Home](./assets/Add2Cart.png)</br>

### Admin Specific Features

1. Add a new Product</br>
   ![Home](./assets/AddnewProduct.png)</br>
2. Provide product description</br>
   ![Home](./assets/AddProd1.png)</br>
3. Updated Product List</br>
   ![Home](./assets/Addprod2.png)</br>
4. Provide Variant: Though we have created a product, we must provide it a variant before uploading its picture. Eg. Black shoe is a variant of a product.</br>
   ![Home](./assets/options.png)</br>
5. Adding Variant</br>
   ![Home](./assets/addVariant.png)</br>
6. Variant Added</br>
   ![Home](./assets/VariantAdded.png)</br>
7. Add Image for the variant:</br>
   ![Home](./assets/options.png)</br>
8. Adding Image: List of variants will be shown here. Add image for the desired product.</br>
   ![Home](./assets/imageUpload1.png)</br>
9. Image Uploaded Successfully</br>
   ![Home](./assets/image2.png)</br>
10. View the newly added product</br>
    ![Home](./assets/newProd.png)</br>

### Place Order

1. Review your order</br>
   ![Home](./assets/reviewOrder.png)</br>
2. Use Coupons</br>
   ![Home](./assets/coupon.png)</br>
3. Verify Address before placing the order</br>
   ![Home](./assets/verifyAdd.png)</br>
4. Send OTP</br>
   ![Home](./assets/sendOtp.png)</br>
5. OTP sent</br>
   ![Home](./assets/OTPSENT.png)</br>
6. Check OTP</br>
   ![Home](./assets/email.png)</br>
7. Email verified</br>
   ![Home](./assets/verified.png)</br>
8. Place Order </br>
   ![Home](./assets/place.png)</br>
9. Order Placed </br>
   ![Home](./assets/placedOrder.png)</br>
10. Order Confirmation
    ![Home](./assets/OrderConfirmation.png)</br>
11. Order Confirmation Mail
    ![Home](./assets/delMail.png)</br>
