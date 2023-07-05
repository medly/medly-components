import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { forwardRef, memo } from 'react';
import Option from './Option';
import * as Styled from './Options.styled';
import { OptionsProps } from './types';
const Component: FC<OptionsProps> = memo(
    forwardRef(({ options, onOptionClick, hasError, ...restProps }, ref) => (
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
Component.defaultProps = {
    isNested: false
};
Component.displayName = 'Options';
const Options: FC<OptionsProps> & WithStyle = Object.assign(Component, { Style: Styled.Options });
export default Options;
