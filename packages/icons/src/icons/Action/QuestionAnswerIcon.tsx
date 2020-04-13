import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import QuestionAnswerIconSvg from '../../assets/Action/question_answer_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const QuestionAnswerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <QuestionAnswerIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

QuestionAnswerIcon.Style = SvgIcon;
QuestionAnswerIcon.displayName = 'QuestionAnswerIcon';

export default QuestionAnswerIcon
