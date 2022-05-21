import React from 'react';
import "./UserCard.css";
import icon_group from "../../assets/group.png";
import icon_person from "../../assets/person.png";

const UserCard = ({userInfo}) => {

    const {avatar_url, name, login, followers, following,html_url} = userInfo;
    const  followersFix = (followers / 1000).toFixed(1) + "k";

    return (
        <div className="user__card">
            <img src={avatar_url} alt="avatar" className="user__avatar"/>
            <div className="full__name">{name}</div>
            <a href={html_url} target="blank" className="login__user" >{login}</a>
            <div className="subscribers__info">
                <div className="followers__count">
                    <img src={icon_group} alt="followers"/>
                    <span className="followers">{following === 0 ? 0 : followersFix} followers</span>
                </div>
                <div className="following__count">
                    <img src={icon_person} alt="following"/>
                    <span className="following">{following} following</span>
                </div>
            </div>
        </div>
    );
};

export default UserCard;