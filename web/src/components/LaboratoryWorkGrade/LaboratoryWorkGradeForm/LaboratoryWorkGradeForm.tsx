import {
  Form,
  FormError,
  FieldError,
  Label,
  RadioField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditLaboratoryWorkGradeById, UpdateLaboratoryWorkGradeInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormLaboratoryWorkGrade = NonNullable<EditLaboratoryWorkGradeById['laboratoryWorkGrade']>

interface LaboratoryWorkGradeFormProps {
  laboratoryWorkGrade?: EditLaboratoryWorkGradeById['laboratoryWorkGrade']
  onSave: (data: UpdateLaboratoryWorkGradeInput, id?: FormLaboratoryWorkGrade['id']) => void
  error: RWGqlError
  loading: boolean
}

const LaboratoryWorkGradeForm = (props: LaboratoryWorkGradeFormProps) => {
  const onSubmit = (data: FormLaboratoryWorkGrade) => {
  
    
      if (data.grade === '') {
        data.grade = null
      }
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.laboratoryWorkGrade?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormLaboratoryWorkGrade> onSubmit={onSubmit} error={props.error}>
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
              id="laboratoryWorkGrade-grade-none"
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
            id="laboratoryWorkGrade-grade-0"
            name="grade"
            defaultValue="Issued"
            defaultChecked={props.laboratoryWorkGrade?.grade?.includes('Issued')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Issued
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="laboratoryWorkGrade-grade-1"
            name="grade"
            defaultValue="Done"
            defaultChecked={props.laboratoryWorkGrade?.grade?.includes('Done')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Done
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="laboratoryWorkGrade-grade-2"
            name="grade"
            defaultValue="Asserted"
            defaultChecked={props.laboratoryWorkGrade?.grade?.includes('Asserted')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Asserted
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="laboratoryWorkGrade-grade-3"
            name="grade"
            defaultValue="AssertedAhead"
            defaultChecked={props.laboratoryWorkGrade?.grade?.includes('AssertedAhead')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Assertedahead
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="laboratoryWorkGrade-grade-4"
            name="grade"
            defaultValue="AssertedBehind"
            defaultChecked={props.laboratoryWorkGrade?.grade?.includes('AssertedBehind')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Assertedbehind
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
            defaultValue={props.laboratoryWorkGrade?.studentId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="studentId" className="rw-field-error" />

        <Label
          name="lrId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lr id
        </Label>
        
          <TextField
            name="lrId"
            defaultValue={props.laboratoryWorkGrade?.lrId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="lrId" className="rw-field-error" />

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

export default LaboratoryWorkGradeForm
