import { boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { Pagination } from './Pagination';

const DemoComponent = () => {
    const [activePage, setActivePage] = useState(1);

    return (
        <>
            <Pagination
                activePage={activePage}
                totalItems={number('Total Items', 1000)}
                itemsPerPage={number('Items per page', 20)}
                pageRangeDisplayed={number('Page Range Displayed', 5)}
                hideFirstLastLinks={boolean('Hide First Last Links', false)}
                hidePrevNextLinks={boolean('Hide Prev Next Links', false)}
                onPageClick={setActivePage}
            />
        </>
    );
};

storiesOf('Core', module).add('Pagination', DemoComponent, {
    props: {
        propTables: [Pagination]
    },
    jsx: { skip: 1 }
});
