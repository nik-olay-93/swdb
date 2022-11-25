import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditGroupById, UpdateGroupInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormGroup = NonNullable<EditGroupById['group']>

interface GroupFormProps {
  group?: EditGroupById['group']
  onSave: (data: UpdateGroupInput, id?: FormGroup['id']) => void
  error: RWGqlError
  loading: boolean
}

const GroupForm = (props: GroupFormProps) => {
  const onSubmit = (data: FormGroup) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.group?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormGroup> onSubmit={onSubmit} error={props.error}>
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
            defaultValue={props.group?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="courseId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Course id
        </Label>
        
          <TextField
            name="courseId"
            defaultValue={props.group?.courseId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="courseId" className="rw-field-error" />

        <Label
          name="semester"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Semester
        </Label>
        
          <NumberField
            name="semester"
            defaultValue={props.group?.semester}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="semester" className="rw-field-error" />

        <Label
          name="departmentId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Department id
        </Label>
        
          <TextField
            name="departmentId"
            defaultValue={props.group?.departmentId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="departmentId" className="rw-field-error" />

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

export default GroupForm
