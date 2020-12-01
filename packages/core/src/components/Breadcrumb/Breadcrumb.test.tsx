import { ChevronRightIcon } from '@medly-components/icons';
import { render } from '@test-utils';
import React from 'react';
import Text from '../Text';
import { Breadcrumb } from './Breadcrumb';
import { BreadcrumbProps } from './types';

describe('Breadcrumb component', () => {
    test.each(['/', <ChevronRightIcon size="S" key="dummy" />])(
        'should render properly with %p separator',
        (separator: BreadcrumbProps['separator']) => {
            const { container } = render(
                <Breadcrumb separator={separator}>
                    <Breadcrumb.Back />
                    <Breadcrumb.Item>
                        <Text>Covered Entities</Text>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item onClick={jest.fn()}>Add New Entities</Breadcrumb.Item>
                </Breadcrumb>
            );
            expect(container).toMatchSnapshot();
        }
    );
});
