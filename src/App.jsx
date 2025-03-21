import React, { useContext, useEffect } from "react"
import Routing from "./Routing"
import { auth } from "./Utility/firebase"
import { DataContext } from "./Components/DataProvider/DataProvidere"
import { Type } from "./Utility/action.type"

function App() {
  const [{ user }, dispatch] = useContext(DataContext)
  // console.log(user)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser, "from firebase")
      if (authUser) {
        console.log(authUser, "from in")
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        })
      } else {
        console.log(authUser, "from null")
        dispatch({
          type: Type.SET_USER,
          user: null,
        })
      }
    })
  }, [])
  return (
    <div>
      <Routing />
    </div>
  )
}

export default App
