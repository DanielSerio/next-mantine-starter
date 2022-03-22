import React, { ChangeEvent, FocusEvent, useMemo } from 'react';
import { Button, Text, Textarea, TextInput } from '@mantine/core'
import { MailForward } from 'tabler-icons-react';
import { useForm } from '@mantine/form';


export default function ContactForm() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',

    },
    validate: {
      name: (value) => (value.length ? null : 'Name is required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      subject: (value) => (value.length ? null : 'Name is required'),
      message: (value) => (!/\<\/textarea\>|\<script\>|\<\/script\>/g.test(value) ? null : 'Invalid Text'),
    },
  })

  const getChangeListener = <T extends HTMLElement = HTMLInputElement>
    (name: 'email' | 'message' | 'subject' | 'name') => {
    return (e: ChangeEvent<T>) => {
      form.setFieldValue(name, (
        (e.currentTarget as unknown) as HTMLInputElement).value)
    }
  }

  const getBlurListener = (name: string) => {
    return (e: FocusEvent) => {
      form.validateField(name)
    }
  }

  const buttonDisabled = useMemo<boolean>(() => {
    return Boolean(form.errors && (
      form.errors.name ||
      form.errors.email ||
      form.errors.message ||
      form.errors.subject
    ))
  }, [form])



  return (
    <form className="form" onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        placeholder="John Doe"
        label="Full Name"
        value={form.values.name}
        onChange={(e) => getChangeListener('name')(e)}
        onBlur={(e) => getBlurListener('name')(e)}
        error={(form.errors && form.errors.name)}
        required />
      <TextInput
        type='email'
        placeholder="john.doe@companyx.com"
        label="Email"
        value={form.values.email}
        onChange={(e) => getChangeListener('email')(e)}
        onBlur={(e) => getBlurListener('email')(e)}
        error={(form.errors && form.errors.email)}
        required />
      <TextInput
        placeholder="Company website"
        label="Subject"
        value={form.values.subject}
        onChange={(e) => getChangeListener('subject')(e)}
        onBlur={(e) => getBlurListener('subject')(e)}
        error={(form.errors && form.errors.subject)}
        required />
      <Textarea
        placeholder='Message'
        label="Message"
        value={form.values.message}
        onChange={(e) => getChangeListener<HTMLTextAreaElement>('message')(e)}
        onBlur={(e) => getBlurListener('message')(e)}
        error={(form.errors && form.errors.message)}
        required
      />
      <Button disabled={buttonDisabled} mt={'md'} type='submit' title='Submit and send'>
        <Text component='span' sx={{
          display: 'inline-flex',
          alignItems: 'center',
          marginRight: '1ch'
        }}>Submit and Send</Text>
        <MailForward />
      </Button>
    </form>
  );
}
