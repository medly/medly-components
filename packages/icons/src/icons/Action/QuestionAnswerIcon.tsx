import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import QuestionAnswerIconSvg from '../../assets/Action/question_answer_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const QuestionAnswerIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <QuestionAnswerIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

QuestionAnswerIcon.Style = SvgIcon;
QuestionAnswerIcon.displayName = 'QuestionAnswerIcon';

export default QuestionAnswerIcon
