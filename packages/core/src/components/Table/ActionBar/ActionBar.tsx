import type { FCC } from 'react';
import { memo, useContext } from 'react';
import Text from '../../Text';
import { TableComponentsCommonPropsContext } from '../context';
import { ButtonSection, PopoverWrapper, PopupWrapper } from './ActionBar.styled';

export const ActionBar: FCC = memo(() => {
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
