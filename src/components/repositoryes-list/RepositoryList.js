import React from 'react';
import RepositoryItem from "../repository-item/RepositoryItem";

const RepositoryList = ({repos, userInfo}) => {

    const {public_repos}=userInfo;


    return (
        <div className="repositories__list">
            <div className="repos__title">Repositories ({public_repos})</div>
            {repos.map(repository=>
                <RepositoryItem
                    repository={repository}
                    key={repository.id}/>
            )}
        </div>
    );
};

export default RepositoryList;