import parse from 'html-react-parser';

const createDOMPurify = require('dompurify');

const DOMPurify = createDOMPurify(window);

const config = {
  ADD_ATTR: ['target'], // Make sure link targets won't get stripped out
};

const cleanHtml = input => parse(DOMPurify.sanitize(input, config));

export default cleanHtml;
