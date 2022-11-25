import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditModuleById, UpdateModuleInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormModule = NonNullable<EditModuleById['module']>

interface ModuleFormProps {
  module?: EditModuleById['module']
  onSave: (data: UpdateModuleInput, id?: FormModule['id']) => void
  error: RWGqlError
  loading: boolean
}

const ModuleForm = (props: ModuleFormProps) => {
  const onSubmit = (data: FormModule) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.module?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormModule> onSubmit={onSubmit} error={props.error}>
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
            defaultValue={props.module?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="minGrade"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Min grade
        </Label>
        
          <NumberField
            name="minGrade"
            defaultValue={props.module?.minGrade}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="minGrade" className="rw-field-error" />

        <Label
          name="okGrade"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ok grade
        </Label>
        
          <NumberField
            name="okGrade"
            defaultValue={props.module?.okGrade}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="okGrade" className="rw-field-error" />

        <Label
          name="goodGrade"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Good grade
        </Label>
        
          <NumberField
            name="goodGrade"
            defaultValue={props.module?.goodGrade}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="goodGrade" className="rw-field-error" />

        <Label
          name="maxGrade"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Max grade
        </Label>
        
          <NumberField
            name="maxGrade"
            defaultValue={props.module?.maxGrade}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="maxGrade" className="rw-field-error" />

        <Label
          name="subjectId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Subject id
        </Label>
        
          <TextField
            name="subjectId"
            defaultValue={props.module?.subjectId}
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

export default ModuleForm
