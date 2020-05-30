import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { FileInput } from './FileInput';

describe('FileInput component', () => {
    const foo = new File(['foo'], 'foo.txt', {
            type: 'text/plain'
        }),
        bar = new File(['bar'], 'bar.txt', {
            type: 'text/plain'
        });

    afterEach(cleanup);

    it('should render properly with default props', () => {
        const mockOnChange = jest.fn();
        // @ts-ignore
        const { container } = render(<FileInput files={[]} onChange={mockOnChange} />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with all props', () => {
        const mockOnChange = jest.fn();
        const { container } = render(
            <FileInput
                // @ts-ignore
                files={[foo, bar]}
                onChange={mockOnChange}
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
        const { container } = render(<FileInput disabled files={[]} onFocus={mockOnFocus} onChange={mockOnChange} />);
        const label = container.querySelector('#medly-file-input-label');
        fireEvent.click(label);
        expect(mockOnFocus).toHaveBeenCalled();
    });

    it('should call onChange prop with expected files', async () => {
        const mockOnFocus = jest.fn();
        const mockOnChange = jest.fn();
        // @ts-ignore
        const { container } = render(<FileInput files={[]} onFocus={mockOnFocus} onChange={mockOnChange} />),
            input = container.querySelector('#medly-file-input');

        Object.defineProperty(input, 'files', {
            value: [foo, bar]
        });
        fireEvent.change(input);
        expect(mockOnChange).toBeCalledWith([foo, bar]);
        expect(input).toHaveValue('');
    });
});
