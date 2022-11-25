import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditControlWorkById, UpdateControlWorkInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormControlWork = NonNullable<EditControlWorkById['controlWork']>

interface ControlWorkFormProps {
  controlWork?: EditControlWorkById['controlWork']
  onSave: (data: UpdateControlWorkInput, id?: FormControlWork['id']) => void
  error: RWGqlError
  loading: boolean
}

const ControlWorkForm = (props: ControlWorkFormProps) => {
  const onSubmit = (data: FormControlWork) => {
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.controlWork?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormControlWork> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.controlWork?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="week"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Week
        </Label>
        
          <NumberField
            name="week"
            defaultValue={props.controlWork?.week}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="week" className="rw-field-error" />

        <Label
          name="subjectId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Subject id
        </Label>
        
          <TextField
            name="subjectId"
            defaultValue={props.controlWork?.subjectId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="subjectId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ControlWorkForm
