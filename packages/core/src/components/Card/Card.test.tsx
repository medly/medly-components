import { TestUtils } from '@medly-components/utils';
import 'jest-styled-components';
import React from 'react';
import Text from '../Text';
import { CardStyled as Card } from './Card.styled';

describe('Card component', () => {
    it('should render correctly with all the default props', () => {
        const { container } = TestUtils.render(
            <Card>
                <Text>Dummy Text</Text>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const { container } = TestUtils.render(
            <Card width="100px" height="100px" center>
                <Text>Dummy Text</Text>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });
});
