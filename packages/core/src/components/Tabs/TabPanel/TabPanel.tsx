import { WithStyle } from '@medly-components/utils';
import React from 'react';
import * as Styled from './TabPanel.styled';
import { Props } from './types';

export const TabPanel: React.FC<Props> & WithStyle = React.memo(props => {
    const { active, children } = props;

    console.log(React.Children.toArray(children) === children);
    return (
        <>
            {React.Children.map(children, (child: any) => {
                const { id } = child.props;
                return id !== active ? undefined : (
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
