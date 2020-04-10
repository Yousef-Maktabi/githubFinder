import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertcontext';

const Alert = () => {
    const alertContext = useContext(AlertContext);

    const { alert, showAlert } = alertContext;

    return (
        alert != null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle" /> {alert.msg}
                <button style={style} onClick={showAlert}><i className="fas fa-times-circle" /></button>
            </div >
        )
    )
}

const style = {
    float: 'right',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
}
export default Alert
