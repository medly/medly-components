import { CheckIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { updateNestedValue } from '@medly-components/utils';
import { fireEvent, render, waitFor } from '@test-utils';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { TextField } from './TextField';
import { TextFieldProps } from './types';

describe('TextField', () => {
    it('should render properly with default props', () => {
        const { container } = render(<TextField label="Name" />);
        expect(container).toMatchSnapshot();
    });

    test.each(['S', 'M'])('should render properly with %s size', (size: 'S' | 'M') => {
        const { container } = render(<TextField label="Name" size={size} helperText="helper text" prefix={CheckIcon} suffix={CheckIcon} />);
        expect(container).toMatchSnapshot();
    });

    it('should take parents width if we pass fullWidth prop as true', () => {
        const { container } = render(<TextField label="Name" fullWidth />);
        expect(container.querySelector('div')).toHaveStyle(`
            display: flex;
        `);
        expect(container.querySelector('input')).toHaveStyle(`
            width: 100%;
        `);
    });

    it('should take passed min width', () => {
        const { container } = render(<TextField label="Name" minWidth="30rem" />);
        expect(container.querySelector('div')).toHaveStyle(`
            min-width: 30rem;
        `);
    });

    it('should take passed max width', () => {
        const { container } = render(<TextField label="Name" maxWidth="30rem" />);
        expect(container.querySelector('div')).toHaveStyle(`
            max-width: 30rem;
        `);
    });

    it('should focus on input when clicked on the wrapper', () => {
        const { container } = render(<TextField label="Name" minWidth="30rem" id="dummy" />);
        fireEvent.click(container.querySelector('#dummy-input-wrapper > div'));
        expect(container.querySelector('input')).toHaveFocus();
    });

    describe('without label', () => {
        it('should render default state properly', () => {
            const { container } = render(<TextField type="email" />);
            expect(container).toMatchSnapshot();
        });

        it('should render focus state properly ', () => {
            const { container } = render(<TextField label="Name" />);
            fireEvent.focusIn(container.querySelector('input'));
            expect(container).toMatchSnapshot();
        });
    });

    it('should not call onClick function on click on helper text', () => {
        const mockOnClick = jest.fn();
        const { container } = render(
            <div onClick={mockOnClick}>
                <TextField label="Name" required type="email" />
            </div>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render asterisk if we pass required prop as true', () => {
        const { container } = render(<TextField label="Name" required />);
        expect(container.querySelector('label')).toMatchSnapshot();
    });

    describe('character count', () => {
        it('should correctly render character count if we pass withCharacterCount and maxlength', () => {
            const { container } = render(<TextField withCharacterCount maxLength={20} />);
            expect(container).toMatchSnapshot();
        });

        it('should correctly render character count for S size TextField if we pass withCharacterCount and maxlength', () => {
            const { container } = render(<TextField withCharacterCount maxLength={20} size="S" />);
            expect(container).toMatchSnapshot();
        });

        it('should correctly render character count for multiline TextField if we pass withCharacterCount and maxlength', () => {
            const { container } = render(<TextField withCharacterCount maxLength={20} multiline />);
            expect(container).toMatchSnapshot();
        });

        it('should correctly render character count for fusion TextField variant if we pass withCharacterCount and maxlength', () => {
            const { container } = render(<TextField withCharacterCount maxLength={20} variant="fusion" />);
            expect(container).toMatchSnapshot();
        });

        it('should render correct character count if we pass withCharacterCount, maxlength, and defaultValue', () => {
            const { getByText } = render(<TextField withCharacterCount maxLength={20} defaultValue="test" />);
            expect(getByText('4/20')).toBeInTheDocument();
        });

        it('should correctly render character count when the count value is 80% of the maxLength', () => {
            const { container } = render(<TextField withCharacterCount maxLength={10} defaultValue="12345678" />);
            expect(container).toMatchSnapshot();
        });

        it('should correctly render character count when the count value is 100% of the maxLength', () => {
            const { container } = render(<TextField withCharacterCount maxLength={10} defaultValue="1234567890" />);
            expect(container).toMatchSnapshot();
        });
    });

    it('should call onChange prop on changing the value', () => {
        const mockOnChange = jest.fn(),
            { container } = render(<TextField value="11" label="Name" required onChange={mockOnChange} />);
        fireEvent.change(container.querySelector('input'), { target: { value: '11 / 11 / 1111' } });
        expect(mockOnChange).toHaveBeenCalled();
    });

    describe('masking', () => {
        it('should render mask if provided with outlined variant', () => {
            const { getByText } = render(<TextField label="Date" minWidth="30rem" id="dummy" variant="outlined" mask="DD / MM / YYYY" />);
            expect(getByText('DD / MM / YYYY')).toBeInTheDocument();
        });

        it('should render mask if provided with filled variant', () => {
            const { getByText } = render(<TextField label="Date" minWidth="30rem" id="dummy" variant="filled" mask="DD / MM / YYYY" />);
            expect(getByText('DD / MM / YYYY')).toBeInTheDocument();
        });

        it('should render mask if provided with fusion variant', () => {
            const { getByText } = render(<TextField label="Date" minWidth="30rem" id="dummy" variant="fusion" mask="DD / MM / YYYY" />);
            expect(getByText('DD / MM / YYYY')).toBeInTheDocument();
        });

        it('should on change on changing the value', async () => {
            const mockOnChange = jest.fn();
            const { container } = render(<TextField minWidth="30rem" id="dummy" mask="DD / MM / YYYY" onChange={mockOnChange} />);
            fireEvent.change(container.querySelector('input'), { target: { value: '11 / 11 / 1111', selectionStart: 14 } });
            expect(mockOnChange).toHaveBeenCalled();
        });

        it('should update mask label if mask and input value are same', async () => {
            const mockOnChange = jest.fn();
            const { getByText } = render(
                <TextField minWidth="30rem" id="dummy" value="11 / 11 / 1111" mask="DD / MM / YYYY" onChange={mockOnChange} />
            );
            await waitFor(() => expect(getByText('11 / 11 / 1111')).toBeInTheDocument());
        });
    });

    describe('error Validation', () => {
        it('should render html5 error message on invalid form submission', async () => {
            const mockOnInvalid = jest.fn(),
                { container, findByText } = render(<TextField label="Name" required type="email" onInvalid={mockOnInvalid} />);
            fireEvent.invalid(container.querySelector('input'));
            const message = await findByText('Constraints not satisfied');
            expect(message).toBeInTheDocument();
            expect(mockOnInvalid).toHaveBeenCalled();
        });

        it('should render html5 error message on moving focus out with invalid value', async () => {
            const mockOnBlur = jest.fn(),
                { container, findByText } = render(<TextField label="Name" required type="email" value="a" onBlur={mockOnBlur} />);
            fireEvent.focus(container.querySelector('input'));
            fireEvent.blur(container.querySelector('input'));
            const message = await findByText('Constraints not satisfied');
            expect(message).toBeInTheDocument();
            expect(mockOnBlur).toHaveBeenCalled();
        });

        it('should render custom error message if validator function is returning error message', async () => {
            const mockOnBlur = jest.fn(),
                validator = (val: string) => val.length < 3 && 'Email should be more then 3 characters',
                { container, getByText } = render(
                    <TextField label="Name" required type="email" value="du" onBlur={mockOnBlur} validator={validator} />
                ),
                input = container.querySelector('input');
            fireEvent.blur(input);
            expect(getByText('Email should be more then 3 characters')).toBeInTheDocument();
            expect(input.validationMessage).toEqual('Email should be more then 3 characters');
            expect(mockOnBlur).toBeCalled();
        });

        it('should not return error message if it is not returning any message', async () => {
            const validator = (val: string) => val.length < 3 && 'Email should be more then 3 characters',
                { container, queryByText } = render(
                    <TextField label="Name" required value="dummy" onBlur={jest.fn} validator={validator} />
                ),
                input = container.querySelector('input');
            fireEvent.blur(input);
            expect(input.validationMessage).toEqual('');
            expect(queryByText('Email should be more then 3 characters')).toBeNull();
        });
    });

    describe.each(['outlined', 'filled', 'fusion'])('with %s variant', (variant: TextFieldProps['variant']) => {
        describe.each(['with label', 'without label'])('and %s', (labelCnd: string) => {
            it('should render default state properly', () => {
                const { container } = render(<TextField variant={variant} label={labelCnd === 'with label' ? 'Name' : ''} />);
                expect(container).toMatchSnapshot();
            });
            it('should render focus state properly', () => {
                const { container } = render(<TextField variant={variant} label={labelCnd === 'with label' ? 'Name' : ''} />);
                fireEvent.focusIn(container.querySelector('input'));
                expect(container).toMatchSnapshot();
            });
            it('should render disabled state properly', () => {
                const { container } = render(<TextField variant={variant} disabled label={labelCnd === 'with label' ? 'Name' : ''} />);
                fireEvent.focusIn(container.querySelector('input'));
                expect(container).toMatchSnapshot();
            });
        });

        it('should render error state properly ', () => {
            const { container } = render(<TextField variant={variant} label="Name" errorText="Something wen wrong" />);
            expect(container).toMatchSnapshot();
        });

        it('should render error state properly with a value', () => {
            const { container } = render(
                <TextField variant={variant} label="Name" errorText="Something wen wrong" value="Example value" />
            );
            expect(container).toMatchSnapshot();
        });

        it('should render helper text properly', () => {
            const { container } = render(<TextField variant={variant} label="Name" helperText="Some text" />);
            expect(container.querySelector('span')).toMatchSnapshot();
        });

        it('should render error text properly', () => {
            const { container } = render(<TextField variant={variant} label="Name" errorText="Some text" />);
            expect(container.querySelector('span')).toMatchSnapshot();
        });

        it('should render properly with multiline', () => {
            const { container } = render(<TextField variant={variant} label="Name" multiline={true} />);
            expect(container).toMatchSnapshot();
        });

        it('should render properly with prefix', () => {
            const { container } = render(<TextField variant={variant} label="Name" prefix={CheckIcon} />);
            expect(container).toMatchSnapshot();
        });

        it('should render properly with suffix', () => {
            const { container } = render(<TextField variant={variant} label="Name" suffix={CheckIcon} />);
            expect(container).toMatchSnapshot();
        });

        it('should render properly with helper-text tooltip', () => {
            const { container } = render(
                <TextField variant={variant} label="Name" showTooltipForHelperAndErrorText helperText="Some text" />
            );
            const popoverWrapper = container.querySelector('#medly-popover-wrapper');
            fireEvent.mouseOver(popoverWrapper);
            expect(container.querySelector('#medly-popover-popup').textContent).toEqual('Some text');
        });

        it('should render properly with error-text tooltip', () => {
            const { container } = render(
                <TextField variant={variant} label="Name" showTooltipForHelperAndErrorText errorText="Some text" />
            );
            const input = container.querySelector('input');
            fireEvent.focusIn(input);
            fireEvent.blur(input);
            const popoverWrapper = container.querySelector('#medly-popover-wrapper');
            fireEvent.mouseOver(popoverWrapper);
            expect(container.querySelector('#medly-popover-popup').textContent).toEqual('Some text');
        });

        it('should render properly with custom disabled cursor (themed)', () => {
            const { container } = render(
                <ThemeProvider
                    theme={updateNestedValue(defaultTheme, 'textField', {
                        ...defaultTheme.textField,
                        filled: {
                            ...defaultTheme.textField.filled,
                            disabled: {
                                ...defaultTheme.textField.filled.disabled,
                                cursor: 'text'
                            }
                        },
                        outlined: {
                            ...defaultTheme.textField.outlined,
                            disabled: {
                                ...defaultTheme.textField.outlined.disabled,
                                cursor: 'text'
                            }
                        },
                        fusion: {
                            ...defaultTheme.textField.fusion,
                            disabled: {
                                ...defaultTheme.textField.fusion.disabled,
                                cursor: 'text'
                            }
                        }
                    })}
                >
                    <TextField variant={variant} label="Name" suffix={CheckIcon} disabled />
                </ThemeProvider>
            );
            expect(container).toMatchSnapshot();
        });

        it('should render without suffix/prefix/character-count if we pass showDecorators as false', () => {
            const prefix = () => <span>prefix</span>;
            const suffix = () => <span>suffix</span>;
            const { queryByText } = render(
                <TextField
                    variant={variant}
                    label="Name"
                    value={'four'}
                    withCharacterCount={true}
                    helperText={'helperText'}
                    prefix={prefix}
                    suffix={suffix}
                    showDecorators={false}
                />
            );
            expect(queryByText('prefix')).toBeNull();
            expect(queryByText('suffix')).toBeNull();
            expect(queryByText('4')).toBeNull();
        });
    });
});
