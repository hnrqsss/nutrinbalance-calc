import { useStage } from '@/providers/StageProvider'
import { STAGE_TYPES } from '@/utils/constants'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'

export default function AgeStage() {

  const {setStage} = useStage()
  const [age, setAge] = useState<number>()
  
  function handleAge(e: React.MouseEvent<HTMLButtonElement>) {
    setStage(STAGE_TYPES.BODY_TYPE)
    const gender = e.currentTarget.name
  }
  
  console.log(age)
  
  return (
    <div className={``}>
        <h3 className={`text-center`}>
          Qual sua idade?
        </h3>
        <main className='grid sm:grid-cols-3 grid-cols-1 h-[140px] sm:h-[157px]'>
          <div className='h-0'></div>
          <div className='flex flex-col h-full justify-around items-center'>
            <TextField 
                id="outlined-basic" 
                label="Idade" 
                variant="outlined"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
                name='age' type='number'
                sx={{
                    width: '80%'
                }}
            />
            <Button 
                variant="contained"
                sx={{
                    width: '80%'
                }}
                disabled={!age}
            >PRÓXIMO</Button>
          </div>
          <div></div>
        </main>
    </div>
  )
}
