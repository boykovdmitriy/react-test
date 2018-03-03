import React from 'react';
import style from '../table.css'

export const TableRow = ({children}) => (
    <tr className={style.row}>
        {children}
    </tr>
);