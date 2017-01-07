var enbBemTechs = require('enb-bem-techs'),
    i18nTech  = require('enb-bem-i18n/techs/i18n'),
    keysetsTech = require('enb-bem-i18n/techs/keysets'),
    fileProvideTech = require('enb/techs/file-provider'),
    borschikTech = require('enb-borschik/techs/borschik');

module.exports = function (config) {
    var isProd = process.env.YENV === 'production';

    config.setLanguages([ 'uk', 'crh', 'ru']);

    /* технологія borschik не вміє заміняти {lang} в опції dependantFiles */
    var htmlDependantFiles = [];
    config.getLanguages().forEach((lang) => {
        htmlDependantFiles.push('?.' + lang + '.min.css');
        htmlDependantFiles.push('?.' + lang + '.min.js');
    });

    config.nodes('*.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [fileProvideTech, { target: '?.{lang}.bemjson.js' }],
            [enbBemTechs.bemjsonToBemdecl, { source: '?.{lang}.bemjson.js', target: '?.{lang}.bemdecl.js' }],
            [enbBemTechs.deps, { target: '?.{lang}.deps.js', bemdeclFile: '?.{lang}.bemdecl.js' }],
            [enbBemTechs.files, { filesTarget: '?.{lang}.files', dirsTarget: '?.{lang}.dirs', depsFile: '?.{lang}.deps.js' }],

            // keyset files for each language
            [keysetsTech, { lang: '{lang}', filesTarget: '?.{lang}.files', dirsTarget: '?.{lang}.dirs' }],
            // i18n files for each language
            [i18nTech, { lang: '{lang}' }],

            // bemhtml
            [require('enb-bemxjst-i18n/techs/bemhtml-i18n'), {
                filesTarget: '?.{lang}.files',
                lang: '{lang}',
                devMode: process.env.BEMHTML_ENV === 'development'
            }],

            // html
            [require('enb-bemxjst/techs/bemjson-to-html'), {
                bemjsonFile: '?.{lang}.bemjson.js',
                bemhtmlFile: '?.bemhtml.{lang}.js',
                target: '?.{lang}.src.html'
            }],

            // browser.js
            [require('enb-js/techs/browser-js'), {
                filesTarget: '?.{lang}.files',
                target: '?.{lang}.browser.js',
                includeYM: true
            }],
            [require('enb/techs/file-merge'), {
                target: '?.{lang}.js',
                sources: ['?.{lang}.browser.js', '?.lang.{lang}.js'],
                lang: '{lang}'
            }],

            // css
//            sources: nodeConfig.getLanguages().forEach(function(lang){
//                return '?.' + lang + '.bemdecl.js';
//            })

            // borschik
            [borschikTech, { source: '?.{lang}.css', target: '?.{lang}.min.css', freeze: true, minify: isProd }],
            [borschikTech, { source: '?.{lang}.js', target: '?.{lang}.min.js', freeze: true, minify: isProd }],
            /* html має мінімізуватись останнім */
            [borschikTech, {
                source: '?.{lang}.src.html',
                target: '?.{lang}.html',
                dependantFiles: htmlDependantFiles,
                freeze: true,
                minify: isProd
            }],
        ]);

        nodeConfig.addTargets([
            '?.{lang}.min.css',
            '?.{lang}.min.js',
            '?.{lang}.html'
        ]);
    });

    config.nodes('*desktop.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, {
                levels: [
                    { path: 'libs/bem-core/common.blocks', check: false },
                    { path: 'libs/bem-core/desktop.blocks', check: false },
                    { path: 'libs/bem-components/common.blocks', check: false },
                    { path: 'libs/bem-components/desktop.blocks', check: false },
                    { path: 'libs/bem-stat-counters/common.blocks', check: false },
                    'common.blocks',
                    'desktop.blocks'
                ]
            }],
            // css
            //TODO: Підтримати '?.{lang}.ie.css'
            [require('enb-stylus/techs/stylus'), {
                filesTarget: '?.{lang}.files',
                target: '?.{lang}.css',
                sourcemap: false,
//                autoprefixer: {
//                    browsers: [
//                        'last 2 versions',
//                        'opera 12.1',
//                        'ff >= 23',
//                        'ie >= 8',
//                        'android >= 4',
//                        'ios >= 5.1',
//                        '> 2%'
//                    ]
//                }
            }]
        ]);
    });
};
