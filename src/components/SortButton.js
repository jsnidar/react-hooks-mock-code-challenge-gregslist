import React from 'react';

const SortButton = ({handleSort}) => {
    
    return (
        <button onClick={handleSort}>
            Sort by Location
        </button>
    )
}

export default SortButton;