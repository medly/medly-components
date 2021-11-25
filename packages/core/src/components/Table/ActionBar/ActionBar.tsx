import { useContext, memo } from 'react';
import Text from '../../Text';
import { TableComponentsCommonPropsContext } from '../context';
import { ButtonSection, PopoverWrapper, PopupWrapper } from './ActionBar.styled';
import type { FC } from 'react';

export const ActionBar: FC = memo(() => {
    const { actions, selectedRowIds } = useContext(TableComponentsCommonPropsContext);
    return (
        <PopoverWrapper>
            <PopupWrapper placement="top" withArrow={true}>
                <ButtonSection>{actions}</ButtonSection>
                <Text textVariant="body3">{`${selectedRowIds?.length} Rows Selected`}</Text>
            </PopupWrapper>
        </PopoverWrapper>
    );
});
ActionBar.displayName = 'ActionBar';
