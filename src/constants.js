
function removeHtmlTags(text) {
  return text.replace(/(<\/?)\w+(>)/g, '');
}

function splitConentString(text) {
  return text.split('\n');
}

const constants = {
  // API Constants
  baseUrl: 'http://kenzanio.kenzan-dev.com/wp-json/wp/v2/',
  postCategories: {
    openSource: 2,
  },
  getPostHeader: obj => (
    obj.title.rendered
  ),
  getPostText: obj => (
    removeHtmlTags(obj.content.rendered)
  ),
  getPageHeader: (obj) => {
    const pageElements = splitConentString(obj.content.rendered);
    let pageHeader = '';

    pageElements.forEach((element) => {
      if (element.indexOf('h1') > -1) {
        pageHeader = element;
      }
    });

    return removeHtmlTags(pageHeader);
  },
  getPageSubHeader: (obj) => {
    const pageElements = splitConentString(obj.content.rendered);
    let pageSubHeader = '';

    pageElements.forEach((element) => {
      if (element.indexOf('h2') > -1) {
        pageSubHeader = element;
      }
    });

    return removeHtmlTags(pageSubHeader);
  },
  getPageDescription: (obj) => {
    const pageElements = splitConentString(obj.content.rendered);
    let pageDescription = '';

    pageElements.forEach((element) => {
      if (element.indexOf('p') > -1) {
        pageDescription = element;
      }
    });

    return removeHtmlTags(pageDescription);
  },
  setInnerHtml: content => ({
    __html: content,
  }),
};

export default constants;
