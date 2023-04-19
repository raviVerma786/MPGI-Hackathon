import React from 'react'
// import './donateForm.css'

export default function DonateNow() {
  return (
    <>
        <div className="container">
        <div className="regform" >
    <form action="#" method="#">
        <p className="logo">Food <b style={{color: "#06C167"}}>Donate</b></p>

       <div className="input">
        <label htmlFor="foodname"> Food Name:</label>
        <input type="text" id="foodname" name="foodname"/>
        </div>
      
      
        <div className="radio">
        <label htmlFor="meal" >Meal type :</label> 
        <br/>

        <input type="radio" name="meal" id="veg" value="veg"/>
        <label htmlFor="veg" style={{paddingRight: "40px"}}>Veg</label>
        <input type="radio" name="meal" id="Non-veg" value="Non-veg"/ >
        <label htmlFor="Non-veg">Non-veg</label>
    
        </div>
        <br/>
        <div className="input">
        <label htmlFor="food">Select the Category:</label>
        <br/><br/>
        <div className="image-radio-group">
            <input type="radio" id="raw-food" name="image-choice" value="raw-food" checked/>
            <label htmlFor="raw-food">
              <img src="img/raw-food.png" alt="raw-food" />
            </label>
            <input type="radio" id="cooked-food" name="image-choice" value="cooked-food"/>
            <label htmlFor="cooked-food">
              <img src="img/cooked-food.png" alt="cooked-food" />
            </label>
            <input type="radio" id="packed-food" name="image-choice" value="packed-food"/>
            <label htmlFor="packed-food">
              <img src="img/packed-food.png" alt="packed-food" />
            </label>
          </div>
          
        </div>
        <div className="input">
        <label htmlFor="quantity">Quantity (person):</label>
        <input type="text" id="quantity" name="quantity"/>
        </div>
        <div className="input">
          <div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email"/>
          </div>
      <div>
      <label htmlFor="phoneno">PhoneNo:</label>
      <input type="text" id="phoneno" name="phoneno"/>
      </div>
      </div>
        <div className="input">
        <label htmlFor="location"></label>
        <label htmlFor="district">District:</label>
<select id="district" name="district" style={{padding:"10px"}}>
  <option value="chennai">Chennai</option>
  <option value="coimbatore">Coimbatore</option>
  <option value="madurai">Madurai</option>
</select> 

        <label htmlFor="address" style={{paddingLeft: "10px"}}>Address:</label>
        <input type="text" id="address" name="address"/><br/>
        
      
       
       
        </div>
        <div className="btn">
            <button type="submit" name="submit"> submit</button>
     
        </div>
    </form>
     </div>
   </div>
    </>
  )
}

