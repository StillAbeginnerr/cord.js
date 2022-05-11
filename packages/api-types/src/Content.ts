/**
 * @packageDocumentation
 * @module IContent
 */
import type { ISchema } from './Schema'
import type { IPublicIdentity } from './PublicIdentity'

/**
 * The minimal partial stream from which a JSON-LD representation can be built.
 */
export type PartialContent = Partial<IContent> & Pick<IContent, 'schemaId'>

export type IContents = Record<
  string,
  Record<string, unknown> | string | number | boolean
>
export interface IContent {
  schemaId: ISchema['schemaId']
  contents: IContents
  issuer: IPublicIdentity['address']
  holder?: IPublicIdentity['address']
}

export type CompressedContent = [
  IContent['schemaId'],
  IContent['issuer'],
  IContent['holder'],
  IContents
]

export type CompressedPartialContent = [
  IContent['schemaId'],
  IContent['issuer'] | undefined,
  IContent['holder'] | undefined,
  IContents | undefined
]
