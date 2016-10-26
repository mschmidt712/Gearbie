import React from 'react';
import DOMPurify from 'dompurify';
import RightArrow from './components/explore/RightArrow';
import LeftArrow from './components/explore/LeftArrow';

function removeHtmlTags(text) {
  return text.replace(/(<\/?)\w+(>)/g, '');
}

const constants = {
  // API Constants
  baseUrl: 'http://kenzanio.kenzan-dev.com/wp-json/wp/v2/',
  postCategories: {
    openSource: 2,
    techRadar: 4,
    kenzanAbout: 5,
    learnAbout: 6,
    connect: 7,
    aboutCarousel: 8,
  },
  getPostHeader: obj => (
    obj.title.rendered
  ),
  getPostText: obj => (
    removeHtmlTags(obj.content.rendered)
  ),
  setInnerHtml: content => ({
    __html: DOMPurify.sanitize(content),
  }),
  statusCodes: (status) => {
    let statusText;

    switch (status) {
      default:
        statusText = 'Page Load Error';
        break;
      case 400:
        statusText = 'Bad Request';
        break;
      case 401:
        statusText = 'Authorization Denied';
        break;
      case 404:
        statusText = 'Page Not Found';
        break;
      case 500:
        statusText = 'Internal Server Error';
        break;
      case 0:
        statusText = 'No Access-Control-Allow-Origin Header Present';
        break;
    }

    return statusText;
  },
};

export default constants;
