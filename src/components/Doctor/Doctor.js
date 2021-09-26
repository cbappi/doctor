import React from 'react';
import './Doctor.css';


const Doctor = (props) => {

  const { name, img, category, designation, salary, age } = props.doctor || {}

  return (

    <div className="col-md-4">
      <div class="card mb-3" style={{ "max-width": "540px" }}>

        <div>
          <div class="card-body">

            <div>
              <img src={img} className="imgc" alt="..." />
            </div>

            <h6 class="card-title">Name : {name}</h6>
            <h6 class="card-title">Category : {category}</h6>
            <h6 class="card-title">Designation : {designation}</h6>
            <h6 class="card-title">
              Remuneration : ${salary}</h6>
            <h6 class="card-title">Age : {age}</h6>



            <button
              onClick={() => props.handleAddProduct(props.doctor)}
              className="btn btn-success"> <i class="fas fa-stethoscope p-2"></i>
              Add Doctor</button>



          </div>
        </div>
      </div >

    </div >

  );
};

export default Doctor;