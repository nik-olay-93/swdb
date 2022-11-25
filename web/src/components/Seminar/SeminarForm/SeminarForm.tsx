import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditSeminarById, UpdateSeminarInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormSeminar = NonNullable<EditSeminarById['seminar']>

interface SeminarFormProps {
  seminar?: EditSeminarById['seminar']
  onSave: (data: UpdateSeminarInput, id?: FormSeminar['id']) => void
  error: RWGqlError
  loading: boolean
}

const SeminarForm = (props: SeminarFormProps) => {
  const onSubmit = (data: FormSeminar) => {
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.seminar?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormSeminar> onSubmit={onSubmit} error={props.error}>
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
            defaultValue={props.seminar?.name}
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
            defaultValue={props.seminar?.week}
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
            defaultValue={props.seminar?.subjectId}
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

export default SeminarForm
