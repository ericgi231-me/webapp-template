import { Type, Static } from '@sinclair/typebox'

export const AddParamsSchema = Type.Object({
  num1: Type.Number(),
  num2: Type.Number()
})

export const SubQuerySchema = Type.Object({
  num1: Type.Number(),
  num2: Type.Number()
})

export const MathResponseSchema = Type.Object({
  status: Type.Literal('success'),
  data: Type.Number()
})

// Export TypeScript types
export type AddParams = Static<typeof AddParamsSchema>
export type SubQuery = Static<typeof SubQuerySchema>
export type MathResponse = Static<typeof MathResponseSchema>