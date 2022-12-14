import React from 'react';
import { Link } from 'react-router-dom';

const NewProducts = () => {
    return (
        <div>
            {/* второй блок на главной странице с запросом на /api/products?new */}
            Новые машины
            <Link to='/catalog'>More cars</Link>
        </div>
    );
};

export default NewProducts;