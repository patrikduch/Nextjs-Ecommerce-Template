import React from 'react';
import CommodityDirectoryMenu from './Commodity-Directory-Menu';

/**
 * @function CommodityListingContainer Entry encapsulation component for whole commoditiy preview components.
 * @returns Main encapsulation component for all commoditiy preview components.
 */
const CommodityListingContainer: React.FC = () => {

    return (
        <>
            <CommodityDirectoryMenu />
        </>
    );
}

export default CommodityListingContainer;