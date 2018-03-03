import React from 'react';
import style from './table.css';

export const Table = ({children, headers}) => (
    <table className={style.table}>
        <tbody>
        <tr >
            {headers.map(x => (
                <th className={style.header} key={x}>{x}</th>
            ))}
        </tr>
        {children}
        </tbody>
    </table>
);