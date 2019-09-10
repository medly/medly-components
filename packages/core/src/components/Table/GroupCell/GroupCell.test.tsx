import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Text from '../../Text';

import { GroupCell, GroupCellTitle } from './GroupCell.styled';

describe('GroupCell', () => {
    it('should rennder properly', () => {
        const { container } = TestUtils.render(
            <GroupCell hide={false}>
                <Text>Dummy</Text>
            </GroupCell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should not rennder hide prop is given', () => {
        const { container } = TestUtils.render(
            <GroupCell hide>
                <Text>Dummy</Text>
            </GroupCell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should rennder GroupCellTitle properly', () => {
        const { container } = TestUtils.render(
            <GroupCellTitle>
                <Text>Dummy</Text>
            </GroupCellTitle>
        );
        expect(container).toMatchSnapshot();
    });
});
