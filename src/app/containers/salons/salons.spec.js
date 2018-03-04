import React from 'react';
import {Salons} from './index'

describe('Salons', () => {
    it('render Salons component', () => {
        const wrapper = shallow(
            <Salons/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});