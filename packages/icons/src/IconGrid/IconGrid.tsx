import React from 'react';
import * as Styled from './IconGrid.styled';

export const IconGrid: React.FC = React.memo(props => {
    return (
        <Styled.List>
            {React.Children.map(props.children, (child: any) => (
                <Styled.Item>
                    {child}
                    <span>{child.type.displayName}</span>
                </Styled.Item>
            ))}
        </Styled.List>
    );
});
IconGrid.displayName = 'IconGrid';
