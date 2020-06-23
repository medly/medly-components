import React, { useState } from 'react';
import Button from '../Button';
import { RadioGroup } from './RadioGroup';
import { Props } from './types';

export const sizes: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const FormWithRadioGroup: React.FC = (props: Props) => {
    const [value, setValue] = useState(),
        handleSubmit = (e: React.FormEvent) => e.preventDefault();

    return (
        <form onSubmit={handleSubmit}>
            <RadioGroup {...props} required name="gender" value={value} onChange={setValue} />
            <Button type="submit">Submit</Button>
        </form>
    );
};
FormWithRadioGroup.defaultProps = {
    label: 'Bikes',
    options: [
        { value: 'bajaj', label: 'Bajaj' },
        { value: 'apache', label: 'Apache' }
    ]
};
