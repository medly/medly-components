import { WithStyle } from '@medly-components/utils';
import React from 'react';
import Text from '../../Text';
import * as Styled from './Tab.styled';
import { Props } from './types';

export const Tab: React.FC<Props> & WithStyle = React.memo(props => {
    const { id, active, label, icon: Icon = null, ...restProps } = props;

    return (
        <Styled.Button
            {...{ id, active, ...restProps }}
            type="button"
            role="tab"
            aria-selected={active ? 'true' : 'false'}
            aria-controls={`panel-${id}`}
            tabIndex={active ? 0 : -1}
        >
            {Icon && <Icon focusable={false} />}
            <Text>{label}</Text>
        </Styled.Button>
    );
});
Tab.displayName = 'Tab';
Tab.Style = Styled.Button;
