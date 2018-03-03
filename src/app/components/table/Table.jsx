import React from 'react';

export const Table = ({children, headers}) => (
    <table>
        <tbody>
        <tr>
            {headers.map(x => (
                <th key={x}>{x}</th>
            ))}
        </tr>
        {children}
        </tbody>
    </table>
);