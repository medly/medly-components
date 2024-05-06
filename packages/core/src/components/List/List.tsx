import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { Children, forwardRef, memo } from 'react';
import { ListStyled } from './List.styled';
import { ListProps } from './types';

const Component: FCC<ListProps> = memo(
    forwardRef((props, ref) => (
        <ListStyled ref={ref} {...props}>
            {Children.map(props.children, (c, i) => {
                return <li key={i}>{c}</li>;
            })}
        </ListStyled>
    ))
);

Component.displayName = 'List';
Component.defaultProps = {
    variant: 'vertical'
};
export const List: FCC<ListProps> & WithStyle = Object.assign(Component, { Style: ListStyled });
