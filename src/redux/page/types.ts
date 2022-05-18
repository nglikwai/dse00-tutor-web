export type DropdownStatus = {
  open: boolean
}

export type StatusState = {
  pageStatus: {
    open: boolean
    loginPage: boolean
    login: boolean
    confirmPage: boolean
  }
  user: {
    reserveNumber: number[]
  }
}
