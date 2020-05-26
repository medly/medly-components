import { Schema } from './types';

export const testSchema: Schema = {
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
    file: {
        type: 'file',
        label: 'File',
        labelPosition: 'left',
        required: true,
        fullWidth: false,
        maxSize: 5000000,
        description: 'File size should be less than 5MB'
    },
    active: {
        type: 'checkbox',
        label: 'Is Active',
        labelPosition: 'left'
    },
    coveredEntity: {
        type: 'checkbox-group',
        label: 'Covered Entity',
        options: [
            { value: 'mhsc', label: 'MHSC' },
            { value: 'zufall', label: 'Zufall' }
        ]
    },
    pharmacy: {
        type: 'radio-group',
        label: 'Pharmacy',
        options: [
            { value: 'marg', label: 'Marg' },
            { value: 'kala', label: 'Kala' }
        ]
    },
    startDate: {
        type: 'date',
        displayFormat: 'dd/MM/yyyy',
        label: 'Start Date',
        placeholder: 'Start date'
    },
    contract: {
        type: 'date-range',
        label: 'Contract Period'
    },
    wholesaler: {
        type: 'single-select',
        label: 'Wholesaler',
        placeholder: 'Please select',
        options: [
            { value: 'kinray', label: 'Kinray' },
            { value: 'cardinal', label: 'Cardinal' }
        ]
    },
    users: {
        type: 'multi-select',
        label: 'Users',
        options: [
            { value: 'all', label: 'All' },
            { value: 'john', label: 'John' }
        ]
    },
    dispensingFee: {
        type: 'nested',
        label: 'Dispensing Fee',
        labelPosition: 'left',
        fields: {
            brand: {
                type: 'number',
                gridColumn: '1/5',
                label: 'Brand',
                placeholder: 'Brand',
                fullWidth: false,
                required: true
            },
            generic: {
                type: 'number',
                gridColumn: '5/9',
                label: 'Generic',
                placeholder: 'Generic',
                fullWidth: false,
                required: true
            },
            specialty: {
                type: 'number',
                gridColumn: '9/-1',
                label: 'Specialty',
                placeholder: 'Specialty',
                fullWidth: false,
                required: true
            }
        }
    }
};
