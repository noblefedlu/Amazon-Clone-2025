import React, {useContext, useState, useEffect} from 'react'
import Class from './Orders.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { db } from '../../Utility/firebase'
import { DataContext } from '../../Components/DataProvider/DataProvidere'
// import { data } from 'react-router-dom'
import ProdcutCard from '../../Components/Product/ProdcutCard'

function Orders() {

  const [{user}, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(({})=>{
    if (user) {
      db.collection('users')
      .doc('user.uid')
      .collection('orders')
      .orderBy('created', 'descending')
      .onSnapshot((snapshot) => {
        console.log(snapshot)
        setOrders(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data(), }))
      );
      });
    }else{
      setOrders([])
    }
  }
  ,[])

  return (
    <LayOut>
      <section className={Class.container}>
        <div className={Class.orderContainer}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && <div style={{padding:'20px'}}>You don't have orders yet.</div>}
          {/* order items */}
          <div>
            {
              orders?.map((eachorder, i) => {
                return (
                  <div key={i}>
                    <hr />
                    <p>Order ID: {eachorder?.id}</p>
                    {
                      eachorder?.data?.basket?.map(order =>{

                return (
                      <ProdcutCard
                      flex={true} product={order} key={order?.id}/> )})
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
    </section>  
    </LayOut>
    
  )
}

export default Orders
