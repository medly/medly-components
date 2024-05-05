import { Children, FCC, memo } from 'react';
import * as Styled from './LoaderContainer.styled';

export const LoaderContainer: FCC = memo(props => {
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
LoaderContainer.displayName = 'LoaderContainer';
