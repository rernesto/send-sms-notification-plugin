import { AppState as FlexAppState } from '@twilio/flex-ui';
import { combineReducers, Action as ReduxAction } from 'redux';

import {SendSMSFormState, reduce as SendSMSFormReducer} from "./SendSMSFormState";

// Register your redux store under a unique namespace
export const namespace = 'send-sms-notification';

// Extend this payload to be of type that your ReduxAction is
export interface Action extends ReduxAction {
  payload?: any;
}

// Register all component states under the namespace
export interface AppState {
  flex: FlexAppState;
  'send-sms-notification': {
    sendSMSForm: SendSMSFormState;
    // Other states
  };
}

// Combine the reducers
export default combineReducers({
  sendSMSForm: SendSMSFormReducer,
});
