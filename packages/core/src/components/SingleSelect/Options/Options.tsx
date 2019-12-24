import { WithStyle } from '@medly-components/utils';
import React from 'react';
import Option from './Option';
import { OptionsStyled } from './Options.styled';
import { OptionsProps } from './types';

const Options: React.SFC<OptionsProps> & WithStyle = React.memo(props => {
    return (
        <OptionsStyled>
            {props.options.map(option => (
                <Option disabled={option.disabled} key={option.value} option={option} onClick={props.onOptionClick(option)} />
            ))}
        </OptionsStyled>
    );
});
Options.displayName = 'Options';
Options.Style = OptionsStyled;

export default Options;
