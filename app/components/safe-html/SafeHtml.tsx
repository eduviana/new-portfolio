"use client";

import DOMPurify from "isomorphic-dompurify";

interface Props {
  html: string;
}

export function SafeHtml({ html }: Props) {
  const clean = DOMPurify.sanitize(html);

  return (
    <div
      className="prose prose-invert max-w-none text-text-muted"
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}