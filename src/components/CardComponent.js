import React from 'react'
import { connect } from 'react-redux'
import { setCurrent } from '../actions/applications'
function CardComponent(props) {
    const item = props.item;
    const settingCurrent = () => {
        props.dispatch(setCurrent(item));
        console.log("CardComponent")
    }
    return (

        <div className="col s12 m7" >
            <div>

                <div className="card horizontal">
                    <div className="card-stacked" id="wrap">
                        <div class="card-content">
                            <div className="row">
                                <div className="col s4"><span className="dark">#Application ID :</span>
                                    <span className="dark2">{" "}{item.id}</span>
                                </div>
                                <div className="col s4"><span className="dark"> </span>

                                </div>
                                <div className="col s4"><span className="dark">  Applied On :</span>
                                    <span className="dark2">{" "}{item.date}</span>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col s4"><span className="dark">    Name :</span>
                                    <span className="dark2">{" "}{item.name} {" "}{item.surname}</span>
                                </div>
                                <div className="col s4">

                                </div>
                                <div className="col s4"><span className="dark">  Role :</span>
                                    <span className="dark2">{" "}{item.role}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s4"><span className="dark">     Technology :</span>
                                    <span className="dark2">{" "}{item.technology} ENGINEER</span>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col s4"><span className="dark">   Contact :</span>
                                    <span className="dark2">{" "}{item.contact}</span>
                                </div>
                                <div className="col s4"><span className="dark">            Email :</span>
                                    <span className="dark2">{" "}{item.email}</span>
                                </div>
                                <div className="col s4">
                                    <span className="dark">  Application Status :</span>
                                    <span className={`dark2 ${item.status}`}>{" "}{item.status}</span>
                                </div>
                            </div>
                        </div>



                        <div className="card-action">
                            <a href="#edit-application-modal" onClick={() => { settingCurrent() }} className="modal-trigger btn">Update</a>
                        </div>
                    </div>
                </div></div >
        </div >


    )
}

export default connect(null, null)(CardComponent);