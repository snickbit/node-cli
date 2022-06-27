# @snickbit/node-cli

## Table of contents

### References

- [default](README.md#default)

### Classes

- [Cli](classes/Cli.md)

### Interfaces

- [Action](interfaces/Action.md)
- [ActionDefinition](interfaces/ActionDefinition.md)
- [Arg](interfaces/Arg.md)
- [ArgChoice](interfaces/ArgChoice.md)
- [CLISettings](interfaces/CLISettings.md)
- [ImportedAction](interfaces/ImportedAction.md)
- [Option](interfaces/Option.md)
- [ParsedArgs](interfaces/ParsedArgs.md)
- [State](interfaces/State.md)

### Type Aliases

- [ActionFunction](README.md#actionfunction)
- [Actions](README.md#actions)
- [ArgV](README.md#argv)
- [Args](README.md#args)
- [CliOption](README.md#clioption)
- [CliOptions](README.md#clioptions)
- [Options](README.md#options)
- [RawActions](README.md#rawactions)

### Variables

- [allowed\_keys](README.md#allowed_keys)
- [default\_options](README.md#default_options)
- [default\_state](README.md#default_state)
- [extra\_options](README.md#extra_options)
- [object\_options](README.md#object_options)

### Functions

- [chunkArguments](README.md#chunkarguments)
- [cli](README.md#cli)
- [parseDelimited](README.md#parsedelimited)

## References

### default

Renames and re-exports [cli](README.md#cli)

## Type Aliases

### ActionFunction

Ƭ **ActionFunction**<`T`\>: (`args`: `T`) => `Promise`<`any`\> \| `any` \| { `default`: [`ActionFunction`](README.md#actionfunction)<`T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ParsedArgs`](interfaces/ParsedArgs.md) = `any` |

___

### Actions

Ƭ **Actions**<`T`\>: `Record`<`string`, [`ActionDefinition`](interfaces/ActionDefinition.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ParsedArgs`](interfaces/ParsedArgs.md) = `any` |

___

### ArgV

Ƭ **ArgV**: `string`[]

___

### Args

Ƭ **Args**: `Record`<`string`, `Partial`<[`Arg`](interfaces/Arg.md)\>\>

___

### CliOption

Ƭ **CliOption**: `string` \| keyof [`CliOptions`](README.md#clioptions)

___

### CliOptions

Ƭ **CliOptions**: `Options` & `Record`<`string`, `any`\>

___

### Options

Ƭ **Options**: `Record`<`string`, `Partial`<[`Option`](interfaces/Option.md)\>\>

___

### RawActions

Ƭ **RawActions**<`T`\>: [`Actions`](README.md#actions) \| `ImportRecords`<`T`\> \| `RecordOfImportRecords`<`T`\> \| `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ParsedArgs`](interfaces/ParsedArgs.md) = `any` |

## Variables

### allowed\_keys

• `Const` **allowed\_keys**: `string`[]

___

### default\_options

• `Const` **default\_options**: [`CliOptions`](README.md#clioptions)

___

### default\_state

• `Const` **default\_state**: [`State`](interfaces/State.md)

___

### extra\_options

• `Const` **extra\_options**: `string`[]

___

### object\_options

• `Const` **object\_options**: `string`[]

## Functions

### chunkArguments

▸ **chunkArguments**(`args`): `any`[]

Split arguments by --

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `any` |

#### Returns

`any`[]

___

### cli

▸ **cli**<`T`\>(`args?`, `options?`): [`Cli`](classes/Cli.md)

Simple Node.js CLI framework for creating command line applications.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ParsedArgs`](interfaces/ParsedArgs.md) = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `T` |
| `options?` | [`CLISettings`](interfaces/CLISettings.md) |

#### Returns

[`Cli`](classes/Cli.md)

▸ **cli**<`T`\>(`name?`, `args?`, `options?`): [`Cli`](classes/Cli.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ParsedArgs`](interfaces/ParsedArgs.md) = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `args?` | `T` |
| `options?` | [`CLISettings`](interfaces/CLISettings.md) |

#### Returns

[`Cli`](classes/Cli.md)

___

### parseDelimited

▸ **parseDelimited**(`value`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`[]
