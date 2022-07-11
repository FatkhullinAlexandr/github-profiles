import React from 'react';

import searchSvg from '../assets/search.svg';
import { useAppSelector } from '../hooks/redux';

const Result: React.FC = () => {
    const { user, loading, error } = useAppSelector((state) => state);

    return (
        <div className="result">
            <div className="result-container">
                {!user && !loading && !error && (
                    <p className="result-message">
                        The profile you want to search will appear here...
                    </p>
                )}
                {user && (
                    <div className="card">
                        <div className="card-avatar">
                            <img src={user?.avatar_url} alt="" />
                        </div>
                        <div className="card-body">
                            <div className="card-login">{user?.login}</div>
                            <div className="card-link">
                                <span>Go to</span>
                                <a href={user?.html_url}>Github</a>
                            </div>
                        </div>
                    </div>
                )}
                {loading && <p className="result-message">Loading...</p>}
                {error && <p className="result-message">{error}</p>}
            </div>
            <div className="result-image">
                <img src={searchSvg} alt="" />
            </div>
        </div>
    );
};

export default Result;
