import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useRef } from 'react';
import Text from '../../../Text';
import { OptionStyled } from './Option.styled';
import { OptionProps } from './types';

const Option: React.SFC<OptionProps> & WithStyle = React.memo(props => {
    const ref = useRef(null),
        { disabled, selected, label, onClick } = props;

    useEffect(() => {
        if (selected) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    }, [selected]);

    return (
        <OptionStyled ref={ref} disabled={disabled} selected={selected} onClick={onClick}>
            <Text>{label}</Text>
        </OptionStyled>
    );
});
Option.displayName = 'Option';
Option.Style = OptionStyled;

export default Option;
