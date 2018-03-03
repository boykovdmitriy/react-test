import React from 'react';
import App from './index'

test('render App component', () => {
    const wrapper = shallow(
        <App/>
    );
    expect(wrapper).toMatchSnapshot();
});