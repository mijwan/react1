import React, { useState, useCallback } from "react";
import './style.css';

export default function App() {

  const [formData, setFormData] = useState({
    "price" : "0.00",
    "timeframe" : "",
    "select_tier" : "",
  })

  const buttonClickHandler = useCallback(
    e => {
      setFormData({...formData, [e.target.name] : e.target.value})
    },
    [formData],
  )

  return (
    <div className="main-background">
        <div className="main-header">
        <h2>ROI Calculator</h2>
        </div>
        <div className="cake-1">
            <p>CAKE</p>
        </div>
        <div className="display-money1" id="payment">
              <p>{formData.price} USD</p>
        </div>

      <div className="button-payment">
        <button id="payment1" className="payment" onClick={ (e) => buttonClickHandler(e)} name="price" value="1000">$1000</button> &nbsp;
        <button id="payment2" className="payment" onClick={ (e) => buttonClickHandler(e)} name="price" value="100">$100</button>
      </div>



       <h4>Timeframe</h4>
        <div className="radio-btn-money">
            <div className="radio-btn-wrapper">
              <button id="bt1" className={formData.timeframe === 'Tier 1' ? "radio-btn active" : "radio-btn"} type="button"  onClick={ (e) => buttonClickHandler(e)} name="timeframe" value="Tier 1">Tier 1</button>
            </div>
            <div className="radio-btn-wrapper">
              <button id="btn2" className={formData.timeframe === 'Tier 2' ? "radio-btn active" : "radio-btn"} type="button"  onClick={ (e) => buttonClickHandler(e)} name="timeframe" value="Tier 2">Tier 2</button>
            </div>
            <div className="radio-btn-wrapper">
              <button id="btn3" className={formData.timeframe === 'Tier 3' ? "radio-btn active" : "radio-btn"} type="button"  onClick={ (e) => buttonClickHandler(e)} name="timeframe" value="Tier 3">Tier 3</button>
            </div>
            <div className="radio-btn-wrapper">
              <button id="btn4" className={formData.timeframe === 'Tier 4' ? "radio-btn active" : "radio-btn"} type="button"  onClick={ (e) => buttonClickHandler(e)} name="timeframe" value="Tier 4">Tier 4</button>
            </div>
            <div className="radio-btn-wrapper">
             <button id="btn5" className={formData.timeframe === 'Tier 5' ? "radio-btn active" : "radio-btn"} type="button"  onClick={ (e) => buttonClickHandler(e)} name="timeframe" value="Tier 5">Tier 5</button>
              </div>
             
           
          </div>


       <div className="main-header">
           <h3>Enable Accelerated APY</h3>
       </div>

       <h4>Select Tier</h4>

       <div className="radio-btn-money1">
        <div className="radio-btn-wrapper1">
          <button id="btn6" className={formData.select_tier === '1 Day' ? "radio-btn1 active" : "radio-btn1"} type="button" onClick={ (e) => buttonClickHandler(e)} name="select_tier" value="1 Day">1 Day</button>
        </div>
        <div className="radio-btn-wrapper1">
          <button id="btn7" className={formData.select_tier === '7 Days' ? "radio-btn1 active" : "radio-btn1"} type="button" onClick={ (e) => buttonClickHandler(e)} name="select_tier" value="7 Days">7 Days</button>
        </div>
        <div className="radio-btn-wrapper1">
          <button id="btn8" className={formData.select_tier === '30 Days' ? "radio-btn1 active" : "radio-btn1"} type="button" onClick={ (e) => buttonClickHandler(e)} name="select_tier" value="30 Days">30 Days</button>
        </div>
        <div className="radio-btn-wrapper1">
          <button id="btn9" className={formData.select_tier === '1 Year' ? "radio-btn1 active" : "radio-btn1"} type="button" onClick={ (e) => buttonClickHandler(e)} name="select_tier" value="1 Year">1 Year</button>
        </div>
        <div className="radio-btn-wrapper1">
            <button id="btn10" className={formData.select_tier === '5 Year' ? "radio-btn1 active" : "radio-btn1"} type="button" onClick={ (e) => buttonClickHandler(e)} name="select_tier" value="5 Year">5 Year</button>
          </div>
      </div>
   

        <p className="payment-cake">ROI at Current Rates</p>
     <div className="display-money1">
       <p>{formData.price} USD</p>
     </div>
    <p>~0.000 CAKE + 0.000000 DON</p>

    </div>
  );
}

