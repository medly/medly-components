import { WithStyle } from '@medly-components/utils';
import { memo, useContext } from 'react';
import { TabsContext } from '../Tabs.context';
import * as Styled from './Tab.styled';
import { TabProps } from './types';
import type { FC } from 'react';

const Component: FC<TabProps> = memo(props => {
    const { id, active, label, icon: Icon = null, helperText, count, disabled, disabledLabel, ...restProps } = props,
        { tabSize, tabBackground, variant } = useContext(TabsContext);
    return (
        <Styled.TabWrapper
            {...{ id, active, tabSize, disabled, variant, tabBackground, ...restProps }}
            type="button"
            role="tab"
            aria-selected={active ? 'true' : 'false'}
            aria-controls={`panel-${id}`}
            tabIndex={active ? 0 : -1}
        >
            {Icon && <Icon variant={tabSize === 'S' ? 'flat' : 'solid'} />}
            <Styled.LabelAndDetailsWrapper>
                <Styled.LabelWrapper>
                    <Styled.Label tabSize={tabSize} id={`${id}-label`}>
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
                    <Styled.DisabledLabel tabSize={tabSize} id={`${id}-disabledLabel`}>
                        {disabledLabel}
                    </Styled.DisabledLabel>
                )}
            </Styled.LabelAndDetailsWrapper>
        </Styled.TabWrapper>
    );
});
Component.displayName = 'Tab';
export const Tab: FC<TabProps> & WithStyle = Object.assign(Component, { Style: Styled.TabWrapper });
