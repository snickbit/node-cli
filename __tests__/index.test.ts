import {cli, Cli, CLISettings} from '../src'

const data: CLISettings = {
	name: 'test-cli',
	version: '0.0.0',
	banner: 'Test CLI',
	include_working_package: true,
	hide_banner: true,
	bail: false,
	cwd: '../',
}

describe('cli', () => {
	it('cli should be instance of function', () => expect(cli).toBeInstanceOf(Function))
	it('cli should be typeof function', () => expect(typeof cli).toBe('function'))
	it('cli() should instance of Cli', () => expect(cli()).toBeInstanceOf(Cli))

	describe('cli config', () => {
		it('cli(null, data) should have name ' + data.name, () => expect(cli(null, data).config('name')).toBe(data.name))
		it('cli(' + data.name + ') should have name ' + data.name, () => expect(cli(data.name).config('name')).toBe(data.name))

		for(let key in data) {
			it('cli().config(' + key + ', ' + data[key] + ') should have ' + key + ' ' + data[key], () => {
				const option = key as keyof CLISettings
				const instance = cli().config(option, data[key])
				expect(instance.config(option)).toBe(data[key])
			})
		}
	})
})
