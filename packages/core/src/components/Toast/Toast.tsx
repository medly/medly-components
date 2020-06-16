import { CheckIcon, ClearIcon, ErrorIcon, NotificationsIcon, WarningAmberIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { FC, useCallback } from 'react';
import Button from '../Button';
import Text from '../Text';
import { removeToast } from '../ToastContainer/ToastStore';
import * as Styled from './Toast.styled';
import { ToastProps } from './types';

export const Toast: FC<ToastProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { id, variant, header, icon: Icon, message, action, ...restProps } = props;

        const handleClose = useCallback(() => removeToast(id), [id]);

        return (
            <Styled.Toast ref={ref} variant={variant} {...restProps}>
                <Styled.IconWrapper variant={variant}>
                    {Icon ? (
                        <Icon />
                    ) : (
                        {
                            error: <ErrorIcon />,
                            warning: <WarningAmberIcon />,
                            info: <NotificationsIcon />,
                            success: <CheckIcon />
                        }[variant]
                    )}
                </Styled.IconWrapper>
                <Styled.ContentWrapper>
                    {header && <Text textWeight="Medium">{header}</Text>}
                    {message && <Text>{message}</Text>}
                </Styled.ContentWrapper>
                <Styled.ActionWrapper>
                    {action && (
                        <Button {...action} variant="flat" size="S">
                            {action.label}
                        </Button>
                    )}
                    <ClearIcon size="XS" variant="solid" onClick={handleClose} />
                </Styled.ActionWrapper>
            </Styled.Toast>
        );
    })
);
Toast.displayName = 'Toast';
Toast.Style = Styled.Toast;
