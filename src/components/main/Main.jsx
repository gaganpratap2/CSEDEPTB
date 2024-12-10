import React, { useContext } from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../Context/Context'
import Contextprovider from '../../Context/Context'

const Main = () =>{

    // const {recentpromt,showresult,loading,resultdata,setinput,input} = useContext(Context);

  return (
 <div className="main">
    <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
    </div>

    <div className="main-container">
        <div className="greet">
            <p><span>Hello , Gagan Rana.</span></p>
            <p>Karle Cheating</p>
        </div>

        <div className="cards">
            <div className="card">
                <p>
                Suggest me best places in India for trip with friends.
                </p>
                <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
                <p>Suggest me best 90's Songs.</p>
                <img src={assets.bulb_icon} alt="" />
            </div>

            <div className="card">
                <p>Keep on Messaging</p>
                <img src={assets.message_icon} alt="" />
            </div>

            <div className="card">
                <p>Coding is compulsory</p>
                <img src={assets.code_icon} alt="" />
            </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter the promt here.' />
                    <div className="">
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <h3> Supercharge your creativity and productivity</h3>
            </div>
 </div>
</div>
  )
}


export default Main