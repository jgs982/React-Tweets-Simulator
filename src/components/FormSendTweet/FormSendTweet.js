import React from 'react'
import './FormSendTweet.scss'
import { FormControl, FormGroup, TextField, Button } from '@mui/material'

const FormSendTweet = (props) => {

    const { sendTweet } = props

    const [formValue, setFormValue] = React.useState({
        name: '',
        tweet: ''
    })

    const onFormChange = event => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value 
        })
    }

    return (
        <div className='form-send-tweet'>
            <h2 className='form-send-tweet__title'> Enviar Tweet </h2>
            <form
                className='form-send-tweet__form'
                onSubmit={event => sendTweet(event, formValue)}
                onChange={onFormChange}
            >
                <FormControl>
                    <FormGroup>
                        <TextField
                            className='form-send-tweet__form-name'
                            label="Nombre de Usuario" 
                            variant="outlined"
                            type='text'
                            name='name'                            
                            margin='normal'
                        />
                    </FormGroup>

                    <FormGroup>
                        <TextField
                            className='form-sendTweet__form-textarea'                            
                            name='tweet'
                            multiline
                            rows='6'
                            label='Tweet'
                            margin='normal'
                            placeholder='Escribe tu Tweet...'
                        />                        
                    </FormGroup>

                    <FormGroup>
                        <Button type='submit'> Enviar Tweet </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    )
}

export default FormSendTweet