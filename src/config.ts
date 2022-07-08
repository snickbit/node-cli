import {State} from './definitions'

export const allowed_keys = [
	'bail',
	'banner',
	'cwd',
	'hide_banner',
	'include_working_package',
	'name',
	'out',
	'version'
]

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
	default_config: {},

	args: {},

	actions: {},

	options: {
		verbose: {
			alias: 'v',
			describe: 'Allowed verbosity level',
			type: 'count',
			default: 0,
			preset: true
		},
		debug: {
			alias: 'd',
			describe: 'Debug output',
			type: 'boolean',
			default: false,
			preset: true
		},
		force: {
			alias: 'f',
			describe: 'Force command',
			type: 'boolean',
			default: false,
			preset: true
		},
		yes: {
			alias: 'y',
			describe: 'Answer yes to all prompts',
			type: 'boolean',
			default: false,
			preset: true
		},
		help: {
			alias: 'h',
			describe: 'Show help',
			type: 'boolean',
			default: false,
			preset: true
		},
		version: {
			describe: 'Show version',
			type: 'boolean',
			default: false,
			preset: true
		}
	}
}

let loaded_config: any
export function loadedConfig(conf?: any) {
	if (conf) {
		loaded_config = conf
	} else {
		return loaded_config
	}
}
