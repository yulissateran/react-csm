export const parseHTMLToText = (html: string) =>
  html
    .replace(/<[^>]*>?/gm, '')
    .replace(/\s{2,}/gm, '')
    .trim();
