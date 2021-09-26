import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Doctor from "../Doctor/Doctor";
import './Doctors.css';

const Doctors = () => {

  const [doctors, setProducts] = useState([]);

  const [cart, setCart] = useState([]);



  const handleAddProduct = (doctor) => {

    const newCart = [...cart, doctor]
    setCart(newCart)
  }


  useEffect(() => {
    fetch("/doctorData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">


            <div className="row">
              {
                doctors.map(doctor =>
                  <Doctor
                    doctor={doctor}
                    handleAddProduct={handleAddProduct}
                  >

                  </Doctor>)
              }


            </div>
          </div>
          <div className="col-md-3 text-white cart-sec pt-5">

            <Cart
              cart={cart}
            >

            </Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
