import { render } from '@test-utils';
import React from 'react';
import Link from '../Link';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb component', () => {
    it('should render correctly', () => {
        const { container } = render(
            <Breadcrumb>
                <Link href="#">Covered Entities</Link>
                <Link href="#">Add New Entities</Link>
            </Breadcrumb>
        );
        expect(container).toMatchSnapshot();
    });
});
