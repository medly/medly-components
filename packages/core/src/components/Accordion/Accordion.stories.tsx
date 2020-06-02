import React from "react"
import { Accordion } from "./Accordion"
import { AccordionTheme, defaultTheme } from "@medly-components/theme";

export const ThemeInterface: React.SFC<AccordionTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.accordion
};

export const SimpleAccordion = () => {
    return (
        <Accordion title="Uploaded Files" bgColor={defaultTheme.colors.grey[200]} titleColor={defaultTheme.colors.black}> 
            <div>File 1</div>
        </Accordion>

    )
}