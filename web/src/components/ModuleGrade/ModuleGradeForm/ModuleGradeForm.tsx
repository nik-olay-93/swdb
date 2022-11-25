import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditModuleGradeById, UpdateModuleGradeInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormModuleGrade = NonNullable<EditModuleGradeById['moduleGrade']>

interface ModuleGradeFormProps {
  moduleGrade?: EditModuleGradeById['moduleGrade']
  onSave: (data: UpdateModuleGradeInput, id?: FormModuleGrade['id']) => void
  error: RWGqlError
  loading: boolean
}

const ModuleGradeForm = (props: ModuleGradeFormProps) => {
  const onSubmit = (data: FormModuleGrade) => {
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.moduleGrade?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormModuleGrade> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="grade"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Grade
        </Label>
        
          <NumberField
            name="grade"
            defaultValue={props.moduleGrade?.grade}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="grade" className="rw-field-error" />

        <Label
          name="studentId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Student id
        </Label>
        
          <TextField
            name="studentId"
            defaultValue={props.moduleGrade?.studentId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="studentId" className="rw-field-error" />

        <Label
          name="moduleId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Module id
        </Label>
        
          <TextField
            name="moduleId"
            defaultValue={props.moduleGrade?.moduleId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="moduleId" className="rw-field-error" />

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

export default ModuleGradeForm
