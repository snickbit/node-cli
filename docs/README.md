# @snickbit/node-cli

## Table of contents

### References

- [default](README.md#default)

### Classes

- [Cli](classes/Cli.md)

### Functions

- [cli](README.md#cli)

## References

### default

Renames and re-exports [cli](README.md#cli)

## Functions

### cli

▸ **cli**(`name?`): [`Cli`](classes/Cli.md)

Simple Node.js CLI framework for creating command line applications.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`Cli`](classes/Cli.md)

▸ **cli**<`T`\>(`args?`): [`Cli`](classes/Cli.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ParsedArgs` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `T` |

#### Returns

[`Cli`](classes/Cli.md)

▸ **cli**<`T`\>(`name?`, `args?`): [`Cli`](classes/Cli.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ParsedArgs` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `args?` | `T` |

#### Returns

[`Cli`](classes/Cli.md)
