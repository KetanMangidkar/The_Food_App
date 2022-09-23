import React from 'react'

const ConfirmOrder = () => {
  return (
    <section className='confirmOrder'>
        <main>
            <h1>Confirm Order </h1>
            <form>
                <div>
                    <label>Cash On Delivery</label>
                    <input type="radio" name="Payment" id="" />
                </div>
                <div>
                    <label>Online</label>
                    <input type="radio" name="Payment" id="" />
                </div>
                <button type='Submit'>Pay Now</button>
            </form>
        </main>
    </section>
  )
}

export default ConfirmOrder