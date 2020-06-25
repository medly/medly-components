import { WithStyle } from '@medly-components/utils';
import React from 'react';
import Text from '../../Text';
import * as Styled from './Tab.styled';
import { Props } from './types';

export const Tab: React.FC<Props> & WithStyle = React.memo(props => {
    const { id, active, label, icon: Icon = null, secondaryLabel, count, tabSize, ...restProps } = props;

    return (
        <Styled.TabWrapper
            {...{ id, active, hasIcon: !!Icon, tabSize, ...restProps }}
            type="button"
            role="tab"
            aria-selected={active ? 'true' : 'false'}
            aria-controls={`panel-${id}`}
            tabIndex={active ? 0 : -1}
        >
            {Icon && <Icon focusable={false} />}
            <Styled.LabelAndDetailsWrapper hasIcon={!!Icon}>
                <Styled.LabelWrapper secondaryLabel={secondaryLabel} tabSize={tabSize}>
                    <Text>{label}</Text>
                    {count && <Styled.Count tabSize={tabSize}>{count}</Styled.Count>}
                </Styled.LabelWrapper>
                {secondaryLabel && tabSize === 'L' && <Styled.SecondaryLabel>{secondaryLabel}</Styled.SecondaryLabel>}
            </Styled.LabelAndDetailsWrapper>
        </Styled.TabWrapper>
    );
});
Tab.displayName = 'Tab';
Tab.Style = Styled.TabWrapper;
