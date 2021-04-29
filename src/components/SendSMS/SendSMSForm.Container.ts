import { AppState } from '../../states';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Actions } from '../../states/SendSMSFormState';
import SendSMSForm from './SendSMSForm';
import {ChangeEvent} from "react";

export interface StateToProps {
    To: string;
    From: string;
    Message: string;
}

export interface DispatchToProps {
    setTo: (e: ChangeEvent<HTMLInputElement>) => void;
    setFrom: (e: ChangeEvent<HTMLInputElement>) => void;
    setMessage: (e: ChangeEvent<HTMLInputElement>) => void;
}

const mapStateToProps = (state: AppState): StateToProps => ({
    To: state['send-sms-notification'].sendSMSForm.To,
    From: state['send-sms-notification'].sendSMSForm.From,
    Message: state['send-sms-notification'].sendSMSForm.Message
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchToProps => ({
    setTo: bindActionCreators(Actions.setTo, dispatch),
    setFrom: bindActionCreators(Actions.setFrom, dispatch),
    setMessage: bindActionCreators(Actions.setMessage, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendSMSForm);