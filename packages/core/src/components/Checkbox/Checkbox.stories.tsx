import { CheckboxTheme, defaultTheme } from '@medly-components/theme';
import React, { useState } from 'react';
import Button from '../Button';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './types';

export const labelPositions: Required<CheckboxProps>['labelPosition'][] = ['left', 'right', 'top', 'bottom'];
export const sizes: Required<CheckboxProps>['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface: React.FC<CheckboxTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.checkbox
};

export const FormWithCheckbox: React.FC = props => {
    const [checked, setChecked] = useState<boolean>(),
        onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked),
        handleSubmit = (e: React.FormEvent) => e.preventDefault();
    return (
        <form onSubmit={handleSubmit}>
            <Checkbox fullWidth required checked={checked} onChange={onChangeHandler} {...props} />
            <Button size="S" type="submit">
                Submit
            </Button>
        </form>
    );
};
FormWithCheckbox.defaultProps = {
    label: 'By clicking Submit, I agree lorem ipsum'
};
