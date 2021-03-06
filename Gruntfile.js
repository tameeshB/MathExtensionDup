/* eslint-env node */
<<<<<<< HEAD

module.exports = function ( grunt ) {

	var wgServer = process.env.MW_SERVER,
		wgScriptPath = process.env.MW_SCRIPT_PATH,
		karmaProxy = {};

	grunt.loadNpmTasks( 'grunt-banana-checker' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-eslint' );
	grunt.loadNpmTasks( 'grunt-jsonlint' );
	grunt.loadNpmTasks( 'grunt-karma' );
	grunt.loadNpmTasks( 'grunt-stylelint' );

	karmaProxy[ wgScriptPath ] = wgServer + wgScriptPath;

	grunt.initConfig( {
		eslint: {
			all: [
				'**/*.js',
				'!docs/**',
				'!tests/**',
				'!node_modules/**',
				'!resources/lib/**',
				'!resources/src/jquery.tipsy/**',
				'!resources/src/jquery/jquery.farbtastic.js',
				'!resources/src/mediawiki.libs/**',
				'!vendor/**',
				// Explicitly say "**/*.js" here in case of symlinks
				'!extensions/**/*.js',
				'!skins/**/*.js',
				// Skip functions aren't even parseable
				'!resources/src/dom-level2-skip.js',
				'!resources/src/es5-skip.js',
				'!resources/src/mediawiki.hidpi-skip.js'
			]
=======
module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-banana-checker' );
	grunt.loadNpmTasks( 'grunt-eslint' );
	grunt.loadNpmTasks( 'grunt-jsonlint' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-stylelint' );

	grunt.initConfig( {
		banana: {
			all: 'i18n/'
>>>>>>> 67051315168695b275b2764f39c13e761c567ef4
		},
		jsonlint: {
			all: [
				'**/*.json',
<<<<<<< HEAD
				'!{docs/js,extensions,node_modules,skins,vendor}/**'
			]
		},
		banana: {
			options: {
				disallowBlankTranslations: false
			},
			core: 'languages/i18n/',
			api: 'includes/api/i18n/',
			installer: 'includes/installer/i18n/'
		},
		stylelint: {
			options: {
				syntax: 'less'
			},
			src: '{resources/src/*,mw-config/**}/*.{css,less}'
		},
		watch: {
			files: [
				'.{stylelintrc,eslintrc.json}',
				'**/*',
				'!{docs,extensions,node_modules,skins,vendor}/**'
			],
			tasks: 'test'
		},
		karma: {
			options: {
				proxies: karmaProxy,
				files: [ {
					pattern: wgServer + wgScriptPath + '/index.php?title=Special:JavaScriptTest/qunit/export',
					watched: false,
					included: true,
					served: false
				} ],
				logLevel: 'DEBUG',
				frameworks: [ 'qunit' ],
				reporters: [ 'progress' ],
				singleRun: true,
				autoWatch: false,
				// Some tests in extensions don't yield for more than the default 10s (T89075)
				browserNoActivityTimeout: 60 * 1000
			},
			main: {
				browsers: [ 'Chrome' ]
			},
			more: {
				browsers: [ 'Chrome', 'Firefox' ]
			}
		},
		copy: {
			jsduck: {
				src: 'resources/**/*',
				dest: 'docs/js/modules',
				expand: true,
				rename: function ( dest, src ) {
					return require( 'path' ).join( dest, src.replace( 'resources/', '' ) );
				}
			}
		}
	} );

	grunt.registerTask( 'assert-mw-env', function () {
		if ( !process.env.MW_SERVER ) {
			grunt.log.error( 'Environment variable MW_SERVER must be set.\n' +
				'Set this like $wgServer, e.g. "http://localhost"'
			);
		}
		if ( !process.env.MW_SCRIPT_PATH ) {
			grunt.log.error( 'Environment variable MW_SCRIPT_PATH must be set.\n' +
				'Set this like $wgScriptPath, e.g. "/w"' );
		}
		return !!( process.env.MW_SERVER && process.env.MW_SCRIPT_PATH );
	} );

	grunt.registerTask( 'lint', [ 'eslint', 'banana', 'stylelint' ] );
	grunt.registerTask( 'qunit', [ 'assert-mw-env', 'karma:main' ] );

	grunt.registerTask( 'test', [ 'lint' ] );
=======
				'!node_modules/**'
			]
		},
		stylelint: {
			core: {
				src: [
					'**/*.css',
					'!modules/ve-math/**',
					'!node_modules/**'
				]
			},
			've-math': {
				options: {
					configFile: 'modules/ve-math/.stylelintrc'
				},
				src: [
					'modules/ve-math/**/*.css'
				]
			}
		},
		watch: {
			files: [
				'.{stylelintrc,.eslintrc.json}',
				'<%= eslint.main %>',
				'<%= stylelint.core.src %>',
				'<%= stylelint[ "ve-math" ].src %>'
			],
			tasks: 'test'
		},
		eslint: {
			fix: {
				options: {
					fix: true
				},
				src: '<%= eslint.main %>'
			},
			main: [
				'*.js',
				'modules/**/*.js',
				'!**/node_modules/**'
			]
		}
	} );

	grunt.registerTask( 'test', [ 'eslint:main', 'stylelint', 'jsonlint', 'banana' ] );
	grunt.registerTask( 'fix', 'eslint:fix' );
>>>>>>> 67051315168695b275b2764f39c13e761c567ef4
	grunt.registerTask( 'default', 'test' );
};
