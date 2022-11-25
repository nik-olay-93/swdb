import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditAcademicPlanById, UpdateAcademicPlanInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormAcademicPlan = NonNullable<EditAcademicPlanById['academicPlan']>

interface AcademicPlanFormProps {
  academicPlan?: EditAcademicPlanById['academicPlan']
  onSave: (data: UpdateAcademicPlanInput, id?: FormAcademicPlan['id']) => void
  error: RWGqlError
  loading: boolean
}

const AcademicPlanForm = (props: AcademicPlanFormProps) => {
  const onSubmit = (data: FormAcademicPlan) => {
  
    
    
  
    
    
  
    props.onSave(data, props?.academicPlan?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAcademicPlan> onSubmit={onSubmit} error={props.error}>
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
            defaultValue={props.academicPlan?.name}
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
            defaultValue={props.academicPlan?.description}
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

export default AcademicPlanForm
