import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import { ListStyled } from './List.styled';
import { ListProps } from './types';

export const List: FC<ListProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => (
        <ListStyled ref={ref} {...props}>
            {React.Children.map(props.children, (c, i) => {
                return <li key={i}>{c}</li>;
            })}
        </ListStyled>
    ))
);

List.displayName = 'List';
List.Style = ListStyled;
List.defaultProps = {
    variant: 'vertical'
};
