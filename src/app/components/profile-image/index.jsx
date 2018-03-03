import React from 'react';
import PropTypes from 'prop-types'
import style from './style.css'

export class ProfileImage extends React.Component {
    render() {
        const {thumb} = this.props;
        return (
            <img className={style.image_preview} src={thumb}/>
        )
    }
}

ProfileImage.propTypes = {
    thumb: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired
};