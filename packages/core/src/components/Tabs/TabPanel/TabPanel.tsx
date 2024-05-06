import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { Children, memo } from 'react';
import * as Styled from './TabPanel.styled';
import { TabPanelProps } from './types';

const Component: FCC<TabPanelProps> = memo(props => {
    const { active, children, forceRender, className } = props;

    return (
        <>
            {Children.map(children, (child: any) => {
                const { id } = child.props;
                const isActive = id === active;
                const renderTabPanel = forceRender || isActive;

                return (
                    renderTabPanel && (
                        <Styled.TabPanel
                            isActive={isActive}
                            id={`${props.id}-${id}`}
                            role="tabpanel"
                            tabIndex={0}
                            aria-labelledby={id}
                            className={className}
                        >
                            {child.props.children}
                        </Styled.TabPanel>
                    )
                );
            })}
        </>
    );
});
Component.displayName = 'TabPanel';
export const TabPanel: FCC<TabPanelProps> & WithStyle = Object.assign(Component, { Style: Styled.TabPanel });
