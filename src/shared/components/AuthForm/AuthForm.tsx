import FieldComponent from './FieldComponent';

export default function AuthForm() {
  return (
    <div className='max-w-xl mx-auto mt-10'>
        <form className='p-6 [&>*]:mt-10'>
          <FieldComponent label='Email' type="email" name="email" id="email" placeholder="Email" autoFocus/>
          <FieldComponent label='Password' type="password" name="email" id="email" placeholder='Password' />
          <input 
            type="submit" 
            value="Login"
            className='
                py-2
              bg-red-400
                w-full
                rounded-lg
                hover:bg-red-700
                text-slate-100
                transition-all
            '
          />

        </form> 
    </div>

  )
}