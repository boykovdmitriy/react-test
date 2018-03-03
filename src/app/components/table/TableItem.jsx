import React from 'react';
import {Link} from 'react-router-dom';
import {ProfileImage} from "components/profile-image";

export const TableItem = ({salon}) => (
    <tr>
        <td>{salon.name}</td>
        <td>{!!salon.website && <a href={salon.website}>link</a>}</td>
        <td>{
            !!salon.profile_image_urls &&
            <ProfileImage thumb={salon.profile_image_urls.thumb} origin={salon.profile_image_urls.original}/>
        }</td>
        <td><Link to={`salon/${salon.id}`}>Details</Link></td>
    </tr>
);