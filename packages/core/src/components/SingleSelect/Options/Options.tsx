import { WithStyle } from '@medly-components/utils';
import React from 'react';
import Option from './Option';
import * as Styled from './Options.styled';
import { OptionsProps } from './types';

const Options: React.FC<OptionsProps> & WithStyle = React.memo(
    React.forwardRef(({ options, onOptionClick, ...restProps }, ref) => {
        return (
            <Styled.Options {...restProps} ref={ref}>
                {options.map(option => (
                    <Option key={option.value} {...option} highlightSelected={restProps.highlightSelected} onClick={onOptionClick} />
                ))}
            </Styled.Options>
        );
    })
);
Options.defaultProps = {
    isNested: false
};
Options.displayName = 'Options';
Options.Style = Styled.Options;

export default Options;
