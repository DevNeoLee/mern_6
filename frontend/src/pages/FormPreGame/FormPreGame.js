

import { Form, Button } from "react-bootstrap"
import Input from "../../components/Input"
import Radio from "../../components/Radio"
import Select from "../../components/Select"

import { useState } from 'react'
import "../../App.css"
import data from "./DataPreGame"

import { Link } from "react-router-dom"

export default function FormPreGame({ step }) {

  const [questions, setQuestions] = useState(
    data
  )

  console.log(data)

  return (
    <>
      <div className="container">
        <div className="formGeneral">
          <Form>
            <fieldset>
              <Form.Group>
                <h2>{data.title}</h2>
                {data && data.questions.map(question => (
                  <div key={question.id}>
                    {question.choices.length < 5
                      ?
                      <div key={question.id}>
                        <Form.Label htmlFor={`radio`}>{question.question}</Form.Label>
                        {question.choices.map((choice, i) => (
                          <Radio label={choice} key={choice + i} name={question.question} />
                        ))}
                      </div>
                      :
                      <Select question={question.question} choices={question.choices} />
                    }
                  </div>
                ))}
              </Form.Group>
            </fieldset>
            <Button>Next</Button>
          </Form>
        </div>
      </div>
    </>
  )
}
