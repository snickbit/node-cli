import {Cli} from './Cli'
import {CLISettings, ParsedArgs} from './definitions'

/**
 * Simple Node.js CLI framework for creating command line applications.
 */
export function cli<T extends ParsedArgs = any>(args?: T, options?: CLISettings): Cli
export function cli<T extends ParsedArgs = any>(name?: string, args?: T, options?: CLISettings): Cli
export function cli<T extends ParsedArgs = any>(nameOrArgs?: T | string, optionalArgsOrOptions?: CLISettings | T, optionalOptions?: CLISettings): Cli<T> {
	return new Cli<T>(nameOrArgs as any, optionalArgsOrOptions as any, optionalOptions)
}

export default cli
