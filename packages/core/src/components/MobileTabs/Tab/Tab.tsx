import { WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import { TabsContext } from '../Tabs.context';
import * as Styled from './Tab.styled';
import { Props } from './types';

const disabledLabel = 'Not available';

export const Tab: React.FC<Props> & WithStyle = React.memo(props => {
    const { id, active, disabled, label, ...restProps } = props,
        { tabSize, tabStyle, tabBackground } = useContext(TabsContext);

    return (
        <Styled.TabWrapper
            {...{ id, active, disabled, tabSize, tabStyle, tabBackground, ...restProps }}
            type="button"
            role="tab"
            aria-selected={active ? 'true' : 'false'}
            aria-controls={`panel-${id}`}
            tabIndex={active ? 0 : -1}
        >
            <Styled.LabelAndDetailsWrapper>
                <Styled.LabelWrapper>
                    <Styled.Label id={`${id}-label`} textWeight="Medium" textVariant="body2">
                        {label}
                    </Styled.Label>
                    {disabled && (
                        <Styled.DisabledLabel textWeight="Medium" textVariant="body2" id={`${id}-disabledLabel`}>
                            {disabledLabel}
                        </Styled.DisabledLabel>
                    )}
                </Styled.LabelWrapper>
            </Styled.LabelAndDetailsWrapper>
        </Styled.TabWrapper>
    );
});
Tab.displayName = 'Tab';
Tab.Style = Styled.TabWrapper;
