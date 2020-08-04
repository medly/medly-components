import { FormFieldSchema } from './types';

export const testSchema: FormFieldSchema = {
    firstName: {
        gridColumn: '1/7',
        type: 'text',
        required: true,
        label: 'First Name'
    },
    lastName: {
        type: 'text',
        gridColumn: '7/-1',
        required: true,
        label: 'Last Name'
    },
    email: {
        type: 'email',
        required: true,
        label: 'Email'
    },
    resume: {
        type: 'file',
        label: 'Resume',
        labelPosition: 'left',
        required: true,
        maxSize: 5000000,
        description: 'File size should be less than 5MB'
    },
    languages: {
        required: true,
        type: 'checkbox-group',
        label: 'Languages',
        options: [
            { value: 'java', label: 'JAVA' },
            { value: 'ruby', label: 'RUBY' }
        ]
    },
    role: {
        type: 'radio-group',
        label: 'Role',
        required: true,
        options: [
            { value: 'front-end', label: 'Front End' },
            { value: 'back-end', label: 'Back End' },
            { value: 'full-stack', label: 'Full Stack' }
        ]
    },
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
    },
    country: {
        required: true,
        type: 'single-select',
        label: 'Country',
        options: [
            { value: 'india', label: 'India' },
            { value: 'usa', label: 'USA' }
        ]
    },
    graduation: {
        required: true,
        type: 'multi-select',
        label: 'Graduation',
        options: [
            { value: 'b-tech', label: 'BTech' },
            { value: 'm-tech', label: 'MTech' }
        ]
    },
    marks: {
        type: 'nested',
        header: 'Marks',
        helperText: 'Marks Information',
        labelPosition: 'left',
        fields: {
            database: {
                type: 'number',
                gridColumn: '1/5',
                label: 'Database',
                placeholder: 'Database',
                required: true
            },
            algorithms: {
                type: 'number',
                gridColumn: '5/9',
                label: 'Algorithms',
                placeholder: 'Algorithms',
                required: true
            },
            maths: {
                type: 'number',
                gridColumn: '9/-1',
                label: 'Maths',
                placeholder: 'Maths',
                required: true
            }
        }
    },
    agree: {
        type: 'checkbox',
        label: 'Do you Agree',
        labelPosition: 'left'
    }
};
