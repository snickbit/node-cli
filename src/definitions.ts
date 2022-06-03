import {ImportMethod, ImportRecords, ParsedImport, RecordOfImportRecords} from '@snickbit/node-utilities'

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
	action?: string
	_action?: string
}

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
	alias?: string
	aliases?: string[]
	describe?: string
	description?: string
}

export type ActionFunction<T extends ParsedArgs = any> = ((args: T) => Promise<any> | any) | {default: ActionFunction<T>}

export interface Action<T extends ParsedArgs = any> extends ActionBase {
	(args: T): Promise<any> | any
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

export type Options = Record<string, Partial<Option>>

export interface Option extends Arg {
	alias: string[] | string
}

export interface State<T extends ParsedArgs = any> {
	name?: string
	version?: number | string
	banner?: string
	include_working_package: boolean
	hide_banner: boolean
	bail: boolean
	cwd: string
	argv: string[]
	parsed: T
	args: Partial<Args>
	actions: Partial<Actions>
	options: Partial<Options>
}
