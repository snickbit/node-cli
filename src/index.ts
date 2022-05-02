import {Cli} from './Cli'
import {IObject} from './config'

/**
 * Simple Node.js CLI framework for creating command line applications.
 */
export function cli(args?: IObject): Cli;
export function cli(name?: string): Cli;
export function cli(nameOrArgs?: string | IObject): Cli {
	if (typeof nameOrArgs === 'string') {
		return new Cli(nameOrArgs)
	} else {
		return new Cli(nameOrArgs)
	}
}

export {Cli} from './Cli'

export default cli
