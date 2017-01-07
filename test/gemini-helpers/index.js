'use strict';

module.exports = {
    pagePath: function (page, lang) {
        return process.env.BASEURL ? `${lang}/${page}` : `${page}/${page}.${lang}.html`;
    }
};
