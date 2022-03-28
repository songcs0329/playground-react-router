import { INCREASE_COUNT, DECREASE_COUNT, CHANGE_VALUE } from "constants"

export const increase = () => ({ type: INCREASE_COUNT })
export const decrease = () => ({ type: DECREASE_COUNT })
export const changeValue = value => ({ type: CHANGE_VALUE, value })
