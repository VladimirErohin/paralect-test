import React, {useState} from 'react';
import "./Header.css";
import logo from "../../assets/Vector.png";
import icon_search from "../../assets/image.png";

const Header = ({addUserName}) => {

    const [name, setName] = useState('');

    let onHandlerTitle = (e) => {
        setName(e.currentTarget.value);
    };

    let onPressKey = (e) => {
        if (e.key === 'Enter' && name.trim()) {
            addUserName(name)
            setName('')
        }
    };

    return (
        <div className="header">
            <img src={logo} alt={logo} className="logo"/>
            <div className="search">
                <img src={icon_search} alt={icon_search}/>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={name}
                    onChange={onHandlerTitle}
                    onKeyPress={onPressKey}
                /></div>
        </div>
    );
};

export default Header;