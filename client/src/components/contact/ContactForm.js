import React from 'react'
import { Formik, Field } from 'formik'
import validationSchema from './validationSchema'

const encode = (data) => {
  return Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
}



const ContactForm = () => {
  // onSubmit={(values, { setSubmitting }) => {
  //   fetch("/", {                                 
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({
  //       'form-name': 'contact',
  //       ...values,
  //     }),
  //   })
  //     .then(() => {
  //       alert('Success!')
  //       setSubmitting(false)
  //     })
  //     .catch(error => {
  //       alert('Error: Please Try Again!')                            
  //       setSubmitting(false)
  //     })
  // }}


  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={application / x - www - form - urlencoded}
      render={({
        isSubmitting,
        handleSubmit,
        handleReset,
      }) => (
          <form className='form'
            name='contact'
            onSubmit={handleSubmit}
            onReset={handleReset}
            data-netlify='true'
            data-netlify-honeypot='bot-field'
          >
            <div className='field'>
              <label htmlFor='name' className='label'>Name</label>
              <Field
                className='input'
                type='text'
                name='name'
              />
            </div>
            <div className='field'>
              <label htmlFor='email' className='label'>Email</label>
              <Field
                className='input'
                type='text'
                name='email'
              />
            </div>
            <div className='field'>
              <label htmlFor='message' className='label'>Message</label>
              <Field
                className='input-textarea'
                name='message'
                component='textarea'
                rows='6'
              />
            </div>
            <div className='buttons'>
              <input type='reset' value='Clear'
                className='button' />
              <input name='submit' type='submit' disabled={isSubmitting} value='Send Message'
                className='button' />
            </div>
          </form>
        )}
    />
  )
}

export default ContactForm