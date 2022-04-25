export type IObject = { [key: string]: any }

export interface Args {
	[key: string]: Partial<Arg>;
}

export interface Arg {
	describe?: string;
	description?: string;
	choices?: string[] | ArgChoice[];
	type: string;
	default: any;
	delimited?: boolean;
	required?: boolean;
}

export interface ArgChoice {
	name: string;
	value: string | number;
}

export interface Actions {
	help?: (args: Args) => any

	(args: Args): Promise<any> | any;
}

export interface Action {
	[key: string]: Object | Function;
}

export interface ActionDefinition {
	key?: string;
	name?: string;
	describe?: string;
	description?: string;
	method: (argv) => any;
}

export interface Options {
	[key: string]: Partial<Option>;
}

export interface Option extends Arg {
	alias: string | string[];
}

export interface State {
	name?: string;
	version?: string | number;
	banner?: string;
	include_working_package: boolean;
	hide_banner: boolean;
	bail: boolean;
	cwd: string;
	argv: string[];
	args: Partial<Args>;
	actions: Partial<Actions>;
	options: Partial<Options>;
}

export const default_state: State = {
	name: undefined,
	version: undefined,
	banner: null,
	include_working_package: false,
	hide_banner: false,
	bail: true,
	cwd: process.cwd(),
	argv: null,

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
		}
	}
}
