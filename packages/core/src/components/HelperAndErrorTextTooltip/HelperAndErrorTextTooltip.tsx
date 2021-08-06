import { ErrorIcon, InfoOutlineIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { WithStyle } from '@medly-components/utils';
import React, { FC, useMemo } from 'react';
import Popover from '../Popover';
import * as Styled from './HelperAndErrorTextTooltip.styled';

interface HelperTextTooltipProps {
    /** Id prefix */
    idPrefix: string;
    /** Error icon color */
    errorIconColor?: string;
    /** Helper Text */
    helperText?: string;
    /** Error Text */
    errorText?: string;
    /** Built in error message */
    builtInErrorMessage?: string;
}
export const HelperAndErrorTextTooltip: FC<HelperTextTooltipProps> & WithStyle = React.memo((props: HelperTextTooltipProps) => {
    const { idPrefix, errorIconColor, errorText, builtInErrorMessage, helperText } = props,
        isErrorPresent = useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]);

    if (isErrorPresent || helperText) {
        return (
            <Popover interactionType="hover">
                <Styled.PopoverIconContainer>
                    {isErrorPresent ? (
                        <ErrorIcon iconColor={errorIconColor || defaultTheme.colors.red[500]} size="S" />
                    ) : (
                        <InfoOutlineIcon size="S" />
                    )}
                </Styled.PopoverIconContainer>
                <Styled.HelperAndErrorTextPopover placement="top" withArrow bgColor={'#211F46'}>
                    <Styled.HelperAndErrorTextContainer id={`${idPrefix}-helper-text`}>
                        {(errorText || builtInErrorMessage || helperText).trim()}
                    </Styled.HelperAndErrorTextContainer>
                </Styled.HelperAndErrorTextPopover>
            </Popover>
        );
    } else return null;
});
HelperAndErrorTextTooltip.displayName = 'HelperAndErrorTextTooltip';
