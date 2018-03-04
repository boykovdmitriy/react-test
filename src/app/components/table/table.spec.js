import React from 'react';
import {Table} from './Table'
import style from './table.css';
import {TableRow} from "./table-row";
import {TableColumn} from "./table-column";

describe('table component', () => {
    it('render empty table component', () => {
        const wrapper = shallow(
            <Table/>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('render table with header', () => {
        const headers = ['name', 'website', 'age'];
        const wrapper = shallow(
            <Table headers={headers}/>
        );
        expect(wrapper).toMatchSnapshot();
        expect(
            wrapper.contains(
                <tr>
                    {headers.map(x => (
                        <th className={style.header} key={x}>{x}</th>
                    ))}
                </tr>
            )).toEqual(true);
    });
    it('render table with rows and columns', () => {
        const values = [{
            id: 1,
            columnName: 'first'
        }, {
            id: 2,
            columnName: 'second'
        },];
        const wrapper = shallow(
            <Table>
                {
                    values.map(x => (
                        <TableRow key={x.id}>
                            <TableColumn>{x.columnName}</TableColumn>
                        </TableRow>
                    ))
                }
            </Table>
        );
        expect(wrapper).toMatchSnapshot();
        expect(
            wrapper.contains(
                values.map(x => (
                    <TableRow key={x.id}>
                        <TableColumn>{x.columnName}</TableColumn>
                    </TableRow>
                ))
            )).toEqual(true);
    });
    it('render row with column', () => {
        const wrapper = shallow(
            <TableRow>
                <TableColumn>column</TableColumn>
            </TableRow>
        );
        expect(wrapper).toMatchSnapshot();
        expect(
            wrapper.contains(
                <tr className={style.row}><TableColumn>column</TableColumn></tr>
            )
        ).toEqual(true);
    });
    it('render column', () => {
        const wrapper = shallow(
            <TableColumn>column</TableColumn>
        );
        expect(wrapper).toMatchSnapshot();
        expect(
            wrapper.contains(
                <td className={style.column}>column</td>
            )
        ).toEqual(true);
    });
});