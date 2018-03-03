import React from 'react';
import PropTypes from 'prop-types'

export class ProfileImage extends React.Component {
    render() {
        const {thumb} = this.props;
        return (
            <img src={thumb}/>
        )
    }
}

ProfileImage.propTypes = {
    thumb: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired
};