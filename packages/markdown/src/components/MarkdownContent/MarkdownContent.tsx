import { WithStyle } from '@medly-components/utils';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import directive from 'remark-directive';
import remarkFootnotes from 'remark-footnotes';
import gfm from 'remark-gfm';
import { CodeBlock } from './CodeBlock';
import customDirectives from './customDirectives';
import { ContentCSS } from './MarkdownContent.styled';
import { MarkdownContentProps } from './types';
import { YouTube } from './Youtube';

const Component: FC<MarkdownContentProps> = ({ content, className, allowedElements }) => (
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

export const MarkdownContent: FC<MarkdownContentProps> & WithStyle = Object.assign(Component, {
    Style: ContentCSS
});
