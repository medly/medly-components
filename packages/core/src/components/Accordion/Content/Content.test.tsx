import { render } from '@test-utils';
import React from 'react';
import Text from '../../Text';
import { Content } from './Content';

describe('Content component', () => {
    const renderTitle = () =>
        render(
            <Content>
                <Text>Hello</Text>
            </Content>
        );
    it('should render properly', () => {
        const { container } = renderTitle();
        expect(container).toMatchSnapshot();
    });
});
