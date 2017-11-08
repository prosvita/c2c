'use strict';

const path = require('path'),
    DESKTOP_URL = process.env.BASEURL || 'http://localhost:8080/desktop.bundles/',
    TOUCHPAD_URL = process.env.BASEURL || 'http://localhost:8080/touch-pad.bundles/',
    TOUCHPHONE_URL = process.env.BASEURL || 'http://localhost:8080/touch-phone.bundles/';

/* global Gemini helpers */
global.GH = require(path.resolve(__dirname, 'test/gemini-helpers'));

module.exports = {
    rootUrl: DESKTOP_URL,
    gridUrl: process.env.GRIDURL || 'http://localhost:4444/wd/hub',

    screenshotsDir: 'test/references',
    suitesPerSession: 20,
    sessionsPerBrowser: 2,
    retry: 1,

    browsers: {
        'desktop-chrome': {
            windowSize: '1280x768',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: [ '--disable-gpu', '--disable-infobars' ]
                }
            }
        }
    },

    sets: {
        'desktop': {
            files: [
                'common.blocks/**/*.gemini.js',
                'desktop.blocks/**/*.gemini.js',
                'desktop.bundles/**/*.gemini.js'
            ],
            browsers: [
                'desktop-chrome'
            ]
        }
    },

    system: {
        plugins: {
            'html-reporter': {},
            optipng: {
                level: 2
            }
        }
    }
};
