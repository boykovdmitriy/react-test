import React from 'react';
import {WrappedSlider} from './index'

describe('wrapped slider component', () => {
    it('render wrapped slider component', () => {
        const wrapper = shallow(
            <WrappedSlider>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </WrappedSlider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('render wrapped slider and check rendered content', () => {
        const wrapper = shallow(
            <WrappedSlider>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </WrappedSlider>
        );
        expect(wrapper.contains([<div>1</div>, <div>2</div>, <div>3</div>])).toEqual(true);
    });
});