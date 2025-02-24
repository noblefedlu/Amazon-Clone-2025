import React from 'react'
import logo from '../../assets/Image/Amazon_Store-removebg-preview.png'

function Header() {
  return (
    <section>
        <section>
            <div><img src={logo} alt="" />
            {/* delivery */}
            <span>
                {/* icon */}
            </span>
            <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
            </div>
            </div>
            <div>
                {/* search */}
            </div>
            <div></div>
        </section>
    </section>
  )
}

export default Header