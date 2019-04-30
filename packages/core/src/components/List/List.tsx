import React from 'react';
import { WithStyle } from '../../utils/types';
import { ListStyled } from './List.styled';
import { Props } from './types';

const List: React.FunctionComponent<Props> & WithStyle = props => (
    <ListStyled {...props}>
        {React.Children.map(props.children, (c, i) => {
            return <li key={i}>{c}</li>;
        })}
    </ListStyled>
);

List.displayName = 'List';
List.Style = ListStyled;
List.defaultProps = {
    variant: 'vertical'
};

export default List;
