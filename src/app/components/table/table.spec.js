import React from 'react';
import {Table} from './Table'
import {TableItem} from './TableItem';
import mock from './mock';

describe('Test Table component', () => {
    it('render Test component with items', () => {
        const wrapper = shallow(
            <Table>
                {mock.map(x => (<TableItem salon={x} key={x.id}/>))}
            </Table>
        );
        expect(wrapper).toMatchSnapshot();
    });
});