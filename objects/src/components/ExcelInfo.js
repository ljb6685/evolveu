import React from 'react';
import '../App.css';

const Excel = ({date, name, invoice, items, amount}) => {
    return (
        <div>
            <table><tbody><tr>
                <td>{date}</td>
                <td>{name}</td>
                <td>{invoice}</td>
                <td>{items}</td>
                <td>{amount}</td>
            </tr></tbody></table>
        </div>
    )
}

export default Excel;