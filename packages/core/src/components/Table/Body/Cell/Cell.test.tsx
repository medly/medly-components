import { render } from '@test-utils';
import React from 'react';
import Checkbox from '../../../Checkbox';
import Text from '../../../Text';
import { Cell } from './Cell.styled';

describe('Cell', () => {
    it('should render text properly', () => {
        const { container } = render(
            <Cell>
                <Text>Dummy</Text>
            </Cell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render frozen text properly', () => {
        const { container } = render(
            <Cell frozen>
                <Text>Dummy</Text>
            </Cell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should not render text if hidden property is given', () => {
        const { container } = render(
            <Cell hidden>
                <Text>Dummy</Text>
            </Cell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render checkbox properly', () => {
        const { container } = render(
            <Cell>
                <Checkbox label="Dummy" />
            </Cell>
        );
        expect(container).toMatchSnapshot();
    });
});
