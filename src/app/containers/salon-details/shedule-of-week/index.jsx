import React from 'react';
import {Table, TableColumn, TableRow} from "components/table";
import week from './week';

export const SheduleOfWeek = ({workHours}) => (
    <Table headers={week}>
        <TableRow>
            {
                week.map(x => {
                    const dayHours = workHours[x];
                    if (!dayHours) {
                        return (
                            <TableColumn key={x}>-</TableColumn>
                        )
                    }
                    return (
                        <TableColumn key={x}>{`${dayHours.from}-${dayHours.to}`}</TableColumn>
                    )
                })
            }
        </TableRow>
    </Table>
);