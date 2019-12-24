import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useRef } from 'react';
import Text from '../../../Text';
import { OptionStyled } from './Option.styled';
import { OptionProps } from './types';

const Option: React.SFC<OptionProps> & WithStyle = React.memo(props => {
    const { option, ...restProps } = props,
        ref = useRef(null);

    useEffect(() => {
        if (option.selected) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    }, [option.selected]);

    return (
        <OptionStyled ref={ref} selected={option.selected} {...restProps}>
            <Text>{option.label}</Text>
        </OptionStyled>
    );
});
Option.displayName = 'Option';
Option.Style = OptionStyled;

export default Option;
