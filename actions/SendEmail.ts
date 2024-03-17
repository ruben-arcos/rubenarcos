'use server'

const sendEmail = async (formData: FormData) => {
    console.log('running on server')
    console.log(formData.get('senderEmail'));
    console.log(formData.get('message'));
  }