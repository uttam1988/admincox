import React, { useState } from 'react'
import history from '../../history';
import LoginComponent from '../../component/Login'

const LoginContainer = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = () => {
        if(formData.email === 'irfan@gmail.com' && formData.password === '12345') {
            history.push('/dashboard')
        } else {
            setErrorMessage('Enter Valid Email(irfan@gmail.com) and Password(12345)')
        }
    }
    return (
        <LoginComponent {...formData} setData={formData => setFormData(formData)} submit={() => handleSubmit()} error={errorMessage}/>
    )
}

export default LoginContainer