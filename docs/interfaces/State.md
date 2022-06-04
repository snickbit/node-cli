# Interface: State<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ParsedArgs`](ParsedArgs.md) = `any` |

## Table of contents

### Properties

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
- [parsed](State.md#parsed)
- [version](State.md#version)

## Properties

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

• **bail**: `boolean`

___

### banner

• `Optional` **banner**: `string`

___

### cwd

• **cwd**: `string`

___

### hide\_banner

• **hide\_banner**: `boolean`

___

### include\_working\_package

• **include\_working\_package**: `boolean`

___

### name

• `Optional` **name**: `string`

___

### options

• **options**: `Partial`<[`Options`](../README.md#options)\>

___

### parsed

• **parsed**: `T`

___

### version

• `Optional` **version**: `string` \| `number`
