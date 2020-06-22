import React, { useState } from 'react';
import Button from '../Button';
import { RadioGroup } from './RadioGroup';
import { Props } from './types';

export const sizes: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const FormWithRadioGroup: React.SFC = props => {
    const [value, setValue] = useState(),
        handleSubmit = (e: React.FormEvent) => e.preventDefault();

    return (
        <form onSubmit={handleSubmit}>
            <RadioGroup
                {...props}
                required
                label="Gender"
                name="gender"
                value={value}
                onChange={setValue}
                options={[
                    { value: 'female', label: 'Female' },
                    { value: 'male', label: 'Male' }
                ]}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
};
