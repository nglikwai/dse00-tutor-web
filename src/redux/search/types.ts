import { Tutor } from 'src/types'

export type SearchTutorRequestPayload = {
  place?: string
  subject?: string
}
export type SearchTutorSuccessPayload = {
  tutors: Tutor[]
}
