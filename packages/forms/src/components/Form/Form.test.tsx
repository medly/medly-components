import { cleanup, fireEvent, render, screen } from '@test-utils';
import { format } from 'date-fns';
import React from 'react';
import { FormCustomComponent } from '../Fields/types';
import { Form } from './Form';
import { testSchema } from './testSchema';

const initialState = {
        firstName: 'first name',
        lastName: 'last name',
        email: 'email@email.com',
        languages: ['java'],
        role: 'front-end',
        birthDate: '01/01/2019',
        experience: {
            startDate: '01/01/2019',
            endDate: '01/02/2019'
        },
        country: 'india',
        graduation: ['b-tech'],
        marks: {
            database: 10,
            algorithms: 10,
            maths: 10
        },
        agree: true
    },
    datesInitialState = {
        birthDate: new Date(2020, 0, 1),
        experience: {
            startDate: new Date(2020, 0, 1),
            endDate: new Date(2020, 1, 1)
        }
    };

describe('Form', () => {
    afterEach(cleanup);
    it('should render properly without initial state', () => {
        const { container } = render(
            <Form
                name="Test form"
                fieldSchema={testSchema}
                header="Dummy Form"
                helperText="Dummy Description"
                onSubmit={jest.fn()}
                minWidth="300px"
                fullWidth
                gridGap="1.2rem"
                actionLabel="Upload"
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly with initial state', () => {
        const { container } = render(<Form fieldSchema={testSchema} onSubmit={jest.fn()} initialState={initialState} />);
        expect(container).toMatchSnapshot();
    });

    it('should render fields based on fieldSchema function', () => {
        const testSchema = (values: { [k: string]: unknown }) => ({
            firstName: { type: 'text', label: 'First Name' },
            lastName: { type: 'text', label: 'Last Name', disabled: !values.firstName }
        });
        const { getByRole } = render(<Form fieldSchema={testSchema} onSubmit={jest.fn()} initialState={{}} />);
        expect(getByRole('textbox', { name: 'Last Name' })).toBeDisabled();
        fireEvent.change(getByRole('textbox', { name: 'First Name' }), { target: { value: 'demo' } });
        expect(getByRole('textbox', { name: 'Last Name' })).not.toBeDisabled();
    });

    it('should render error message properly', () => {
        render(<Form fieldSchema={{ firstName: { required: true, type: 'text', label: 'First Name' } }} onSubmit={jest.fn()} />);
        const input = screen.getByRole('textbox', { name: 'First Name' });
        fireEvent.focus(input);
        fireEvent.blur(input);
        expect(screen.getByText('Constraints not satisfied')).toBeInTheDocument();
    });

    it('should not render any field if component type is not matched', () => {
        const { container } = render(<Form fieldSchema={{ dummy: { type: 'wrongType' } }} onSubmit={jest.fn()} />);
        expect(container).toMatchSnapshot();
    });

    it('should render any custom component type', () => {
        const DummyCustomComponent: FormCustomComponent = jest.fn(() => <div>Dummy Custom component</div>);

        render(<Form fieldSchema={{ dummy: { type: 'custom', component: DummyCustomComponent } }} onSubmit={jest.fn()} />);
        expect(screen.getByText('Dummy Custom component')).toBeInTheDocument();
    });

    it('should hide actions when hideAction props is truthy', () => {
        const { queryByText } = render(<Form hideActions fieldSchema={testSchema} initialState={initialState} onSubmit={jest.fn()} />);
        expect(queryByText('Save')).toBeNull();
    });

    it('should be able to add api validation error causes', () => {
        const { getByText } = render(
            <Form
                apiErrorMessages={{ firstName: 'First name should be at least 8 character' }}
                fieldSchema={{ firstName: { required: true, type: 'text' } }}
                onSubmit={jest.fn()}
            />
        );
        expect(getByText('First name should be at least 8 character')).toBeInTheDocument();
    });

    it('should reset all the fields on clicking on reset button', () => {
        const mockOnReset = jest.fn(),
            { container } = render(
                <Form
                    name="Test form"
                    fieldSchema={{ firstName: { type: 'text', label: 'First Name' } }}
                    actionSchema={{
                        actions: [{ type: 'reset', label: 'Reset' }]
                    }}
                    onReset={mockOnReset}
                    onSubmit={jest.fn()}
                />
            );
        const input = container.querySelector('#firstName-input');
        fireEvent.change(screen.getByRole('textbox', { name: 'First Name' }), {
            target: { name: 'firstName', value: 'Dummy Value' }
        });
        expect(input).toHaveValue('Dummy Value');
        fireEvent.reset(screen.getByRole('form'));
        expect(mockOnReset).toBeCalled();
    });

    describe('should call onSubmit', () => {
        afterEach(cleanup);

        it('with initial state', () => {
            const mockOnSubmit = jest.fn();
            render(<Form name="Test form" fieldSchema={testSchema} onSubmit={mockOnSubmit} initialState={initialState} />);
            fireEvent.submit(screen.getByRole('form'));
            expect(mockOnSubmit).toHaveBeenCalledWith(initialState);
        });

        it('with expected data', async (done: any) => {
            const fooFile = new File(['foo'], 'foo.txt', {
                    type: 'text/plain'
                }),
                dateStringInitialState = {
                    birthDate: '01/01/2020',
                    experience: {
                        startDate: '01/01/2019',
                        endDate: '01/02/2019'
                    }
                },
                mockOnChange = jest.fn(),
                mockOnSubmit = jest.fn(),
                formData = {
                    firstName: 'first name',
                    lastName: 'last name',
                    email: 'email@email.com',
                    languages: ['java'],
                    role: 'front-end',
                    birthDate: '02/01/2020',
                    experience: {
                        startDate: '02/01/2019',
                        endDate: '03/02/2019'
                    },
                    country: 'india',
                    graduation: ['b-tech'],
                    agree: true,
                    marks: {
                        database: 10,
                        algorithms: 10,
                        maths: 10
                    },
                    resume: [fooFile]
                },
                renderComp = (state: object = dateStringInitialState) => (
                    <Form name="Test form" fieldSchema={testSchema} onSubmit={mockOnSubmit} initialState={state} onChange={mockOnChange} />
                );
            const { container } = render(renderComp());
            const fileInput = container.querySelector('#resume');
            Object.defineProperty(fileInput, 'files', {
                value: [fooFile]
            });
            // TextField
            fireEvent.change(screen.getByRole('textbox', { name: 'First Name' }), {
                target: { name: 'firstName', value: formData.firstName }
            });
            fireEvent.change(screen.getByRole('textbox', { name: 'Last Name' }), {
                target: { name: 'lastName', value: formData.lastName }
            });
            fireEvent.change(screen.getByRole('textbox', { name: 'Email' }), {
                target: { value: formData.email }
            });
            // FileInput
            fileInput && fireEvent.change(fileInput);
            // Checkbox Group
            fireEvent.click(screen.getByText('JAVA'));
            // Radio Group
            fireEvent.click(screen.getByText('Front End'));
            // SingleSelect
            fireEvent.click(screen.getByRole('textbox', { name: 'Country' }));
            fireEvent.click(screen.getByText('India'));

            // DatePicker
            fireEvent.change(screen.getByRole('textbox', { name: 'Birth Date' }), {
                target: { value: '02/01/2020' }
            });
            // DateRangePicker
            fireEvent.change(screen.getByRole('textbox', { name: 'From' }), {
                target: { value: '02/01/2019' }
            });
            fireEvent.change(screen.getByRole('textbox', { name: 'To' }), {
                target: { value: '03/02/2019' }
            });
            // MultiSelect
            fireEvent.click(screen.getByRole('textbox', { name: 'Graduation' }));
            fireEvent.click(screen.getByText('BTech'));
            // TextField Number
            fireEvent.change(screen.getByRole('spinbutton', { name: 'Database' }), {
                target: { value: formData.marks.database }
            });
            fireEvent.change(screen.getByRole('spinbutton', { name: 'Algorithms' }), {
                target: { value: formData.marks.algorithms }
            });
            fireEvent.change(screen.getByRole('spinbutton', { name: 'Maths' }), {
                target: { value: formData.marks.maths }
            });
            // Checkbox
            fireEvent.click(screen.getByRole('checkbox', { name: 'Do you Agree' }));
            fireEvent.submit(screen.getByRole('form'));
            expect(mockOnSubmit).toHaveBeenCalledWith(formData);
            expect(mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0]).toEqual(formData);
            done();
        }, 30000);
    });

    it('should call onFocus on focusing on the input', () => {
        const mockOnFocus = jest.fn();
        render(
            <Form
                fieldSchema={{
                    firstName: {
                        type: 'text',
                        label: 'First Name',
                        onFocus: mockOnFocus
                    }
                }}
                onSubmit={jest.fn()}
                onFocus={mockOnFocus}
            />
        );
        fireEvent.focus(screen.getByRole('textbox', { name: 'First Name' }));
        expect(mockOnFocus).toHaveBeenCalled();
    });

    describe('should handle dates', () => {
        it('with default date format', async () => {
            const mockOnSubmit = jest.fn(),
                formData = {
                    birthDate: '01/02/2020',
                    experience: {
                        startDate: '01/02/2020',
                        endDate: '02/03/2020'
                    }
                };
            render(
                <Form
                    name="Test form"
                    fieldSchema={{
                        birthDate: {
                            type: 'date',
                            label: 'Birth Date',
                            placeholder: 'Birth Date'
                        },
                        experience: {
                            type: 'date-range',
                            displayFormat: 'dd/MM/yyyy',
                            label: 'Experience'
                        }
                    }}
                    onSubmit={mockOnSubmit}
                    initialState={datesInitialState}
                />
            );
            // DatePicker
            fireEvent.change(screen.getByRole('textbox', { name: 'Birth Date' }), {
                target: { value: '01/02/2020' }
            });
            // DateRangePicker
            fireEvent.change(screen.getByRole('textbox', { name: 'From' }), {
                target: { value: '01/02/2020' }
            });
            fireEvent.change(screen.getByRole('textbox', { name: 'To' }), {
                target: { value: '02/03/2020' }
            });

            fireEvent.submit(screen.getByRole('form'));
            expect(mockOnSubmit).toHaveBeenCalledWith(formData);
        });

        it('with initial dates as null', async () => {
            const mockOnSubmit = jest.fn();
            render(
                <Form
                    name="Test form"
                    fieldSchema={{
                        experience: {
                            type: 'date-range',
                            displayFormat: 'dd/MM/yyyy',
                            label: 'Experience'
                        }
                    }}
                    onSubmit={mockOnSubmit}
                />
            );
            fireEvent.change(screen.getByRole('textbox', { name: 'From' }), {
                target: { value: '02/09/2021' }
            });

            fireEvent.submit(screen.getByRole('form'));
            expect(mockOnSubmit).toHaveBeenCalledWith({
                experience: {
                    startDate: format(new Date(new Date().getFullYear(), new Date().getMonth(), 2), 'dd/MM/yyyy'),
                    endDate: ''
                }
            });
        });
    });
});
