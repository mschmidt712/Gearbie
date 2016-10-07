import DOMPurify from 'dompurify';

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
};

export default constants;
