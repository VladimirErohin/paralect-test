import './App.css';
import Header from "./components/header/Header";
import React, {useEffect, useState} from "react";
import {UsersService} from "./api/GetUsers";
import SearchStart from "./components/search-start/SearchStart";
import User from "./components/user/User";
import Loader from "./components/loader/Loader";
import image from "./assets/person-found.png"

function App() {
    const [repositories, setRepositories] = useState([]);
    const [userName, setUserName] = useState('');
    const [userInfo, setUserinfo] = useState({});
    const [pageNum, setPageNum] = useState({page:1, perPage:4});
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (userName) {
            getUserName(userName, pageNum)
            setLoading(true)
        }
    }, [userName, pageNum])

    async function getUserName(userNameSearch, page) {
        //const getRepositories = await UsersService.getListRepositories(userNameSearch)
        const getUserInfo = await UsersService.getUser(userNameSearch)
        const getPageAndRepos = await UsersService.getPages(userNameSearch, page)
        //setRepositories(getRepositories)
        setRepositories(getPageAndRepos)
        setUserinfo(getUserInfo)
        setLoading(false)
    }

    function addUserName(userName) {
        setUserName(userName)
    }

    function changePage(page) {
        setPageNum({...pageNum, page:page})
    }

    console.log(userName) //
    console.log(userInfo.id) //
    console.log(repositories.message) //
    console.log("repositories -- ", repositories) //
    console.log("pageNum -- ", pageNum) //

    return (
        <div className="content">
            <Header addUserName={addUserName}/>
            <div className="main__content">
                {loading
                    ? <Loader/>
                    : userInfo.id
                        ? <User userInfo={userInfo} repositories={repositories} changePage={changePage} pageNum={pageNum}/>
                        : <SearchStart userInfo={userInfo} image={image} text="User Not found"/>
                }
            </div>
        </div>
    );
}

export default App;
