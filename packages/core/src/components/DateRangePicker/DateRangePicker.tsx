import React, { FC } from 'react';
import * as Styled from './DateRangePicker.styled';
import { Props } from './types';

export const DateRangePicker: FC<Props> = React.memo(props => {
    return (
        <Styled.Wrapper>
            <Styled.InputWrapperContainer>
                <Styled.InputWrapper>
                    <input className="date-range-input" type="text" placeholder="From" />
                </Styled.InputWrapper>
                <i className="date-separator" />
                <Styled.InputWrapper>
                    <input className="date-range-input" type="text" placeholder="To" />
                </Styled.InputWrapper>
            </Styled.InputWrapperContainer>
        </Styled.Wrapper>
    );
});

DateRangePicker.displayName = 'DateRangePicker';
DateRangePicker.defaultProps = {};
