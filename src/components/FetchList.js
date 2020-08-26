import React from 'react'
import CardComponent from './CardComponent';

export default function FetchList({ data = [] }) {
    console.log(data);
    const fetchlist = () => {
        return data != null && data.length > 0 ? data.map((item, key) => {
            return <CardComponent item={item} key={key} />;
        }) : "";
    }
    return (
        <div>
            {fetchlist()}
        </div>
    )
}
