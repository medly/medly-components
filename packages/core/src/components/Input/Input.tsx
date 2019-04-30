import React from 'react';
import { WithStyle } from '../../utils/types';
import { InputStyled } from './Input.styled';
import { Props } from './types';

const Input: React.FunctionComponent<Props> & WithStyle = React.forwardRef((props, ref) => {
    return <InputStyled ref={ref} {...props} />;
});

Input.displayName = 'Input';

export default Input;
