export const VOTE_STATUS_ACTIVE = Symbol('VOTE_STATUS_ACTIVE')
export const VOTE_STATUS_PAUSED = Symbol('VOTE_STATUS_PAUSED')
export const VOTE_STATUS_CANCELLED = Symbol('VOTE_STATUS_CANCELLED')
export const VOTE_STATUS_CLOSED = Symbol('VOTE_STATUS_CLOSED')

export const DISPUTABLE_VOTE_STATUSES = new Map([
  ['Active', VOTE_STATUS_ACTIVE],
  ['Paused', VOTE_STATUS_PAUSED],
  ['Cancelled', VOTE_STATUS_CANCELLED],
  ['Closed', VOTE_STATUS_CLOSED],
])

export const CHALLENGE_STATE_WAITING = Symbol('CHALLENGE_STATE_WAITING')
export const CHALLENGE_STATE_SETTLED = Symbol('CHALLENGE_STATE_SETTLED')
export const CHALLENGE_STATE_DISPUTED = Symbol('CHALLENGE_STATE_DISPUTED')
export const CHALLENGE_STATE_REJECTED = Symbol('CHALLENGE_STATE_REJECTED')
export const CHALLENGE_STATE_ACCEPTED = Symbol('CHALLENGE_STATE_ACCEPTED')
export const CHALLENGE_STATE_VOIDED = Symbol('CHALLENGE_STATE_VOIDED')

export const DISPUTABLE_CHALLENGE_STATES = new Map([
  ['Waiting', CHALLENGE_STATE_WAITING],
  ['Settled', CHALLENGE_STATE_SETTLED],
  ['Disputed', CHALLENGE_STATE_DISPUTED],
  ['Rejected', CHALLENGE_STATE_REJECTED],
  ['Accepted', CHALLENGE_STATE_ACCEPTED],
  ['Voided', CHALLENGE_STATE_VOIDED],
])