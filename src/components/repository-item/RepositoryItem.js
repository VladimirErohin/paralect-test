import React from 'react';
import "./RepositoryItem.css";

const RepositoryItem = ({repository}) => {

    const{name, description, html_url}=repository;
    console.log()

    return (
        <div className= "repository__item">
            <a href={html_url} target="blank" className="repository__name">{name}</a>
            <div className="repository__description">{description}</div>
        </div>
    );
};

export default RepositoryItem;