import React from 'react';
import Intro from '../../components/Intro/Intro';
import NewProducts from '../../components/NewProducts/NewProducts';


const HomePage = () => {
    return (
        <div>
            <Intro />
            <NewProducts />
        </div>
    );
};

export default HomePage;