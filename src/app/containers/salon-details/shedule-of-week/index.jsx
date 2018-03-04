import React from 'react';
import PropTypes from 'prop-types';

import {Table, TableColumn, TableRow} from "components/table";
import week from './week';

export class SheduleOfWeek extends React.PureComponent {
    render() {
        const {workHours} = this.props;
        return (
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
            </Table>);
    }
}

SheduleOfWeek.propTypes = {
    workHours: PropTypes.object.isRequired
};