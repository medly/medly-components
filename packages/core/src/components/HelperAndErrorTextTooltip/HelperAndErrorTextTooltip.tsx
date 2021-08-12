import { ErrorIcon, InfoOutlineIcon } from '@medly-components/icons';
import { ThemeContext, WithStyle } from '@medly-components/utils';
import React, { FC, useContext } from 'react';
import Popover from '../Popover';
import * as Styled from './HelperAndErrorTextTooltip.styled';

interface HelperTextTooltipProps {
    /** Id prefix */
    id: string;
    /** Helper Text */
    helperText?: string;
    /** Error Text */
    errorText?: string;
}
export const HelperAndErrorTextTooltip: FC<HelperTextTooltipProps> & WithStyle = React.memo((props: HelperTextTooltipProps) => {
    const { id, errorText, helperText } = props;

    const theme = useContext(ThemeContext);

    if (errorText || helperText) {
        return (
            <Popover interactionType="hover">
                <Styled.PopoverIconContainer>
                    {errorText ? (
                        <ErrorIcon iconColor={theme.helperAndErrorTextTooltip.errorIconColor} size="S" />
                    ) : (
                        <InfoOutlineIcon size="S" />
                    )}
                </Styled.PopoverIconContainer>
                <Styled.HelperAndErrorTextPopover placement="top" withArrow bgColor={'#211F46'}>
                    <Styled.HelperAndErrorTextContainer id={`${id}-helper-text`}>
                        {(errorText || helperText).trim()}
                    </Styled.HelperAndErrorTextContainer>
                </Styled.HelperAndErrorTextPopover>
            </Popover>
        );
    } else return null;
});
HelperAndErrorTextTooltip.displayName = 'HelperAndErrorTextTooltip';
