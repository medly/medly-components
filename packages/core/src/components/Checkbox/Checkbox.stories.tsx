import { CheckboxTheme, defaultTheme } from '@medly-components/theme';
import React, { useState } from 'react';
import Button from '../Button';
import { Checkbox } from './Checkbox';
import { Props } from './types';
export const labelPositions: Props['labelPosition'][] = ['left', 'right', 'top', 'bottom'];
export const sizes: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface: React.FC<CheckboxTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.checkbox
};

export const FormWithCheckbox: React.SFC = props => {
    const [checked, setChecked] = useState<boolean>(),
        onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked),
        handleSubmit = (e: React.FormEvent) => e.preventDefault();
    return (
        <form onSubmit={handleSubmit}>
            <Checkbox
                fullWidth
                required
                label="By clicking Submit, I agree lorem ipsum"
                checked={checked}
                onChange={onChangeHandler}
                {...props}
            />
            <Button size="S" type="submit">
                Submit
            </Button>
        </form>
    );
};
