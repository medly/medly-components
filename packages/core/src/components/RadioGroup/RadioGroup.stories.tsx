import { useState } from 'react';
import Button from '../Button';
import { RadioGroup } from './RadioGroup';
import { RadioGroupProps } from './types';
import type { FC } from 'react';

export const sizes: RadioGroupProps['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const FormWithRadioGroup: FC<RadioGroupProps> = props => {
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
