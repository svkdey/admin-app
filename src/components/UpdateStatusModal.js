import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import SelectValue from './SelectValue';
import { updateApplication, clearCurrent } from '../actions/applications'
function UpdateStatusModal(props) {
    const item = props.application.current;
    const [name, setName] = useState('');
    const [surname, setSurName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('');
    const [technology, setTechnology] = useState("");
    useEffect(() => {
        if (item) {
            setName(item.name);
            setSurName(item.surname);
            setPhone(item.contact);
            setEmail(item.email);
            setRole(item.role);
            setStatus(item.status);
            setTechnology(item.technology)
        }
    }, [item])
    const onSubmitForm = () => {
        const applicationId = item.id;
        const updLog = {
            id: item.id, name, surname, contact: phone, email, role, status, technology, date: new Date()
        }
        console.log(updLog)
        props.dispatch(updateApplication(updLog));
        //clear
        M.toast({ html: `Application ${applicationId} status Updated!` })
        props.dispatch(clearCurrent())
    }

    console.log(item);
    return (
        <div id="edit-application-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h5> Update status of Application</h5>
                <div className="card">
                    <div className="card-content">
                        <div className="row">

                            <div className="col s6">Name : {name}</div>
                            <div className="col s6">SurName : {surname}</div>
                        </div>

                        <div className="row">
                            <div className="col s6">Contact : {phone}</div>
                            <div className="col s6">Email : {email}</div>
                        </div>
                        <div className="row">
                            <div className="col s6">Technology : {technology}</div>
                            <div className="col s6">Role : {role}</div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select className="browser-default" name="status" value={status} onChange={e => setStatus(e.target.value)} >
                            <option value="" disabled>Select Status</option>
                            <SelectValue />
                        </select>

                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn"
                    onClick={() => { onSubmitForm() }}
                >Enter</a>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {

    return {
        application: state.application
    }
}
const modalStyle = {
    width: '75%',
    heigth: '75%'
}
export default connect(mapStateToProps, null)(UpdateStatusModal);
