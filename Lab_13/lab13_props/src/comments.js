import React from "react";
import './index'
import avataruser1 from './images/batman.png'
import avataruser2 from './images/businessman.png'
import avataruser3 from './images/lady.png'

const User = function(props){
    return(
        <>
        <section className="card">
            <a> <img src={props.image}/> </a>
            <div className="content">
                <a className="author">{props.name}</a>
            </div>
            <div className="metadata">
                <p>Posted on <span className="date">{props.date}</span></p>
            </div>
            <div className="comment">
                <p>"<i>{props.msg}</i>"</p>
            </div>

        </section>
        

        </>
    )
}

export default User;