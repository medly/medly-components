import { WithStyle } from '@medly-components/utils';
import React from 'react';
import Text from '../../../Text';
import { OptionStyled } from './Option.styled';
import { OptionProps } from './types';

const Option: React.SFC<OptionProps> & WithStyle = React.memo(props => {
    const { option, ...restProps } = props;
    return (
        <OptionStyled selected={option.selected} {...restProps}>
            <Text>{option.label}</Text>
        </OptionStyled>
    );
});

Option.Style = OptionStyled;

export default Option;
