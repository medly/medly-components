import { storiesOf } from '@storybook/react';
import React from 'react';
import Link from '../Link';
import { BreadCrumbs } from './BreadCrumbs';

storiesOf('Core', module).add(
    'BreadCrumbs',
    () => (
        <BreadCrumbs>
            <Link href="#">Covered Entities</Link>
            <Link href="#">Add New Entities</Link>
        </BreadCrumbs>
    ),
    {
        props: {
            propTablesExclude: [Link]
        }
    }
);
