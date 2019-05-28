import { boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import Pagination from './Pagination';

const DemoComponent: React.SFC = props => {
    const [activePage, setActivePage] = useState(1);
    const onPageClickHandler = (page: number) => setActivePage(page);

    return (
        <>
            {React.Children.map(props.children, child => {
                return React.cloneElement(child as any, {
                    activePage,
                    onPageClick: onPageClickHandler
                });
            })}
        </>
    );
};

const onPageClick = (page: number) => {
    // update state with page number;
};

storiesOf('Core', module).add(
    'Pagination',
    () => (
        <DemoComponent>
            <Pagination
                totalItems={number('Total Items', 1000)}
                itemsPerPage={number('Items per page', 20)}
                pageRangeDisplayed={number('Page Range Displayed', 5)}
                hideFirstLastLinks={boolean('Hide First Last Links', false)}
                hidePrevNextLinks={boolean('Hide Prev Next Links', false)}
                onPageClick={onPageClick}
            />
        </DemoComponent>
    ),
    {
        props: {
            propTablesExclude: [DemoComponent],
            propTables: [Pagination]
        },
        jsx: { skip: 1 }
    }
);
