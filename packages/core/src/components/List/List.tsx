import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import { ListStyled } from './List.styled';
import { Props } from './types';

export const List: SFC<Props> & WithStyle = React.memo(props => (
    <ListStyled {...props}>
        {React.Children.map(props.children, (c, i) => {
            return <li key={i}>{c}</li>;
        })}
    </ListStyled>
));

List.displayName = 'List';
List.Style = ListStyled;
List.defaultProps = {
    variant: 'vertical'
};
