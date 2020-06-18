import { CheckboxTheme, defaultTheme } from '@medly-components/theme';
import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import { Props } from './types';

const labelPosition: Props['labelPosition'][] = ['left', 'right', 'top', 'bottom'];
const sizes: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface: React.FC<CheckboxTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.checkbox
};

export const Basic = () => {
    // initial thought was to keep the checked value in checkbox component itself, but it introduces two sources of truth.
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    const [isChecked, setChecked] = useState(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setChecked(isChecked);
    };

    return (
        <Checkbox
            name="fruit"
            size={select('Size', sizes, 'S')}
            label={text('Label', 'Lorem Ipsum')}
            disabled={boolean('Disabled', false)}
            hasError={boolean('Error', false)}
            fullWidth={boolean('Full Width', false)}
            indeterminate={boolean('Indeterminate', false)}
            labelPosition={select('Label Position', labelPosition, 'right')}
            checked={isChecked}
            onChange={onChangeHandler}
        />
    );
};
