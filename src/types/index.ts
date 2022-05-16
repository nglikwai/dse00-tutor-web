export type Tutor = {
  _id: string
  name: string
  intro: string
  location: string[]
  teachingSubjects: string[]
  teachingSubjectsPrice: number[]
}

export type CaseUnit = {
  _id: string
  name: string
  subject: string
  price: number
  form: number
  region: string
  building: string
  case: number
  hour: number
  lession: number
  createdAt: string
  gender: string
}
