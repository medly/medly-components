import { WithStyle } from '@medly-components/utils';
import React from 'react';
import * as Styled from './TabPanel.styled';
import { Props } from './types';

export const TabPanel: React.SFC<Props> & WithStyle = React.memo(props => {
    const { active, children } = props;

    return (
        <>
            {React.Children.map(children, (child: any) => {
                const { id } = child.props;
                if (id !== active) return undefined;
                return (
                    <Styled.TabPanel id={`${props.id}-${id}`} role="tabpanel" tabIndex={0} aria-labelledby={id}>
                        {child.props.children}
                    </Styled.TabPanel>
                );
            })}
        </>
    );
});
TabPanel.displayName = 'TabPanel';
TabPanel.Style = Styled.TabPanel;
