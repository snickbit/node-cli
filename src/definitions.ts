import {ImportMethod, ImportRecords, ParsedImport, RecordOfImportRecords} from '@snickbit/node-utilities'
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

interface ActionBase {
	key?: string
	name?: string
	alias?: string
	aliases?: string[]
	describe?: string
	description?: string
}

export type ActionFunction<T extends ParsedArgs = any> = ((args: T) => Promise<any> | any) | {default: ActionFunction<T>}

export interface Action<T extends ParsedArgs = any> extends ActionBase {
	(args: T, config: any): any
}

export interface ImportedAction<T extends ParsedArgs = any> extends ActionBase {
	readonly default: Action<T>
}

export interface ActionDefinition<T extends ParsedArgs = any> extends ParsedImport {
	name: string
	aliases: string[]
	description?: string
	handler: ImportMethod<T>
}

export type Actions<T extends ParsedArgs = any> = Record<string, | ActionDefinition<T>>

export type RawActions<T extends ParsedArgs = any> = Actions | ImportRecords<T> | RecordOfImportRecords<T> | any

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
}

export interface State<T extends ParsedArgs = any> extends CLISettings {
	action?: string
	actions: Partial<Actions>
	args: Partial<Args>
	argv: string[]
	options: Partial<Options>
	parsed: T
}
