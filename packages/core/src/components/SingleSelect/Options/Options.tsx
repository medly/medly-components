import { WithStyle } from '@medly-components/utils';
import React from 'react';
import Option from './Option';
import * as Styled from './Options.styled';
import { OptionsProps } from './types';

const Options: React.FC<OptionsProps> & WithStyle = React.memo(
    React.forwardRef(({ options, onOptionClick, hasError, ...restProps }, ref) => (
        <Styled.Options {...restProps} ref={ref}>
            {options.map(option => (
                <Option
                    key={option.value}
                    {...option}
                    variant={restProps.variant}
                    onClick={onOptionClick}
                    hasError={hasError}
                    size={restProps.size}
                    maxWidth={restProps.maxWidth}
                    includesNestedOptions={restProps.includesNestedOptions}
                />
            ))}
        </Styled.Options>
    ))
);
Options.defaultProps = {
    isNested: false
};
Options.displayName = 'Options';
Options.Style = Styled.Options;

export default Options;
