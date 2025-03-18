import React from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./Pages/Landing/Landing"
import Auth from "./Pages/Auth/Auth"
import ProductDetail from "./Pages/ProductDetail/ProductDetail"
import Orders from "./Pages/Orders/Orders"
import Cart from "./Pages/Cart/Cart"
import Payment from "./Pages/Payment/Payment"
import Results from "./Pages/Results/Results"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from "./Components/protectedRoute/protectedRoute"

const stripePromise = loadStripe('pk_test_51R15r0E1Qz3bn3sH58jznWwJcEKLvwbyZ0QWG1s3OsczjKoHtLe0N0eG5KJowfYWQBizCauRT8bJqNK3v1qYZuqf00GCwW2A5n');

function Routing() {
  return (
    <div>
      <Router>
        <Routes basename="/amazon-clone">
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          
          <Route path="/payment" element={

            <ProtectedRoute message={"Please login to continue"} redirect={"/payment"}>
              <Elements stripe={stripePromise}>
            <Payment />
            </Elements>
            </ProtectedRoute>

            } />
          <Route path="/orders" element={

            <ProtectedRoute message={"Please login to access your orders"} redirect={"/payment"}>
              <Orders />
            </ProtectedRoute>

            } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
