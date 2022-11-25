import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditFacultyById, UpdateFacultyInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormFaculty = NonNullable<EditFacultyById['faculty']>

interface FacultyFormProps {
  faculty?: EditFacultyById['faculty']
  onSave: (data: UpdateFacultyInput, id?: FormFaculty['id']) => void
  error: RWGqlError
  loading: boolean
}

const FacultyForm = (props: FacultyFormProps) => {
  const onSubmit = (data: FormFaculty) => {
  
    
    
  
    
    
  
    props.onSave(data, props?.faculty?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormFaculty> onSubmit={onSubmit} error={props.error}>
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
            defaultValue={props.faculty?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        
          <TextField
            name="description"
            defaultValue={props.faculty?.description}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="description" className="rw-field-error" />

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

export default FacultyForm
