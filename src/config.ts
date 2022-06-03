import {State} from './definitions'

export const default_state: State = {
	name: undefined,
	version: undefined,
	banner: null,
	include_working_package: false,
	hide_banner: false,
	bail: true,
	cwd: process.cwd(),
	argv: null,
	parsed: {},

	args: {},

	actions: {},

	options: {
		verbose: {
			alias: 'v',
			describe: 'Allowed verbosity level',
			type: 'count',
			default: 0
		},
		debug: {
			alias: 'd',
			describe: 'Debug output',
			type: 'boolean',
			default: false
		},
		force: {
			alias: 'f',
			describe: 'Force command',
			type: 'boolean',
			default: false
		},
		yes: {
			alias: 'y',
			describe: 'Answer yes to all prompts',
			type: 'boolean',
			default: false
		},
		help: {
			alias: 'h',
			describe: 'Show help',
			type: 'boolean',
			default: false
		},
		version: {
			describe: 'Show version',
			type: 'boolean',
			default: false
		}
	}
}
