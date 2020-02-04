import { render } from '@test-utils';
import React from 'react';
import Link from '../Link';
import { BreadCrumbs } from './BreadCrumbs';

describe('BreadCrumbs component', () => {
    it('should render correctly', () => {
        const { container } = render(
            <BreadCrumbs>
                <Link href="#">Covered Entities</Link>
                <Link href="#">Add New Entities</Link>
            </BreadCrumbs>
        );
        expect(container).toMatchSnapshot();
    });
});
