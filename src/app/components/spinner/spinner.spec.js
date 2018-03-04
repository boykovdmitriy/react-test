import React from 'react';
import {Spinner} from './index'

test('render spinner component', () => {
    const wrapper = shallow(
        <Spinner/>
    );
    expect(wrapper).toMatchSnapshot();
});