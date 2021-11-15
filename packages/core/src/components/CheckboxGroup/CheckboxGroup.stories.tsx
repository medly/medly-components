import { useState } from 'react';
import Button from '../Button';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxGroupProps } from './types';
import type { FC, FormEvent } from 'react';

export const sizes: Required<CheckboxGroupProps>['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const FormWithCheckboxGroup: FC<CheckboxGroupProps> = props => {
    const [bikes, setBikes] = useState<string[]>([]),
        handleSubmit = (e: FormEvent) => e.preventDefault();
    return (
        <form onSubmit={handleSubmit}>
            <CheckboxGroup fullWidth required values={bikes} {...props} onChange={setBikes} />
            <Button size="S" type="submit">
                Submit
            </Button>
        </form>
    );
};
FormWithCheckboxGroup.defaultProps = {
    label: 'Cars',
    options: [
        { value: 'bajaj', label: 'Bajaj' },
        { value: 'apache', label: 'Apache' }
    ]
};
