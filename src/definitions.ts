import {ParsedImport, ParsedImportRecords, RawImports, UnparsedImport} from '@snickbit/node-utilities'
import {Out} from '@snickbit/out'
import {Options as ConfigOptions} from 'lilconfig'

/** Options and Arguments **/

export type ArgV = string[]

export interface ParsedArgs {
	_: string[]
	__: string[]
	verbose: number
	debug: boolean
	force: boolean
	yes: boolean
	help: boolean
	version: boolean
	config?: string
	action?: string
	_action?: string
}

export type ArgType = 'array' | 'string'

export type ArgDefault = string[] | string

export type OptionType = ArgType | 'boolean' | 'count' | 'number'

export type OptionDefault = ArgDefault | boolean | number

export interface ArgChoice {
	name: string
	value: number | string
}

export interface Arg {
	describe?: string
	description?: string
	choices?: ArgChoice[] | string[]
	type: ArgType
	default: ArgDefault
	delimited?: boolean
	required?: boolean

	/** @internal */
	preset?: boolean
}

export interface Option extends Omit<Arg, 'default' | 'type'> {
	alias: string[] | string
	type: OptionType
	default: OptionDefault
}

export type Args = Record<string, Partial<Arg>>

export type Options = Record<string, Partial<Option>>

/** Actions **/

export interface Action<T extends ParsedArgs = any> extends UnparsedImport {
	(args: T, config: any): any
}
export interface ImportedAction<T extends ParsedArgs = any> extends UnparsedImport<Action<T>> {
	readonly default: Action<T>
}
export type ActionDefinition = ParsedImport
export type Actions = ParsedImportRecords
export type RawActions = RawImports

/** Settings and State **/

export interface CLISettings {
	bail?: boolean
	banner?: string
	cwd?: string
	hide_banner?: boolean
	include_working_package?: boolean
	name?: string
	out?: Out
	version?: number | string
	config?: ConfigOptions
	default_config: any
}

export interface State<T extends ParsedArgs = any> extends CLISettings {
	action?: string
	actions: Partial<Actions>
	args: Partial<Args>
	argv: string[]
	options: Partial<Options>
	parsed: T
}

export type ConfigHandler = (config: any) => Promise<any> | any
