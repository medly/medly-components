import { boolean, number } from '@storybook/addon-knobs';
import React, { useState } from 'react';

import { Pagination } from './Pagination';

export const Basic = () => {
    const [activePage, setActivePage] = useState(1);

    return (
        <Pagination
            activePage={activePage}
            totalItems={number('Total Items', 1000)}
            itemsPerPage={number('Items per page', 20)}
            pageRangeDisplayed={number('Page Range Displayed', 5)}
            hideFirstLastLinks={boolean('Hide First Last Links', false)}
            hidePrevNextLinks={boolean('Hide Prev Next Links', false)}
            onPageClick={setActivePage}
        />
    );
};
