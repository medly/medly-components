import { TestUtils } from '@medly-components/utils';
import React from 'react';
import { FileInput } from './FileInput';

describe('FileInput component', () => {
    const foo = new File(['foo'], 'foo.txt', {
            type: 'text/plain'
        }),
        bar = new File(['bar'], 'bar.txt', {
            type: 'text/plain'
        });

    afterEach(TestUtils.cleanup);

    it('should render properly with default props', () => {
        const mockOnChange = jest.fn();
        // @ts-ignore
        const { container } = TestUtils.render(<FileInput files={[]} onChange={mockOnChange} />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with all props', () => {
        const mockOnChange = jest.fn();
        const { container } = TestUtils.render(
            <FileInput
                // @ts-ignore
                files={[foo, bar]}
                onChange={mockOnChange}
                id="email-input"
                fullWidth
                label="Email Address"
                labelPosition="top"
                required
                disabled
                description="We will never share your email with anyone"
                descriptionColor="grey"
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should call onFocus prop when click on the label', () => {
        const mockOnFocus = jest.fn();
        const mockOnChange = jest.fn();
        // @ts-ignore
        const { getByTestId } = TestUtils.render(<FileInput disabled files={[]} onFocus={mockOnFocus} onChange={mockOnChange} />);
        const label = getByTestId('file-input-label');
        TestUtils.fireEvent.click(label);
        expect(mockOnFocus).toHaveBeenCalled();
    });

    it('should call onChange prop with expected files', async () => {
        const mockOnFocus = jest.fn();
        const mockOnChange = jest.fn();
        // @ts-ignore
        const { getByTestId } = TestUtils.render(<FileInput files={[]} onFocus={mockOnFocus} onChange={mockOnChange} />),
            input = getByTestId('file-input');

        Object.defineProperty(input, 'files', {
            value: [foo, bar]
        });
        TestUtils.fireEvent.change(input);
        expect(mockOnChange).toBeCalledWith([foo, bar]);
    });
});
