import React from "react"
import './card.css';

const Card = ()=> {
    return(
        <div className="whole">
            <div className="top">
            <p>FREE</p>
                <h1> $0/Month</h1><hr></hr>
            </div>
                <div className="bottom">
                <p>✔️Single User</p>
                <p>✔️50GB Storage</p>
                <p>✔️Unlimited Public Projects</p>
                <p>✔️Community Access</p>
                <p className="na">❌Unlimited Private Projects</p>
                <p className="na">❌Dedicated Phone Support</p>
                <p className="na">❌Free Subdomain</p>
                <p className="na">❌Monthly Status Reports</p>
                <button type="submit">BUTTON</button>
                </div>
            </div>
    )
}

export default Card