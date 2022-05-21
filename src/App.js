import './App.css';
import Header from "./components/header/Header";
import React, {useEffect, useState} from "react";
import {UsersService} from "./api/GetUsers";
import SearchStart from "./components/search-start/SearchStart";
import User from "./components/user/User";
import Loader from "./components/loader/Loader";
import image from "./assets/person-found.png"

function App() {
    const [userName, setUserName] = useState('');
    const [userInfo, setUserinfo] = useState({});
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (userName) {
            getUserName(userName)
            setLoading(true)
        }
    }, [userName])

    async function getUserName(userNameSearch, page) {
        const getUserInfo = await UsersService.getUser(userNameSearch)
        setUserinfo(getUserInfo)
        setLoading(false)
    }

    function addUserName(userName) {
        setUserName(userName)
    }

    return (
        <div className="content">
            <Header addUserName={addUserName}/>
            <div className="main__content">
                {loading
                    ? <Loader/>
                    : userInfo.id
                        ? <User userInfo={userInfo} userName={userName}/>
                        : <SearchStart userInfo={userInfo} image={image} text="User Not found"/>
                }
            </div>
        </div>
    );
}

export default App;