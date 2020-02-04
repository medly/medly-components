import { render } from '@test-utils';
import React from 'react';
import Text from '../../Text';
import { GroupCell, GroupCellTitle } from './GroupCell.styled';

describe('GroupCell', () => {
    it('should render properly', () => {
        const { container } = render(
            <GroupCell hide={false}>
                <Text>Dummy</Text>
            </GroupCell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should not render hide prop is given', () => {
        const { container } = render(
            <GroupCell hide>
                <Text>Dummy</Text>
            </GroupCell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render GroupCellTitle properly', () => {
        const { container } = render(
            <GroupCellTitle>
                <Text>Dummy</Text>
            </GroupCellTitle>
        );
        expect(container).toMatchSnapshot();
    });
});
