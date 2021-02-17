import { WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Minimap as StyledMinimap, MinimapContainer, SliderContent, SliderContentWrapper, SliderRange } from './Minimap.styled';
import SliderController from './SliderController';
import { Props } from './types';

export const Minimap: FC<Props> & WithStyle = React.memo(
    ({ minimapWidth, controllerWidth, sliderContentPadding, tableRef, ...restProps }) => {
        const sliderControllerRef = useRef(null),
            sliderRangeRef = useRef<HTMLDivElement>(null),
            [mouseDown, setMouseDown] = useState(false),
            [oneMinimapToTableWidth, setOneMinimapToTableWidth] = useState(0) /* Table width to slider width ratio */,
            [oneTableToMinimapWidth, setOneTableToMinimapWidth] = useState(0) /* Slider width to table width ratio  */,
            [sliderWidth] = useState(minimapWidth - controllerWidth - sliderContentPadding * 2),
            [containerOffset, setContainerOffset] = useState({ left: 0, bottom: 0 }),
            [isHorizontalScrollPresent, setIsHorizontalScrollPresent] = useState(false),
            sliderContent = useMemo(
                () => (
                    <SliderContentWrapper contentWidth={minimapWidth - sliderContentPadding * 2}>
                        {new Array(5).fill(null).map((_, index) => (
                            <SliderContent key={index} controllerWidth={controllerWidth} />
                        ))}
                    </SliderContentWrapper>
                ),
                [controllerWidth, minimapWidth, sliderContentPadding]
            );

        const positionMinimap = useCallback(() => {
                const minimapLeftOffset = 170; /* Minimum left offset for minimap left positioning */
                const minimumBottomOffset = 95; /* Minimum bottom offset for minimap bottom positioning */
                return { left: tableRef.current && tableRef.current.clientWidth - minimapLeftOffset, bottom: minimumBottomOffset };
            }, [tableRef.current]),
            setMinimapDimensions = useCallback(() => {
                const tableW = (tableRef.current && tableRef.current.scrollWidth - tableRef.current.offsetWidth) + 1;
                setOneMinimapToTableWidth(tableW / sliderWidth);
                setOneTableToMinimapWidth(sliderWidth / tableW);
                setContainerOffset(positionMinimap());
                setIsHorizontalScrollPresent(tableRef.current && tableRef.current.scrollWidth > tableRef.current.offsetWidth);
            }, [sliderWidth, tableRef.current]),
            onTableScroll = useCallback(
                (e: React.UIEvent<HTMLDivElement>) => {
                    e.stopPropagation();
                    if (mouseDown) return false;
                    sliderControllerRef.current.style.left = `${tableRef.current.scrollLeft * oneTableToMinimapWidth}px`;
                },
                [sliderControllerRef.current, tableRef.current, oneTableToMinimapWidth, mouseDown]
            ),
            onWindowScroll = useCallback(
                (e: any) => {
                    e.stopPropagation();
                    setContainerOffset(positionMinimap());
                },
                [positionMinimap]
            ),
            positionSliderController = useCallback(
                (e: any) => {
                    e.stopPropagation();
                    if (sliderRangeRef.current && tableRef.current && sliderControllerRef.current) {
                        /* Identify the slider distance from from its wrapper and subtract slider controller width in-order to position the slider controller in center */
                        let clickOffset = Math.round(e.clientX - sliderRangeRef.current.getBoundingClientRect().left - controllerWidth / 2);

                        /*  If we drag the slider out of its  parent boundaries then set clickOffset to its nearest boundary */
                        if (clickOffset > sliderWidth) {
                            clickOffset = sliderWidth;
                        } else if (clickOffset < 0) {
                            clickOffset = 0;
                        }

                        sliderControllerRef.current.style.left = `${clickOffset}px`;
                        tableRef.current.scroll(clickOffset * oneMinimapToTableWidth, sliderRangeRef.current.offsetTop);
                    }
                },
                [
                    tableRef.current,
                    sliderRangeRef.current,
                    sliderControllerRef.current,
                    controllerWidth,
                    oneMinimapToTableWidth,
                    sliderWidth
                ]
            ),
            onSliderControllerMove = useCallback((e: any) => mouseDown && positionSliderController(e), [
                mouseDown,
                positionSliderController
            ]),
            onSliderControllerMouseDown = useCallback(
                (e: React.MouseEvent<HTMLDivElement>) => {
                    e.stopPropagation();
                    setMouseDown(true);
                    positionSliderController(e);
                },
                [positionSliderController]
            ),
            onSliderControllerReset = useCallback(() => {
                setMouseDown(false);
                window.removeEventListener('mousemove', onSliderControllerMove);
            }, [onSliderControllerMove]);

        useEffect(() => {
            setMinimapDimensions();
            window.addEventListener('load', setMinimapDimensions);
            window.addEventListener('resize', setMinimapDimensions);
            return () => {
                window.addEventListener('load', setMinimapDimensions);
                window.removeEventListener('resize', setMinimapDimensions);
            };
        }, [setMinimapDimensions]);

        useEffect(() => {
            const tableInstance = tableRef.current;
            tableInstance.addEventListener('scroll', onTableScroll);
            return () => {
                tableInstance.removeEventListener('scroll', onTableScroll);
            };
        }, [onTableScroll]);

        useEffect(() => {
            window.addEventListener('scroll', onWindowScroll);
            return () => {
                window.removeEventListener('scroll', onWindowScroll);
            };
        }, [onWindowScroll]);

        useEffect(() => {
            window.addEventListener('mousemove', onSliderControllerMove);
            return () => {
                window.removeEventListener('mousemove', onSliderControllerMove);
            };
        }, [onSliderControllerMove]);

        useEffect(() => {
            window.addEventListener('mouseup', onSliderControllerReset);
            document.documentElement.addEventListener('mouseleave', onSliderControllerReset);
            return () => {
                window.removeEventListener('mouseup', onSliderControllerReset);
                document.documentElement.removeEventListener('mouseleave', onSliderControllerReset);
            };
        }, [onSliderControllerReset]);

        return (
            isHorizontalScrollPresent && (
                <MinimapContainer sliderWidth={minimapWidth} offset={containerOffset} {...restProps}>
                    <StyledMinimap id="minimap">
                        <SliderRange
                            ref={sliderRangeRef}
                            onMouseDown={onSliderControllerMouseDown}
                            rangeWidth={minimapWidth - sliderContentPadding * 2}
                            leftOffset={sliderContentPadding}
                        >
                            {sliderContent}
                            <SliderController
                                id="sliderController"
                                onMouseDown={onSliderControllerMouseDown}
                                ref={sliderControllerRef}
                                controllerWidth={controllerWidth}
                            />
                        </SliderRange>
                    </StyledMinimap>
                </MinimapContainer>
            )
        );
    }
);

Minimap.Style = MinimapContainer;

Minimap.defaultProps = {
    minimapWidth: 130,
    controllerWidth: 30,
    sliderContentPadding: 8
};
