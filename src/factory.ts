import {Cli} from './Cli'
import {ParsedArgs} from './definitions'

/**
 * Simple Node.js CLI framework for creating command line applications.
 */
export function cli(name?: string): Cli
export function cli<T extends ParsedArgs = any>(args?: T): Cli
export function cli<T extends ParsedArgs = any>(name?: string, args?: T): Cli
export function cli<T extends ParsedArgs = any>(nameOrArgs?: T | string, optionalArgs?: T): Cli<T> {
	return new Cli<T>(nameOrArgs as any, optionalArgs)
}

export default cli
