# Interface: State<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ParsedArgs`](ParsedArgs.md) = `any` |

## Hierarchy

- [`CLISettings`](CLISettings.md)

  ↳ **`State`**

## Table of contents

### Properties

- [action](State.md#action)
- [actions](State.md#actions)
- [args](State.md#args)
- [argv](State.md#argv)
- [bail](State.md#bail)
- [banner](State.md#banner)
- [cwd](State.md#cwd)
- [hide\_banner](State.md#hide_banner)
- [include\_working\_package](State.md#include_working_package)
- [name](State.md#name)
- [options](State.md#options)
- [out](State.md#out)
- [parsed](State.md#parsed)
- [version](State.md#version)

## Properties

### action

• `Optional` **action**: `string`

___

### actions

• **actions**: `Partial`<[`Actions`](../README.md#actions)<`any`\>\>

___

### args

• **args**: `Partial`<[`Args`](../README.md#args)\>

___

### argv

• **argv**: `string`[]

___

### bail

• `Optional` **bail**: `boolean`

#### Inherited from

[CLISettings](CLISettings.md).[bail](CLISettings.md#bail)

___

### banner

• `Optional` **banner**: `string`

#### Inherited from

[CLISettings](CLISettings.md).[banner](CLISettings.md#banner)

___

### cwd

• `Optional` **cwd**: `string`

#### Inherited from

[CLISettings](CLISettings.md).[cwd](CLISettings.md#cwd)

___

### hide\_banner

• `Optional` **hide\_banner**: `boolean`

#### Inherited from

[CLISettings](CLISettings.md).[hide_banner](CLISettings.md#hide_banner)

___

### include\_working\_package

• `Optional` **include\_working\_package**: `boolean`

#### Inherited from

[CLISettings](CLISettings.md).[include_working_package](CLISettings.md#include_working_package)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[CLISettings](CLISettings.md).[name](CLISettings.md#name)

___

### options

• **options**: `Partial`<[`Options`](../README.md#options)\>

___

### out

• `Optional` **out**: `Out`

#### Inherited from

[CLISettings](CLISettings.md).[out](CLISettings.md#out)

___

### parsed

• **parsed**: `T`

___

### version

• `Optional` **version**: `string` \| `number`

#### Inherited from

[CLISettings](CLISettings.md).[version](CLISettings.md#version)
