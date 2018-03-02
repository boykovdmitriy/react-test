import React from 'react';
import App from './App'

test('render App component', () => {
    const wrapper = shallow(
        <App/>
    );
    expect(wrapper).toMatchSnapshot();
});