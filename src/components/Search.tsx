import React, { ChangeEvent } from 'react';

import { useAppDispatch } from '../hooks/redux';
import { searchUser } from '../store/slices/user';

const Search: React.FC = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = React.useState<string>('');

    const onClickSearch = () => {
        dispatch(searchUser(value));
    };

    return (
        <div className="search">
            <h1 className="search-title">Hello, you can find any profile on the GitHub</h1>
            <div className="search-body">
                <div className="search-input">
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20">
                        <path d="M12.9 14.32c-1.34 1.049-3.050 1.682-4.908 1.682-4.418 0-8-3.582-8-8s3.582-8 8-8c4.418 0 8 3.582 8 8 0 1.858-0.633 3.567-1.695 4.925l0.013-0.018 5.35 5.33-1.42 1.42-5.33-5.34zM8 14c3.314 0 6-2.686 6-6s-2.686-6-6-6v0c-3.314 0-6 2.686-6 6s2.686 6 6 6v0z"></path>
                    </svg>
                    <input
                        value={value}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                        type="text"
                        placeholder="Find any profile"
                    />
                </div>
                <button
                    className={value ? 'search-btn' : 'search-btn disabled'}
                    disabled={!value}
                    onClick={onClickSearch}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
