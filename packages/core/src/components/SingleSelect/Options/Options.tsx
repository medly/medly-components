import { WithStyle } from '@medly-components/utils';
import React from 'react';
import Option from './Option';
import { OptionsStyled } from './Options.styled';
import { OptionsProps } from './types';

const Options: React.SFC<OptionsProps> & WithStyle = React.memo(
    React.forwardRef(({ options, onOptionClick, ...restProps }, ref) => {
        const handleOptionClick = (option: OptionsProps['options'][0]) => (event: React.MouseEvent) => {
            event.stopPropagation();
            onOptionClick(option);
        };

        return (
            <OptionsStyled {...restProps} ref={ref}>
                {options.map(option => (
                    <Option key={option.value} {...option} onClick={handleOptionClick(option)} />
                ))}
            </OptionsStyled>
        );
    })
);
Options.displayName = 'Options';
Options.Style = OptionsStyled;

export default Options;
