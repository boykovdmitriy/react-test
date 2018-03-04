import React from 'react';
import {ProfileImage} from './index'

describe('profile image component', () => {
    it('render profile-image component', () => {
        const imgUrl = 'http://s3-eu-west-1.amazonaws.com/staging-salony/image/profiles/files/000/000/212/thumb/6.jpg?1448538461';
        const wrapper = shallow(
            <ProfileImage thumb={imgUrl}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('render profile-image without required props', () => {
        expect(() => shallow(<ProfileImage/>)).toThrow();
    });
});