import { Action } from './index';
import {ChangeEvent} from "react";

const ACTION_SET_TO = 'SET_TO';
const ACTION_SET_FROM = 'SET_FROM';
const ACTION_SET_MESSAGE = 'SET_MESSAGE';

export interface SendSMSFormState {
  To: string;
  From: string;
  Message: string;
}

const initialState: SendSMSFormState = {
  To: '',
  From: '',
  Message: ''
};

export class Actions {
  public static setTo = (e: ChangeEvent<HTMLInputElement>): Action =>
      ({ type: ACTION_SET_TO, payload: e.target.value });
  public static setFrom = (e: ChangeEvent<HTMLInputElement>): Action =>
      ({ type: ACTION_SET_FROM, payload: e.target.value });
  public static setMessage = (e: ChangeEvent<HTMLInputElement>): Action =>
      ({ type: ACTION_SET_MESSAGE, payload: e.target.value });
}

export function reduce(state: SendSMSFormState = initialState, action: Action) {
  console.log(action);
  switch (action.type) {
    case ACTION_SET_TO: {
      return {
        ...state,
        To: action.payload,
      };
    }
    case ACTION_SET_FROM: {
      return {
        ...state,
        From: action.payload,
      };
    }
    case ACTION_SET_MESSAGE: {
      return {
        ...state,
        Message: action.payload,
      };
    }
    default:
      return state;
  }
}
