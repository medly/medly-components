import { WithStyle } from '@medly-components/utils';
import { memo, forwardRef, Children } from 'react';
import { ListStyled } from './List.styled';
import { ListProps } from './types';
import type { FC } from 'react';

const Component: FC<ListProps> = memo(
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
export const List: FC<ListProps> & WithStyle = Object.assign(Component, { Style: ListStyled });
