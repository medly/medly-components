import { WithStyle } from '@medly-components/utils';
import { FCC } from 'react';
import ReactMarkdown from 'react-markdown';
import directive from 'remark-directive';
import remarkFootnotes from 'remark-footnotes';
import gfm from 'remark-gfm';
import { CodeBlock } from './CodeBlock';
import { ContentCSS } from './MarkdownContent.styled';
import { YouTube } from './Youtube';
import customDirectives from './customDirectives';
import { MarkdownContentProps } from './types';

const Component: FCC<MarkdownContentProps> = ({ content, className, allowedElements }) => (
    <ContentCSS className={className}>
        <ReactMarkdown
            skipHtml={false}
            remarkPlugins={[gfm, remarkFootnotes, directive, customDirectives]}
            components={{
                code: CodeBlock,
                // @ts-ignore
                youtube: YouTube
            }}
            allowedElements={allowedElements}
        >
            {content}
        </ReactMarkdown>
    </ContentCSS>
);

export const MarkdownContent: FCC<MarkdownContentProps> & WithStyle = Object.assign(Component, {
    Style: ContentCSS
});
