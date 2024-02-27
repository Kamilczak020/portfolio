'use client';

import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Button, FieldError, Form, Input, Label, TextArea, TextField } from 'react-aria-components';
import classnames from 'classnames';
import { ValidationError, sendEmail } from '@penumbra/actions/send-mail';
import { useFormState } from 'react-dom';
import style from './style.module.scss';

export function ContactForm(): JSX.Element {
  const [errors, setErrors] = useState<ValidationError>({});
  const [formErrors, formAction] = useFormState(sendEmail, {});

  useEffect(() => {
    setErrors((prev) => ({
      ...prev,
      ...formErrors,
    }));
  }, [formErrors]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: undefined,
    }));
  }, []);

  return (
    <Form className={style.form} action={formAction} validationErrors={errors}>
      <TextField className={style.row} name="name">
        <Label>Your Name</Label>
        <Input
          className={style.input}
          placeholder="John Doe"
          autoCorrect="false"
          onChange={handleChange}
        />
        <FieldError className={style.error} />
      </TextField>
      <TextField className={style.row} type="email" name="email">
        <Label>Your email address</Label>
        <Input
          className={style.input}
          placeholder="john@coolsoftware.com"
          autoCorrect="false"
          onChange={handleChange}
        />
        <FieldError className={style.error} />
      </TextField>
      <TextField className={style.row} name="message">
        <Label>Your message</Label>
        <TextArea
          className={classnames(style.input, style.textarea)}
          placeholder="Hey, I would love to get in contact! Just write me a message!"
          onChange={handleChange}
        />
        <FieldError className={style.error} />
      </TextField>
      <Button className={style.submit} type="submit">
        Send me an email
      </Button>
    </Form>
  );
}
