import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import { ListStyled } from './List.styled';
import { ListProps } from './types';

const Component: FC<ListProps> = React.memo(
    React.forwardRef((props, ref) => (
        <ListStyled ref={ref} {...props}>
            {React.Children.map(props.children, (c, i) => {
                return <li key={i}>{c}</li>;
            })}
        </ListStyled>
    ))
);

Component.displayName = 'List';
Component.defaultProps = {
    variant: 'vertical'
};
export const List: FC<ListProps> & WithStyle = Object.assign(Component, { Style: ListStyled });
