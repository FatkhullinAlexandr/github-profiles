import React from 'react';

import Header from './components/Header';
import Result from './components/Result';
import Search from './components/Search';

import './scss/index.scss';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Search />
            <Result />
        </div>
    );
};

export default App;
