import React from 'react';
import {InfiniteScroll} from './index'

describe('infinite scroll component', () => {
    it('render infinite scroll component', () => {
        const handleScroll = () => {
        };
        const wrapper = shallow(
            <InfiniteScroll handleScroll={handleScroll}>
                <div className='nice-object'/>
            </InfiniteScroll>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('render infinite scroll and check a child element', () => {
        const handleScroll = () => {
        };
        const wrapper = shallow(
            <InfiniteScroll handleScroll={handleScroll}>
                <div className='nice-object'/>
            </InfiniteScroll>
        );
        expect(wrapper.contains(<div className='nice-object'/>)).toEqual(true);
    });

    it('render infinite scroll without handleScroll. It is required field', () => {
        expect(() => shallow(
            <InfiniteScroll>
                <div/>
            </InfiniteScroll>
        )).toThrow();
    });

    it('render infinite scroll without children. It is required field', () => {
        const handleScroll = () => {
        };
        expect(() => shallow(
            <InfiniteScroll handleScroll={handleScroll}/>
        )).toThrow();
    });
});