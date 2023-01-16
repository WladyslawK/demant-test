import React from 'react'
import {Button} from "../button/Button"
import s from './Section.module.scss'

export const Section = () => {
  return (
    <section className={s.section}>
      <h1>We look at things differently.</h1>
      <p className={s.description}>
        Powerful, self-serve product and growth analytics to help you convert, engage, <br/>
        an retain more users.Trusted by over 4,000 startups.
      </p>
      <div className={s.actionContainer}>
        <span className={s.buttonSpace}>
          <Button size={'big'} buttonStyle={'outlined'}>Demo</Button></span>
        <span className={s.buttonSpace}>
          <Button size={'big'} buttonStyle={'primary'}>Sign up</Button>
        </span>
      </div>
    </section>
  )
}