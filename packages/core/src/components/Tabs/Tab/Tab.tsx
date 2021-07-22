import { WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import { TabsContext } from '../Tabs.context';
import * as Styled from './Tab.styled';
import { Props } from './types';

export const Tab: React.FC<Props> & WithStyle = React.memo(props => {
    const { id, active, label, icon: Icon = null, helperText, count, disabled, disabledLabel, ...restProps } = props,
        { tabSize, tabStyle, tabBackground, variant } = useContext(TabsContext);
    return (
        <Styled.TabWrapper
            {...{ id, active, tabSize, tabStyle, tabBackground, ...restProps }}
            variant={variant}
            disabled={disabled}
            type="button"
            role="tab"
            aria-selected={active ? 'true' : 'false'}
            aria-controls={`panel-${id}`}
            tabIndex={active ? 0 : -1}
        >
            {Icon && <Icon variant={tabSize === 'S' ? 'flat' : 'solid'} />}
            <Styled.LabelAndDetailsWrapper>
                <Styled.LabelWrapper variant={variant}>
                    <Styled.Label id={`${id}-label`} textWeight="Medium" textVariant={tabSize === 'S' ? 'body2' : 'body1'}>
                        {label}
                    </Styled.Label>
                    {count !== undefined && (
                        <Styled.Count id={`${id}-label`} tabSize={tabSize}>
                            {count}
                        </Styled.Count>
                    )}
                </Styled.LabelWrapper>
                {helperText && tabSize === 'L' && (
                    <Styled.HelperText id={`${id}-helperText`} textVariant="body2">
                        {helperText}
                    </Styled.HelperText>
                )}
                {variant === 'solid' && disabled && (
                    <Styled.DisabledLabel textWeight="Medium" textVariant="body2" id={`${id}-disabledLabel`}>
                        {disabledLabel}
                    </Styled.DisabledLabel>
                )}
            </Styled.LabelAndDetailsWrapper>
        </Styled.TabWrapper>
    );
});
Tab.displayName = 'Tab';
Tab.Style = Styled.TabWrapper;
