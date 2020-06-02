import { CheckIcon, ClearIcon, ErrorIcon, NotificationsIcon, WarningAmberIcon } from '@medly-components/icons';
import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { SFC, useEffect, useState } from 'react';
import Text from '../Text';
import * as Styled from './Toast.styled';
import { Props } from './types';

export const Toast: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { variant, onClose, heading, ...restProps } = props,
            [show, setShowState] = useState(false);

        useEffect(() => {
            setShowState(true);
        }, []);

        return (
            <Styled.Toast ref={ref} show={show} variant={variant} {...restProps}>
                <Styled.SvgWrapper variant={variant}>
                    {
                        {
                            error: <ErrorIcon />,
                            warning: <WarningAmberIcon />,
                            info: <NotificationsIcon />,
                            success: <CheckIcon />
                        }[variant]
                    }
                </Styled.SvgWrapper>
                <Styled.ToastContent>
                    {React.Children.map(props.children, c => {
                        if (isValidStringOrNumber(c)) {
                            {
                                return props.heading ? (
                                    <span>
                                        <Text fullWidth={true} textVariant="body2" textWeight="Medium">
                                            {heading}
                                        </Text>
                                        <Text>{c}</Text>
                                    </span>
                                ) : (
                                    <Text>{c}</Text>
                                );
                            }
                        } else {
                            return c;
                        }
                    })}
                </Styled.ToastContent>
                <ClearIcon onClick={onClose} />
            </Styled.Toast>
        );
    })
);
Toast.displayName = 'Toast';
Toast.Style = Styled.Toast;
