import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Link from '../Link';
import { BreadCrumbs } from './BreadCrumbs';

describe('BreadCrumbs component', () => {
    it('should render correctly', () => {
        const { container } = TestUtils.render(
            <BreadCrumbs>
                <Link href="#">Covered Entities</Link>
                <Link href="#">Add New Entities</Link>
            </BreadCrumbs>
        );
        expect(container).toMatchSnapshot();
    });
});
