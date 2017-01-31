const enbBemTechs = require('enb-bem-techs'),
    i18nTech  = require('enb-bem-i18n/techs/i18n'),
    keysetsTech = require('enb-bem-i18n/techs/keysets'),
    fileProvideTech = require('enb/techs/file-provider'),
    fileCopyTech = require('enb/techs/file-copy'),
    borschikTech = require('enb-borschik/techs/borschik');

module.exports = config => {
    const isProd = process.env.YENV === 'production';

    config.setLanguages([ 'uk', 'crh', 'ru']);

    config.nodes('*.bundles/*', nodeConfig => {
        nodeConfig.addTargets([
            '?.min.css',
            '?.{lang}.min.js',
            '?.{lang}.html'
        ]);

        nodeConfig.addTechs([
            // essential
            [fileProvideTech, { target: '?.bemdecl.js' }],
            [enbBemTechs.deps],
            [enbBemTechs.files], // for css
            [enbBemTechs.files, { filesTarget: '?.{lang}.files', dirsTarget: '?.{lang}.dirs' }],

            // keyset files for each language
            [keysetsTech, { lang: '{lang}', filesTarget: '?.{lang}.files', dirsTarget: '?.{lang}.dirs' }],
            // i18n files for each language
            [i18nTech, { lang: '{lang}' }],

            // bemtree
            [require('enb-bemxjst-i18n/techs/bemtree-i18n'), {
                sourceSuffixes: ['bemtree', 'bemtree.js'],
                filesTarget: '?.{lang}.files',
                lang: '{lang}',
                devMode: process.env.BEMHTML_ENV === 'development'
            }],

            // bemhtml
            [require('enb-bemxjst-i18n/techs/bemhtml-i18n'), {
                sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                filesTarget: '?.{lang}.files',
                lang: '{lang}',
                devMode: process.env.BEMHTML_ENV === 'development'
            }],

            // markdown
            [require('enb-markdown/techs/markdown'), {
                target: '?.{lang}.markdown',
                sourceSuffixes: '{lang}.markdown',
                filesTarget: '?.{lang}.files'
            }],

            // html
            [require('enb-markdown/techs/markdown-to-html'), {
                target: '?.{lang}.src.html',
                markdown: '?.{lang}.markdown',
                bemtree: '?.bemtree.{lang}.js',
                bemhtml: '?.bemhtml.{lang}.js',
                requireJs: '?.{lang}.min.js',
                markdownBemjsonOptions: {
                    rules: require('./rules/markdown')
                }
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
            }]
        ]);
    });

    // технології, що залежать від платформи
    config.nodes('desktop.bundles/*', nodeConfig => {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, {
                levels: [
                    { path: 'libs/bem-core/common.blocks', check: false },
                    { path: 'libs/bem-core/desktop.blocks', check: false },
                    { path: 'libs/bem-components/common.blocks', check: false },
                    { path: 'libs/bem-stat-counters/common.blocks', check: false },
                    'articles',
                    'common.blocks',
                    'desktop.blocks',
                    'configs/current/blocks'
                ]
            }],
            // css
            //TODO: Підтримати '?.ie.css'
            [require('enb-stylus/techs/stylus'), {
                sourcemap: !isProd,
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

    config.nodes('touch-pad.bundles/*', nodeConfig => {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, {
                levels: [
                    { path: 'libs/bem-core/common.blocks', check: false },
                    { path: 'libs/bem-core/touch.blocks', check: false },
                    { path: 'libs/bem-components/common.blocks', check: false },
                    { path: 'libs/bem-stat-counters/common.blocks', check: false },
                    'articles',
                    'common.blocks',
                    'touch.blocks',
                    'touch-pad.blocks',
                    'configs/current/blocks'
                ]
            }],
            // css
            [require('enb-stylus/techs/stylus'), {
                sourcemap: !isProd
            }]
        ]);
    });

    config.nodes('touch-phone.bundles/*', nodeConfig => {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, {
                levels: [
                    { path: 'libs/bem-core/common.blocks', check: false },
                    { path: 'libs/bem-core/touch.blocks', check: false },
                    { path: 'libs/bem-components/common.blocks', check: false },
                    { path: 'libs/bem-stat-counters/common.blocks', check: false },
                    'articles',
                    'common.blocks',
                    'touch.blocks',
                    'touch-phone.blocks',
                    'configs/current/blocks'
                ]
            }],
            // css
            [require('enb-stylus/techs/stylus'), {
                sourcemap: !isProd
            }]
        ]);
    });

    // технології, що залежать від середовища
    config.mode('development', () => {
        config.nodes('*.bundles/*', nodeConfig => {
            nodeConfig.addTechs([
                [fileCopyTech, { source: '?.css', target: '?.min.css' }],
                [fileCopyTech, { source: '?.{lang}.js', target: '?.{lang}.min.js' }],
                [fileCopyTech, { source: '?.{lang}.src.html', target: '?.{lang}.html' }]
            ]);
        });
    });

    ['testing', 'production'].forEach(mode => {
        config.mode(mode, () => {
            config.nodes('*.bundles/*', nodeConfig => {
                nodeConfig.addTechs([
                    // borschik
                    [borschikTech, { source: '?.css', target: '?.min.css', freeze: true, minify: isProd }],
                    [borschikTech, { source: '?.{lang}.js', target: '?.{lang}.min.js', freeze: true, minify: isProd }],
                    /* html має мінімізуватись останнім */
                    [borschikTech, {
                        source: '?.{lang}.src.html',
                        target: '?.{lang}.html',
                        /* технологія borschik не вміє заміняти {lang} в опції dependantFiles */
                        dependantFiles: ['?.min.css'].concat(
                            config.getLanguages().map(lang => '?.' + lang + '.min.js')
                        ),
                        freeze: true,
                        minify: isProd
                    }]
                ]);
            });
        });
    });
};
