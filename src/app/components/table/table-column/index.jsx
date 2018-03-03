import React from 'react';
import style from '../table.css'

export const TableColumn = ({children}) => (
    <td className={style.column}>
        {children}
    </td>
);