import { WithStyle } from '@medly-components/utils';
import React, { SFC, useState } from 'react';
import { NavListProps } from '../NavList/types';
import * as Styled from './SubNavList.styled';

export const SubNavList: SFC<NavListProps & { leftPadding?: number }> & WithStyle = props => {
    const { children, ...restProps } = props,
        [openItem, setOpenItem] = useState();

    const leftPadding = props.leftPadding ? props.leftPadding + 12 : 60;

    return (
        <Styled.SubNavList {...{ ...restProps, leftPadding }}>
            {React.Children.map(props.children, child => {
                return React.cloneElement(child as any, { openItem, setOpenItem, leftPadding });
            })}
        </Styled.SubNavList>
    );
};
SubNavList.displayName = 'SubNavList';
SubNavList.Style = Styled.SubNavList;
