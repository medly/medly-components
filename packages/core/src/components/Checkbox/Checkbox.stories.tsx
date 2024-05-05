import { CheckboxTheme, defaultTheme } from '@medly-components/theme';
import type { FCC } from 'react';
import { useState } from 'react';
import Button from '../Button';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './types';

export const labelPositions: Required<CheckboxProps>['labelPosition'][] = ['left', 'right', 'top', 'bottom'];
export const sizes: Required<CheckboxProps>['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface: FCC<CheckboxTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.checkbox
};

export const FormWithCheckbox: FCC = props => {
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
