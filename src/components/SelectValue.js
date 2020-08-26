import React from 'react'

const SelectValue = (props) => {
    const status = ["APPLIED", "IN PROGRESS", "COMPLETE"]
    return (
        status.map((t, key) => (
            <option key={key} value={t}>
                {t}
            </option>
        ))
    );
};


export default SelectValue;
