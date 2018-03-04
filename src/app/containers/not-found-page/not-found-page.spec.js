import React from 'react';
import NotFoundPage from './index'

describe('notFoundPage', () => {
    it('render notFoundPage component', () => {
        const wrapper = shallow(
            <NotFoundPage/>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<section>Page not found</section>)).toEqual(true);
    });
});