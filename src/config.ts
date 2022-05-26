export type IObject = Record<string, any>

export type Args = Record<string, Partial<Arg>>

export interface Arg {
	describe?: string
	description?: string
	choices?: ArgChoice[] | string[]
	type: string
	default: any
	delimited?: boolean
	required?: boolean
}

export interface ArgChoice {
	name: string
	value: number | string
}

interface ActionBase {
	key?: string
	name?: string
	describe?: string
	description?: string
}

export type ActionFunction = ((...args: any[]) => Promise<any> | any) | {default: ActionFunction}

export interface Action extends ActionBase {
	(args: Args): Promise<any> | any
}

export interface ImportedAction extends ActionBase {
	readonly default: Action
}

export interface ActionDefinition extends ActionBase {
	method?: ActionFunction
}

export type Actions = Record<string, Action | ActionDefinition | ActionFunction | ImportedAction | any>

export type Options = Record<string, Partial<Option>>

export interface Option extends Arg {
	alias: string[] | string
}

export interface State {
	name?: string
	version?: number | string
	banner?: string
	include_working_package: boolean
	hide_banner: boolean
	bail: boolean
	cwd: string
	argv: string[]
	parsed: IObject
	args: Partial<Args>
	actions: Partial<Actions>
	options: Partial<Options>
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
