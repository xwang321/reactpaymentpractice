
import "./style.less";
import{ Button,Input,Radio } from "../compontents";
import { useState } from "react";
import logo from "../assets/logo.svg";
import '../styles/index.less'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



export default function Payment() {
    const payType = ["CNY","USD"];
    const bank =[
        "Alipay",
        "AlipayGlobal",
        "PayPal",
        "StripeCreditCard",
        "StripeAlipay",
        "StripeWeChat"
    ];
    const [payment, setPayment] = useState(0);
    const [banks,setBanks] = useState(null);

    const submitPay = () => {
        if(banks === null)
            alert("please choose a payment way!")
        };
        return (
            <div className ="a-pay">
                <div className="logodirection">
                <FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={brands('twitter')} />
                    <img alt="payment" className="logo" src ={logo} />
                </div>
                <div className="paytype">
                    currency:￥CNY
                </div>
                <div className="recharge">
                    recharge amount:
                    <input type="number" />
                </div>
                <div className="bank">
                    {bank.map((item,index) => (
                        <div 
                            onClick = {() => setBanks(index)}
                            key ={index}
                            className ={banks === index ? "bank-item activated" : "bank-item"}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className="buttonDirection">
                    <button onClick ={submitPay}>Payment</button>
                </div>
            </div>
    );
}