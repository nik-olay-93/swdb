import {
  Form,
  FormError,
  FieldError,
  Label,
  RadioField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditSemGradeById, UpdateSemGradeInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormSemGrade = NonNullable<EditSemGradeById['semGrade']>

interface SemGradeFormProps {
  semGrade?: EditSemGradeById['semGrade']
  onSave: (data: UpdateSemGradeInput, id?: FormSemGrade['id']) => void
  error: RWGqlError
  loading: boolean
}

const SemGradeForm = (props: SemGradeFormProps) => {
  const onSubmit = (data: FormSemGrade) => {
  
    
      if (data.grade === '') {
        data.grade = null
      }
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.semGrade?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormSemGrade> onSubmit={onSubmit} error={props.error}>
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
        
          
          <div className="rw-check-radio-items">
            <RadioField
              id="semGrade-grade-none"
              name="grade"
              defaultValue=""
              defaultChecked={!props.spot?.spotType}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
            />
            <div className="rw-check-radio-item-none">
              None
            </div>
          </div>
          
          
        <div className="rw-check-radio-items">
          <RadioField
            id="semGrade-grade-0"
            name="grade"
            defaultValue="Attended"
            defaultChecked={props.semGrade?.grade?.includes('Attended')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Attended
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="semGrade-grade-1"
            name="grade"
            defaultValue="Worked"
            defaultChecked={props.semGrade?.grade?.includes('Worked')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Worked
          </div>
        </div>
          
        

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
            defaultValue={props.semGrade?.studentId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="studentId" className="rw-field-error" />

        <Label
          name="seminarId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Seminar id
        </Label>
        
          <TextField
            name="seminarId"
            defaultValue={props.semGrade?.seminarId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="seminarId" className="rw-field-error" />

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

export default SemGradeForm
