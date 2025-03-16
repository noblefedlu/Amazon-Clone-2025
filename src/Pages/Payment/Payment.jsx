import React, {useContext, useState} from 'react'
import Class from "./Payment.module.css"
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvidere'
import ProductCard from '../../Components/Product/ProdcutCard'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
// import { colors } from '@mui/material'
import CurrencyFormat from '../../Components/CurrecyFormat/CurrencyFormat'
import { axiosInstance } from '../../Api/axios'
import {ClipLoader} from 'react-spinners'
import { db } from '../../Utility/firebase'
import { useNavigate } from 'react-router-dom'

function Payment() {
  const [{user, basket }, dispatch] = useContext(DataContext)

  const totalProduct = basket.reduce((sum, item) => sum + item.amount, 0)

  const totalPrice = basket.reduce((sum, item) => sum + item.price*item.amount, 0)

  const {cardError, setCardError} = useState(null)
  const {processing, setProcessing} = useState(false)

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e)
    e?.error?.message ? setCardError(e.error.message) : setCardError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
    const response = await axiosInstance({method: "post", url: `/payments/create?total=${total *100}`
    })

    const clientSecret = response.data?.clientSecret;
    const confirmation = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
      
    })
    // console.log(confirmation)
    await db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
      basket: basket,
      amount: paymentIntent.amount,
      created: paymentIntent.created,
    })

    
      //empty the basket

      dispatch({type: Type.EMPTY_BASKET })
    setProcessing(false)
    navigator('/orders',  {message: 'You have placed new order'} )
    } catch (error) {
      // console.log(error)
      setProcessing(false)
    }
  }

  return (
    <LayOut>
      {/* header */}
      <div className={Class.Payment-header}>
        checkout ({totalProduct}) items
      </div>
      {/* payment method */}

    <section className={Class.payment}>
      {/* address */}
      <hr />

      <div className={Class.flex}>
        <h3>Delivery Address</h3>
        <div>
        <div>{user?.email}</div>
          <div>Abnet </div>
          <div>Addis Abeba</div>
        </div>
      </div>

      {/* products */}
      <div>
        <h3>Review items and delivery</h3>
        <div>
          {
          basket?.map((item) => <ProductCard product={item} flex={true}/>)
          }
        </div>
      </div>
      <hr />
      
      {/* card form */}
      <div className={Class.flex}>
        <h3>Payment Method</h3>
        <div className={Class.paymentCardContainer}>
          <div className={Class.paymentDetails}>
            <form onSubmit={handleSubmit}>
              {/* error */}
              {cardError && <small style={{color: "red"}
              }>{cardError}</small>}
              {/* card element */}
              <CardElement onChange={handleChange}/>
              {/* price */}
              <div className={Class.paymentPrice}>
              <div>
                <span style={{display: "flex", gap: "10px"}}>
                  <p>Subtotal |</p> <CurrencyFormat amount={totalPrice} />
                 <p>Total Order |</p> <CurrencyFormat amount={total} />
                </span>
              </div>
              <button type='submit'>
                {
                  processing ? (
                    <div children={Class.loading}>
                      <ClipLoader color= 'gray' size={12} />
                      <p>Please wait ...</p>
                    </div>
                  ) : 'Pay Now'
                }
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />

    </section>

    </LayOut>
  )
}

export default Payment