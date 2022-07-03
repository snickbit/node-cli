#!/usr/bin/env node
import {out} from '@snickbit/out'
import cli from '../../src'
import world from './actions/world'

cli()
	.name('my-cli')
	.config()
	.action('hello', async (args, config) => {
		out.info('ACTION - HELLO', {args, config})
		out.done('Done')
	})
	.action('world', world)
	.args({
		src: {describe: 'Source directory'},
		dest: {describe: 'Destination directory'}
	})
	.run(async (args, config) => {
		out.info({args, config})
		out.done('Done')
	})
