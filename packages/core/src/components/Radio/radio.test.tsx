import { render, screen } from '@test-utils';
import userEvent from '@testing-library/user-event';
import { LabelPositions } from '../Label/types';
import { Radio } from './Radio';

describe('Radio component', () => {
    const options: boolean[] = [true, false],
        labelPositions: LabelPositions[] = ['left', 'right', 'top', 'bottom'],
        verticalLabelPositions: Partial<LabelPositions>[] = ['top', 'bottom'];

    describe.each(options)('should render correctly with checked %p', checked => {
        test.each(['checked', 'disabled', 'hasError'])('and %s state', state => {
            const { container } = render(<Radio {...{ [state]: true }} checked={checked} value="female" />);
            expect(container).toMatchSnapshot();
        });
    });

    test.each(labelPositions)('should render correctly with %s labelPosition', labelPosition => {
        const { container } = render(<Radio label="Dummy" labelPosition={labelPosition} value="female" />);
        expect(container).toMatchSnapshot();
    });

    test.each(verticalLabelPositions)('should render properly with fullWidth and %p labelPosition', labelPosition => {
        const { container } = render(<Radio id="dummy" fullWidth label="Dummy" value="female" labelPosition={labelPosition} />);
        expect(container.querySelector('#dummy-wrapper')).toHaveStyle(`
            display: flex;
            padding: 0.8rem 0
        `);
    });

    it('should call onChange handler on click on checkbox', () => {
        const mockOnChange = jest.fn();
        render(<Radio onChange={mockOnChange} label="Dummy" value="female" />);
        userEvent.click(screen.getByRole('radio'));
        expect(mockOnChange).toBeCalled();
    });
});
