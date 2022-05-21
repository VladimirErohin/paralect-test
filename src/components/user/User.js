import React from 'react';
import "./User.css";
import UserCard from "../user-card/UserCard";
import RepositoryList from "../repositoryes-list/RepositoryList";
import PaginationPage from "../pagination/PaginationPage";
import SearchStart from "../search-start/SearchStart";
import contentIsEmpty from "../../assets/epty-repos-list.png"

const User = ({userInfo, repositories, changePage, pageNum}) => {

    const {public_repos} = userInfo;
    const repos = [...repositories];
    console.log("repos --", repos);
    console.log("userInfo --", userInfo);

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