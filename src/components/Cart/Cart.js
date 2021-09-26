import React from 'react';

const Cart = (props) => {

    const { cart } = props || {}


    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.salary

    const total = cart.reduce(totalReducer, 0)



    console.log(cart)
    return (
        <div>
            <h3 className="textcolor">

                Add Doctor : {cart.length}
            </h3>


            <h5>All Doctor's Salary: ${total}</h5>
            <ul>
                {
                    cart.map(doctor => <p>{doctor.name}</p>)
                }
            </ul>
        </div>
    );
};

export default Cart;