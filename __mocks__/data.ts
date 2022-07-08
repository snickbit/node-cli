import {CLISettings, ParsedArgs} from '../src'

export const cli_settings: CLISettings = {
	name: 'test-cli',
	version: '0.0.0',
	banner: 'Test CLI',
	include_working_package: true,
	hide_banner: true,
	bail: false,
	cwd: '../'
}

export const parsed_args: ParsedArgs = {
	_: [
		'app',
	],
	__: [
		'build',
		'-v',
		'-l',
		'app'
	],
	verbose: 5,
	debug: false,
	force: true,
	yes: true,
	help: false,
	version: false,
	config: 'tsconfig.json',
	action: 'build',
	_action: undefined
}
