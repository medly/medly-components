import { render } from '@test-utils';
import Text from '../../Text';
import { GroupCell, GroupCellTitle } from './GroupCell.styled';

describe('GroupCell', () => {
    it('should render properly', () => {
        const { container } = render(
            <GroupCell hidden={false}>
                <Text>Dummy</Text>
            </GroupCell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should not render hidden prop is given', () => {
        const { container } = render(
            <GroupCell hidden>
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

    it('should render GroupCell with right border if it is a title cell', () => {
        const { container } = render(
            <GroupCell isTitleCell hidden={false}>
                <Text>Dummy</Text>
            </GroupCell>
        );
        expect(container).toMatchSnapshot();
    });
});
