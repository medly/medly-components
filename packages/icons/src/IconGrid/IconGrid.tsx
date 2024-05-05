import { Children, FCC, memo } from 'react';
import * as Styled from './IconGrid.styled';

export const IconGrid: FCC = memo(props => {
    return (
        <Styled.List>
            {Children.map(props.children, (child: any) => (
                <Styled.Item>
                    {child}
                    <span>{child.type.displayName}</span>
                </Styled.Item>
            ))}
        </Styled.List>
    );
});
IconGrid.displayName = 'IconGrid';
