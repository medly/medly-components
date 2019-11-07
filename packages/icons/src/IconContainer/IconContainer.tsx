import React from 'react';
import * as Styled from './IconContainer.styled';

export const IconContainer: React.SFC = props => {
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
};
