import { fireEvent, render } from '@test-utils';
import { Row } from './Row.styled';

const renderer = ({ withWhiteBackground = false, onClick = jest.fn(), isRowClickDisabled = false }) =>
    render(
        <table>
            <tbody>
                <Row
                    withWhiteBackground={withWhiteBackground}
                    onClick={onClick}
                    isRowClickDisabled={isRowClickDisabled}
                    gridTemplateColumns="1fr"
                >
                    <td>Demo</td>
                </Row>
            </tbody>
        </table>
    );

describe('CardTable Row', () => {
    it('should render properly with dark theme', () => {
        const { container } = renderer({ withWhiteBackground: false });
        expect(container).toMatchSnapshot();
    });

    it('should render properly with light theme', () => {
        const { container } = renderer({ withWhiteBackground: true });
        expect(container).toMatchSnapshot();
    });

    it('should render with grey background if row is disabled', () => {
        const { container } = renderer({ isRowClickDisabled: true });
        expect(container).toMatchSnapshot();
    });

    it('should call onClick on click of the row', () => {
        const onClick = jest.fn();
        const { getByText } = renderer({ isRowClickDisabled: false, onClick });
        fireEvent.click(getByText('Demo'));
        expect(onClick).toHaveBeenCalled();
    });

    it('should not call onClick on click of the row, if the row is disabled', () => {
        const onClick = jest.fn();
        const { getByText } = renderer({ isRowClickDisabled: true, onClick: undefined });
        fireEvent.click(getByText('Demo'));
        expect(onClick).not.toHaveBeenCalled();
    });
});
