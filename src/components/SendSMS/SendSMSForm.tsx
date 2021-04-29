import React  from 'react';
import {Button, TextField, FormGroup} from '@material-ui/core';

import { SendSMSFormComponentStyles } from './SendSMSForm.Styles';
import { StateToProps, DispatchToProps } from './SendSMSForm.Container';


interface OwnProps {
    // Props passed directly to the component
}

// Props should be a combination of StateToProps, DispatchToProps, and OwnProps
type Props = StateToProps & DispatchToProps & OwnProps;

// It is recommended to keep components stateless and use redux for managing states
const SendSMSForm = (props: Props) => {
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(props);
    };

    return (
        <SendSMSFormComponentStyles>
            <form onSubmit={handleSubmit}>
            <FormGroup>
                <TextField
                    id='To'
                    label='To'
                    margin='normal'
                    variant='outlined'
                    onChange={props.setTo}
                />
                <TextField
                    id='From'
                    label='From'
                    margin='normal'
                    variant='outlined'
                    onChange={props.setFrom}
                />
                <TextField
                    id='Message'
                    label='Message'
                    multiline
                    rows='4'
                    margin='normal'
                    variant='outlined'
                    onChange={props.setMessage}
                />
                <Button variant='contained' color='primary' type="submit">Send</Button>
            </FormGroup>
            </form>
        </SendSMSFormComponentStyles>
    );
};

export default SendSMSForm;