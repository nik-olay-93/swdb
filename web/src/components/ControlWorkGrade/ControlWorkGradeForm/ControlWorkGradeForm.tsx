import {
  Form,
  FormError,
  FieldError,
  Label,
  RadioField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditControlWorkGradeById, UpdateControlWorkGradeInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormControlWorkGrade = NonNullable<EditControlWorkGradeById['controlWorkGrade']>

interface ControlWorkGradeFormProps {
  controlWorkGrade?: EditControlWorkGradeById['controlWorkGrade']
  onSave: (data: UpdateControlWorkGradeInput, id?: FormControlWorkGrade['id']) => void
  error: RWGqlError
  loading: boolean
}

const ControlWorkGradeForm = (props: ControlWorkGradeFormProps) => {
  const onSubmit = (data: FormControlWorkGrade) => {
  
    
      if (data.grade === '') {
        data.grade = null
      }
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.controlWorkGrade?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormControlWorkGrade> onSubmit={onSubmit} error={props.error}>
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
              id="controlWorkGrade-grade-none"
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
            id="controlWorkGrade-grade-0"
            name="grade"
            defaultValue="Issued"
            defaultChecked={props.controlWorkGrade?.grade?.includes('Issued')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Issued
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="controlWorkGrade-grade-1"
            name="grade"
            defaultValue="Done"
            defaultChecked={props.controlWorkGrade?.grade?.includes('Done')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Done
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="controlWorkGrade-grade-2"
            name="grade"
            defaultValue="Asserted"
            defaultChecked={props.controlWorkGrade?.grade?.includes('Asserted')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Asserted
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="controlWorkGrade-grade-3"
            name="grade"
            defaultValue="AssertedAhead"
            defaultChecked={props.controlWorkGrade?.grade?.includes('AssertedAhead')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Assertedahead
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="controlWorkGrade-grade-4"
            name="grade"
            defaultValue="AssertedBehind"
            defaultChecked={props.controlWorkGrade?.grade?.includes('AssertedBehind')}
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
            defaultValue={props.controlWorkGrade?.studentId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="studentId" className="rw-field-error" />

        <Label
          name="cmId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cm id
        </Label>
        
          <TextField
            name="cmId"
            defaultValue={props.controlWorkGrade?.cmId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="cmId" className="rw-field-error" />

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

export default ControlWorkGradeForm
