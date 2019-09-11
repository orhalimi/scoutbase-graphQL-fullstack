import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './PageIndex.css';



const PageIndex = (props) => {
    const [countryCode, setCountryCode] = useState('');

    function handleGoClick(){
        if(countryCode) props.history.push({ pathname: '/countries/' + countryCode});
    }

    return (
        <div className="PageIndex Page">
            <div>
                <div>
                    <Link to="/countries"><button className="actionBtn" style={{height:"40px", width: "255px"}}>See available countries</button></Link>
                </div>
                <div className="orKeyword">OR</div>
                <div className="countrycodeSection">
                    <div>enter a country code to get info about it</div>
                    <input type="text" value={countryCode} onChange={(e)=>{setCountryCode(e.target.value)}}/>
                    <button className="actionBtn" style={{height:"40px", width: "255px"}} onClick={handleGoClick}>Go!</button>
                </div>
            </div>
        </div>
    );
}

export default PageIndex;