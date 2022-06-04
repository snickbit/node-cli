# Class: Cli<T\>

Simple Node.js CLI framework for creating command line applications.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ParsedArgs` = `any` |

## Table of contents

### Constructors

- [constructor](Cli.md#constructor)

### Accessors

- [$out](Cli.md#$out)

### Methods

- [action](Cli.md#action)
- [actions](Cli.md#actions)
- [arg](Cli.md#arg)
- [args](Cli.md#args)
- [banner](Cli.md#banner)
- [defaultAction](Cli.md#defaultaction)
- [hideBanner](Cli.md#hidebanner)
- [includeWorkingPackage](Cli.md#includeworkingpackage)
- [name](Cli.md#name)
- [noBail](Cli.md#nobail)
- [option](Cli.md#option)
- [options](Cli.md#options)
- [run](Cli.md#run)
- [showHelp](Cli.md#showhelp)
- [showVersion](Cli.md#showversion)
- [version](Cli.md#version)

## Constructors

### constructor

• **new Cli**<`T`\>(`name?`)

Create a new Cli instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ParsedArgs` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

• **new Cli**<`T`\>(`args?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ParsedArgs` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `T` |

• **new Cli**<`T`\>(`name?`, `args?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ParsedArgs` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `args?` | `T` |

## Accessors

### $out

• `get` **$out**(): `Out`

#### Returns

`Out`

## Methods

### action

▸ **action**(`action`): [`Cli`](Cli.md)<`T`\>

Add a new action

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `ActionDefinition`<`any`\> |

#### Returns

[`Cli`](Cli.md)<`T`\>

▸ **action**(`name`, `action`): [`Cli`](Cli.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `action` | `Action`<`any`\> |

#### Returns

[`Cli`](Cli.md)<`T`\>

▸ **action**(`name`, `description`, `action`): [`Cli`](Cli.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `description` | `string` |
| `action` | `Action`<`any`\> |

#### Returns

[`Cli`](Cli.md)<`T`\>

___

### actions

▸ **actions**(`actions`): [`Cli`](Cli.md)<`T`\>

Add new actions. Will override existing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | `any` |

#### Returns

[`Cli`](Cli.md)<`T`\>

___

### arg

▸ **arg**(`key`, `defaultArg?`): [`Cli`](Cli.md)<`T`\>

Add new positional argument

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultArg?` | `string` \| `number` |

#### Returns

[`Cli`](Cli.md)<`T`\>

▸ **arg**(`key`, `arg?`): [`Cli`](Cli.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `arg?` | `Arg` |

#### Returns

[`Cli`](Cli.md)<`T`\>

___

### args

▸ **args**(`args`): [`Cli`](Cli.md)<`T`\>

Add new positional arguments. Will override existing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Args` |

#### Returns

[`Cli`](Cli.md)<`T`\>

___

### banner

▸ **banner**(`message`): [`Cli`](Cli.md)<`T`\>

Set the description / banner message of the application

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`Cli`](Cli.md)<`T`\>

___

### defaultAction

▸ **defaultAction**(`name`): [`Cli`](Cli.md)<`T`\>

Set the default action

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Cli`](Cli.md)<`T`\>

___

### hideBanner

▸ **hideBanner**(`value?`): [`Cli`](Cli.md)<`T`\>

Hide the banner message

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `boolean` | `true` |

#### Returns

[`Cli`](Cli.md)<`T`\>

___

### includeWorkingPackage

▸ **includeWorkingPackage**(`value?`): [`Cli`](Cli.md)<`T`\>

Attempt to pull the name and version from the closest package.json file to the current working directory.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `boolean` | `true` |

#### Returns

[`Cli`](Cli.md)<`T`\>

___

### name

▸ **name**(`name`): [`Cli`](Cli.md)<`T`\>

Set the name of the application

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Cli`](Cli.md)<`T`\>

___

### noBail

▸ **noBail**(`value?`): [`Cli`](Cli.md)<`T`\>

Don't kill the process on error

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `boolean` | `false` |

#### Returns

[`Cli`](Cli.md)<`T`\>

___

### option

▸ **option**(`key`, `option`): [`Cli`](Cli.md)<`T`\>

Add a new flag/option

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `option` | `Partial`<`Option`\> |

#### Returns

[`Cli`](Cli.md)<`T`\>

___

### options

▸ **options**(`options`): [`Cli`](Cli.md)<`T`\>

Add new flags/options. Will override existing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Options` |

#### Returns

[`Cli`](Cli.md)<`T`\>

___

### run

▸ **run**(`callback?`): `Promise`<`any`\>

Run the CLI program, parsing the argv, and running any defined actions

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | `Action`<`any`\> |

#### Returns

`Promise`<`any`\>

___

### showHelp

▸ **showHelp**(): `void`

Show the help message

#### Returns

`void`

___

### showVersion

▸ **showVersion**(): `void`

Show the version message

#### Returns

`void`

___

### version

▸ **version**(`version`): [`Cli`](Cli.md)<`T`\>

Set the version of the application

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` \| `number` |

#### Returns

[`Cli`](Cli.md)<`T`\>
