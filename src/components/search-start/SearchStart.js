import React from 'react';
import "./SearchStart.css";
import icon_search from "../../assets/image-start-search.png";

const SearchStart = ({image, text, userInfo}) => {

    const {message, public_repos} = userInfo;

    return (
        <>
            {message || public_repos===0
                ? <div className="start__search-content">
                    <img src={image} alt="icon-content" className="search__start"/>
                    <div className="text__search">
                        {text}
                    </div>
                </div>
                : <div className="start__search">
                    <img src={icon_search} alt="icon-content" className="search__start"/>
                    <div className="text__search">
                        Start with searching a GitHub user
                    </div>
                </div>
            }
        </>
    );
};

export default SearchStart;