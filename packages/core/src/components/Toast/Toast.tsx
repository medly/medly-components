import { CheckIcon, ClearIcon, ErrorIcon, NotificationsIcon, WarningAmberIcon } from '@medly-components/icons';
import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { forwardRef, memo, useCallback } from 'react';
import Button from '../Button';
import Text from '../Text';
import { removeToast } from '../ToastContainer/ToastStore';
import * as Styled from './Toast.styled';
import { ToastComponentProps } from './types';

const Component: FC<ToastComponentProps> = memo(
    forwardRef((props, ref) => {
        const { id, variant, header, icon: Icon, message, action, hideCloseIcon, ...restProps } = props;

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
                    {header && (isValidStringOrNumber(header) ? <Text textWeight="Medium">{header}</Text> : header)}
                    {message && (isValidStringOrNumber(message) ? <Text>{message}</Text> : message)}
                </Styled.ContentWrapper>
                <Styled.ActionWrapper>
                    {action && (
                        <Button {...action} variant="flat" size="S">
                            {action.label}
                        </Button>
                    )}
                    {!hideCloseIcon && <ClearIcon title={`${id}-toast-close-icon`} size="XS" variant="solid" onClick={handleClose} />}
                </Styled.ActionWrapper>
            </Styled.Toast>
        );
    })
);
Component.displayName = 'Toast';
export const Toast: FC<ToastComponentProps> & WithStyle = Object.assign(Component, { Style: Styled.Toast });
