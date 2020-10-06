import React, { FC, useContext } from 'react';
import Popover from '../../Popover';
import Text from '../../Text';
import { addPageItems } from '../helper';
import { PageNumberButton } from '../Pagination.styled';
import { PageEllipsisOverlay, PaginationBackgroundStyled } from './PaginationPopup.styled';
import { Props } from './types';

export const PaginationPopup: FC<Props> = React.memo(({ prevPageNumber, nextPageNumber, onClickHandler }) => {
    const [isPopoverVisible, setPopoverVisibility] = useContext(Popover.Context),
        onClickHandlerWrapper = (pageNumber: any) => () => {
            setPopoverVisibility(false);
            onClickHandler(pageNumber);
        };
    return (
        <>
            <PageNumberButton key={prevPageNumber + '...'}>
                <Text textVariant="h5" textAlign="center" textWeight="Medium">
                    ...
                </Text>
            </PageNumberButton>
            {isPopoverVisible && <PaginationBackgroundStyled />}
            <Popover.Popup>
                <PageEllipsisOverlay>
                    {addPageItems(prevPageNumber + 1, nextPageNumber - 1, []).map(item => {
                        return (
                            <PageNumberButton key={item} onClick={onClickHandlerWrapper(item)}>
                                <Text textVariant="h5" textAlign="center" textWeight="Medium">
                                    {item}
                                </Text>
                            </PageNumberButton>
                        );
                    })}
                </PageEllipsisOverlay>
            </Popover.Popup>
        </>
    );
});
PaginationPopup.displayName = 'PaginationPopup';
