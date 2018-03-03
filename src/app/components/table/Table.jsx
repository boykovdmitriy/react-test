import React from 'react';

export const Table = ({children}) => (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Website</th>
                <th>Image</th>
            </tr>
            {children}
        </tbody>
    </table>
);