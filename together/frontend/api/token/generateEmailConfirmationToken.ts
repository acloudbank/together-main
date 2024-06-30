import { nanoid } from 'nanoid'

export function generateEmailConfirmationToken(): string {
  return nanoid()
}
