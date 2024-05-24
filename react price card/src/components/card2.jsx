import React from "react"
import './card2.css';

const Card2 = ()=> {
    return(
        <div className="whole">
            <div className="top">
            <p>PLUS</p>
                <h1> $9/Month</h1><hr></hr>
            </div>
                <div className="bottom">
                <p>✔️Single User</p>
                <p>✔️50GB Storage</p>
                <p>✔️Unlimited Public Projects</p>
                <p>✔️Community Access</p>
                <p>✔️Unlimited Private Projects</p>
                <p>✔️Dedicated Phone Support</p>
                <p>✔️Free Subdomain</p>
                <p className="na">❌Monthly Status Reports</p>
                <button type="submit">BUTTON</button>
                </div>
            </div>
    )
}

export default Card2