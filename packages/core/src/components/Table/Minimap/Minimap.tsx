import { debounce, WithStyle } from '@medly-components/utils';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {
    Minimap as StyledMinimap,
    MinimapContainer,
    SliderContent,
    SliderContentWrapper,
    SliderController,
    SliderRange
} from './Minimap.styled';
import { MinimapProps } from './types';
import type { FC } from 'react';

const Component: FC<MinimapProps> = memo(
    ({ minimapWidth, controllerWidth, sliderContentPadding, tableRef, minimapDimensionDeps, ...restProps }) => {
        const sliderControllerRef = useRef<HTMLDivElement>(null),
            sliderRangeRef = useRef<HTMLDivElement>(null),
            [mouseDown, setMouseDown] = useState(false),
            [oneMinimapToTableWidth, setOneMinimapToTableWidth] = useState(0) /* Table width to slider width ratio */,
            [oneTableToMinimapWidth, setOneTableToMinimapWidth] = useState(0) /* Slider width to table width ratio  */,
            [isHorizontalScrollPresent, setIsHorizontalScrollPresent] = useState(false),
            sliderWidth = minimapWidth! - controllerWidth! - sliderContentPadding! * 2,
            sliderContent = useMemo(
                () => new Array(8).fill(null).map((_, index) => <SliderContent key={index} controllerWidth={controllerWidth!} />),
                [controllerWidth]
            );

        const setMinimapDimensions = useCallback(() => {
                const tableWidth = tableRef.current ? tableRef.current.scrollWidth - tableRef.current.clientWidth : 0;
                setOneMinimapToTableWidth(tableWidth / sliderWidth);
                setOneTableToMinimapWidth(sliderWidth / tableWidth);
                setIsHorizontalScrollPresent(tableRef.current && tableRef.current.scrollWidth > tableRef.current.offsetWidth);
            }, [sliderWidth]),
            onTableScroll = useCallback(
                (e?: React.UIEvent<HTMLDivElement>) => {
                    e && e.stopPropagation();
                    if (!mouseDown && sliderControllerRef.current) {
                        sliderControllerRef.current.style.left = `${tableRef.current.scrollLeft * oneTableToMinimapWidth}px`;
                    }
                },
                [oneTableToMinimapWidth, mouseDown]
            ),
            positionSliderController = useCallback(
                (e: any) => {
                    e.stopPropagation();
                    if (sliderRangeRef.current && tableRef.current && sliderControllerRef.current) {
                        /* Identify the slider distance from its wrapper and subtract slider controller width in-order to position the slider controller in center */
                        let clickOffset = Math.round(
                            e.clientX - sliderRangeRef.current.getBoundingClientRect().left - controllerWidth! / 2
                        );

                        /*  If we drag the slider out of its  parent boundaries then set clickOffset to its nearest boundary */
                        if (clickOffset > sliderWidth) {
                            clickOffset = sliderWidth;
                        } else if (clickOffset < 0) {
                            clickOffset = 0;
                        }

                        sliderControllerRef.current.style.left = `${clickOffset}px`;
                        tableRef.current.scrollLeft = clickOffset * oneMinimapToTableWidth;
                    }
                },
                [controllerWidth, oneMinimapToTableWidth, sliderWidth]
            ),
            onSliderControllerMouseDown = useCallback(
                (e: React.MouseEvent<HTMLDivElement>) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setMouseDown(true);
                    positionSliderController(e);
                },
                [positionSliderController]
            ),
            onSliderControllerReset = useCallback(() => {
                setMouseDown(false);
                window.removeEventListener('mousemove', positionSliderController);
            }, [positionSliderController]);

        const resizeObserver = useMemo(
            () =>
                new ResizeObserver(
                    debounce(() => {
                        setMinimapDimensions();
                        onTableScroll();
                    }, 150)
                ),
            [setMinimapDimensions, onTableScroll]
        );

        /* 
            re-calculate minimap dimensions and re-position slider controller on change of tableScrollWidth and tableClientWidth i.e resizing table, resizing columns
        */
        useEffect(() => {
            if (tableRef.current) {
                resizeObserver.observe(tableRef.current);
                return () => resizeObserver.disconnect();
            }
        }, [resizeObserver, tableRef.current]);

        /* this block can be removed after testing with table column configuration */
        useEffect(() => {
            setMinimapDimensions();
            onTableScroll();
        }, [...minimapDimensionDeps!]);

        useEffect(() => {
            window.addEventListener('load', setMinimapDimensions);
            window.addEventListener('resize', setMinimapDimensions);
            return () => {
                window.removeEventListener('load', setMinimapDimensions);
                window.removeEventListener('resize', setMinimapDimensions);
            };
        }, [setMinimapDimensions]);

        useEffect(() => {
            const tableInstance = tableRef.current;
            tableInstance.addEventListener('scroll', onTableScroll);
            return () => tableInstance.removeEventListener('scroll', onTableScroll);
        }, [onTableScroll]);

        useEffect(() => {
            if (mouseDown) {
                window.addEventListener('mousemove', positionSliderController);
                return () => window.removeEventListener('mousemove', positionSliderController);
            }
        }, [mouseDown, positionSliderController]);

        useEffect(() => {
            window.addEventListener('mouseup', onSliderControllerReset);
            document.documentElement.addEventListener('mouseleave', onSliderControllerReset);
            return () => {
                window.removeEventListener('mouseup', onSliderControllerReset);
                document.documentElement.removeEventListener('mouseleave', onSliderControllerReset);
            };
        }, [onSliderControllerReset]);

        return isHorizontalScrollPresent ? (
            <MinimapContainer {...restProps}>
                <StyledMinimap id="minimap" sliderWidth={minimapWidth!}>
                    <SliderRange
                        ref={sliderRangeRef}
                        onMouseDown={onSliderControllerMouseDown}
                        rangeWidth={minimapWidth! - sliderContentPadding! * 2}
                        padding={sliderContentPadding!}
                    >
                        <SliderContentWrapper contentWidth={minimapWidth! - sliderContentPadding! * 2}>
                            {sliderContent}
                        </SliderContentWrapper>
                        <SliderController
                            id="sliderController"
                            onMouseDown={onSliderControllerMouseDown}
                            ref={sliderControllerRef}
                            controllerWidth={controllerWidth!}
                        />
                    </SliderRange>
                </StyledMinimap>
            </MinimapContainer>
        ) : null;
    }
);

Component.displayName = 'Minimap';
Component.defaultProps = {
    minimapWidth: 126,
    controllerWidth: 40,
    sliderContentPadding: 8,
    minimapDimensionDeps: []
};
export const Minimap: FC<MinimapProps> & WithStyle = Object.assign(Component, { Style: MinimapContainer });
