import React, {useEffect, useState} from 'react';
import "./User.css";
import UserCard from "../user-card/UserCard";
import RepositoryList from "../repositoryes-list/RepositoryList";
import PaginationPage from "../pagination/PaginationPage";
import SearchStart from "../search-start/SearchStart";
import contentIsEmpty from "../../assets/epty-repos-list.png"
import {UsersService} from "../../api/GetUsers";

const User = ({userInfo, userName}) => {

    const [repositories, setRepositories] = useState([]);
    const [pageNum, setPageNum] = useState({page:1, perPage:4});
    function changePage(page) {
        setPageNum({...pageNum, page:page})
    }


    useEffect(() => {
            getPage(userName,pageNum)
    }, [pageNum])

    async function getPage(userNameSearch, page) {
        const getPageAndRepos = await UsersService.getPages(userNameSearch, page.page, page.perPage)
        setRepositories(getPageAndRepos)
    }

    const {public_repos} = userInfo;
    const repos = [...repositories];

    return (
        <div className="user">
            <div className="user__info">
                <UserCard userInfo={userInfo}/>
                {repos.length === 0
                    ? <SearchStart image={contentIsEmpty} text="Repository list is empty" userInfo={userInfo}/>
                    : <div className="content__user">
                        <RepositoryList
                            repos={repos}
                            userInfo={userInfo}/>
                        <PaginationPage
                            pageNum={pageNum}
                            changePage={changePage}
                            userInfo={userInfo}
                            totalRepositories={public_repos}
                        />
                    </div>
                }
            </div>
        </div>
    );
};
export default User;