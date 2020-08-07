import { cleanup, fireEvent, render } from '@test-utils';
import { format } from 'date-fns';
import React from 'react';
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
                fieldSchema={testSchema}
                header="Dummy Form"
                helperText="Dummy Description"
                onSubmit={jest.fn()}
                minWidth="300px"
                fullWidth
                actionLabel="Upload"
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly with initial state', () => {
        const { container } = render(<Form fieldSchema={testSchema} onSubmit={jest.fn()} initialState={initialState} />);
        expect(container).toMatchSnapshot();
    });

    it('should render error message properly', () => {
        const { container, getByText } = render(
            <Form fieldSchema={{ firstName: { required: true, type: 'text' } }} onSubmit={jest.fn()} />
        );
        fireEvent.focus(container.querySelector('#firstName-input'));
        fireEvent.blur(container.querySelector('#firstName-input'));
        expect(getByText('Constraints not satisfied')).toBeInTheDocument();
    });

    it('should not render any field if component type is not matched', () => {
        const { container } = render(<Form fieldSchema={{ dummy: { type: 'wrongType' } }} onSubmit={jest.fn()} />);
        expect(container).toMatchSnapshot();
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
                    fieldSchema={{ firstName: { type: 'text', label: 'First Name' } }}
                    actionSchema={{
                        actions: [{ type: 'reset', label: 'Reset' }]
                    }}
                    onReset={mockOnReset}
                    onSubmit={jest.fn()}
                />
            );
        const input = container.querySelector('#firstName-input');
        fireEvent.change(input, {
            target: { name: 'firstName', value: 'Dummy Value' }
        });
        expect(input).toHaveValue('Dummy Value');
        fireEvent.reset(container.querySelector('form'));
        expect(mockOnReset).toBeCalled();
    });

    describe('should call onSubmit', () => {
        afterEach(cleanup);

        it('with initial state', () => {
            const mockOnSubmit = jest.fn(),
                { container } = render(<Form fieldSchema={testSchema} onSubmit={mockOnSubmit} initialState={initialState} />);
            fireEvent.submit(container.querySelector('form'));
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
                        endDate: '02/02/2019'
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
                    <Form fieldSchema={testSchema} onSubmit={mockOnSubmit} initialState={state} onChange={mockOnChange} />
                ),
                { container, getByText, findByText, getByPlaceholderText, getByTitle, getByLabelText } = render(renderComp());
            const fileInput = container.querySelector('#resume');
            Object.defineProperty(fileInput, 'files', {
                value: [fooFile]
            });
            fireEvent.change(container.querySelector('#firstName-input'), {
                target: { name: 'firstName', value: formData.firstName }
            });
            fireEvent.change(container.querySelector('#lastName-input'), {
                target: { name: 'lastName', value: formData.lastName }
            });
            fireEvent.change(container.querySelector('#email-input'), {
                target: { value: formData.email }
            });
            fireEvent.change(fileInput);
            fireEvent.click(getByText('JAVA'));
            fireEvent.click(getByText('Front End'));
            fireEvent.click(container.querySelector('#country-input'));
            const country = await findByText('India');
            fireEvent.click(country);

            fireEvent.click(container.querySelector('#birthDate-input'));
            fireEvent.click(getByTitle(new Date(2020, 0, 2).toDateString()));

            fireEvent.focus(container.querySelector('#startDate'));
            fireEvent.click(getByLabelText(`Day-${new Date(2019, 0, 2).toDateString()}`));

            fireEvent.focus(container.querySelector('#endDate'));
            fireEvent.click(getByLabelText(`Day-${new Date(2019, 1, 2).toDateString()}`));

            fireEvent.click(container.querySelector('#graduation-input'));
            const graduation = await findByText('BTech');
            fireEvent.click(graduation);

            fireEvent.change(getByPlaceholderText('Database'), {
                target: { value: formData.marks.database }
            });
            fireEvent.change(getByPlaceholderText('Algorithms'), {
                target: { value: formData.marks.algorithms }
            });
            fireEvent.change(getByPlaceholderText('Maths'), {
                target: { value: formData.marks.maths }
            });
            fireEvent.click(container.querySelector('#agree'));

            fireEvent.submit(container.querySelector('form'));
            expect(mockOnSubmit).toHaveBeenCalledWith(formData);
            expect(mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0]).toEqual(formData);
            done();
        }, 30000);
    });

    it('should call onFocus on focusing on the input', () => {
        const mockOnFocus = jest.fn(),
            { container } = render(
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
        fireEvent.focus(container.querySelector('#firstName-input'));
        expect(mockOnFocus).toHaveBeenCalled();
    });

    describe('should handle dates', () => {
        it('with initial state date', async () => {
            const mockOnSubmit = jest.fn(),
                formData = {
                    birthDate: '02/01/2020',
                    experience: {
                        startDate: '02/01/2020',
                        endDate: '02/02/2020'
                    }
                },
                { container, getByTitle, getByLabelText } = render(
                    <Form
                        fieldSchema={{
                            birthDate: {
                                type: 'date',
                                displayFormat: 'dd/MM/yyyy',
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
            fireEvent.click(container.querySelector('#birthDate-input'));
            fireEvent.click(getByTitle(new Date(2020, 0, 2).toDateString()));

            fireEvent.focus(container.querySelector('#startDate'));
            fireEvent.click(getByLabelText(`Day-${new Date(2020, 0, 2).toDateString()}`));

            fireEvent.focus(container.querySelector('#endDate'));
            fireEvent.click(getByLabelText(`Day-${new Date(2020, 1, 2).toDateString()}`));

            fireEvent.submit(container.querySelector('form'));
            expect(mockOnSubmit).toHaveBeenCalledWith(formData);
        });

        it('with default date format', async () => {
            const mockOnSubmit = jest.fn(),
                formData = {
                    birthDate: '01/02/2020',
                    experience: {
                        startDate: '01/02/2020',
                        endDate: '02/02/2020'
                    }
                },
                { container, getByTitle, getByLabelText } = render(
                    <Form
                        fieldSchema={{
                            birthDate: {
                                type: 'date',
                                label: 'Birth Date',
                                placeholder: 'Birth Date'
                            },
                            experience: {
                                type: 'date-range',
                                label: 'Experience'
                            }
                        }}
                        onSubmit={mockOnSubmit}
                        initialState={datesInitialState}
                    />
                );
            fireEvent.click(container.querySelector('#birthDate-input'));
            fireEvent.click(getByTitle(new Date(2020, 0, 2).toDateString()));

            fireEvent.focus(container.querySelector('#startDate'));
            fireEvent.click(getByLabelText(`Day-${new Date(2020, 0, 2).toDateString()}`));

            fireEvent.focus(container.querySelector('#endDate'));
            fireEvent.click(getByLabelText(`Day-${new Date(2020, 1, 2).toDateString()}`));

            fireEvent.submit(container.querySelector('form'));
            expect(mockOnSubmit).toHaveBeenCalledWith(formData);
        });

        it('with initial dates as null', async () => {
            const mockOnSubmit = jest.fn(),
                { container, getAllByText } = render(
                    <Form
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
            fireEvent.focus(container.querySelector('#startDate'));
            fireEvent.click(getAllByText('02')[0]);

            fireEvent.submit(container.querySelector('form'));
            expect(mockOnSubmit).toHaveBeenCalledWith({
                experience: {
                    startDate: format(new Date(new Date().getFullYear(), new Date().getMonth(), 2), 'dd/MM/yyyy'),
                    endDate: ''
                }
            });
        });
    });
});
