import React from 'react'
import {useField} from 'formik'

export const CustomTextInput = ({labelFor,label,placeholder,...props}) => {
    const [field,meta] = useField(props);
    return (
        <>
            <label htmlFor={labelFor}>{label}</label>
            <input 
            {...field}
            {...props}
            // className={`form-control ${meta.error&&meta.touched?"is-invalid":"is-valid"}`} 
            className={`form-control ${meta.error&&meta.touched?"is-invalid":""} ${!meta.error&&meta.touched&& "is-valid"}`} 
            placeholder={placeholder} 
            />
            {meta.error&&meta.error?
            (<div className="invalid-feedback">
                {meta.error}
            </div>) : null
            }

        </>
    )
}


export const CustomTextarea = ({label,labelFor,rows,...props})=>{
    const [field,meta] = useField(props);
    return (
        <>
            <label htmlFor={labelFor}>{label}</label>
            <textarea 
            // className={`form-control ${meta.error&&meta.touched?"is-invalid":"is-valid"}`} 
            className={`form-control ${meta.error&&meta.touched &&"is-invalid"} ${!meta.error&&meta.touched&& "is-valid"}`} 
            rows={rows}
            {...field}
            {...props} 
            />
            {meta.error&&meta.error?
            (<div className="text-danger">
                {meta.error}
            </div>) : null
            }
        </>
    )
}

export const CustomCheckbox = ({label,...props})=>{
    const [field,meta] = useField(props,'checkbox');
    return (
        <>
            <label className="form-check-label">
                <input className="form-check-input" type="checkbox" {...field} {...props} /> {label}
            </label>
            {meta.error&&meta.error?
            (<div className="invalid-feedback">
                {meta.error}
            </div>) : null
            }
        </>
    )
}


export const CustomSelect = ({children,labelFor,label,...props})=>{
    const [field,meta] = useField(props);
    return (
        <>
            <label htmlFor={labelFor}>{label}</label>
            <select
             className={`form-control ${meta.error&&meta.touched&&"is-invalid"} ${!meta.error&&meta.touched&& "is-valid"}`} 
            {...field}
            {...props} 
            >
                {children}
            </select>
            {meta.error&&meta.error?
            (<div className="text-danger">
                {meta.error}
            </div>) : null
            }

        </>
    )
}



CustomTextInput.defaultProps = {
    placeholder:"",
    label:"",
    labelFor:""
 
}

CustomTextarea.defaultProps = {
    label:"",
    labelFor:"",
    rows:4
 
}

