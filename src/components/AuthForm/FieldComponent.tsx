import React from 'react';
interface InputFieldProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  label: string,
  type: string,
  name: string,
}

export default function InputField(props: InputFieldProps) {
  const { label, ...inputProps} = props;
  return(
    <div className='relative flex flex-col'>
      <input 
        { ...inputProps }
        className='peer py-2 placeholder-transparent border border-transparent border-b-slate-400 outline outline-transparent'
      />

      <label 
        htmlFor='email' 
        className='
          absolute
          left-0
          -top-5
          peer-placeholder-shown:top-2
          transition-all
          peer-focus:-top-5
        '
      >{ label }</label>
    </div>
  )

}