import { useStage } from '@/providers/StageProvider'
import { STAGE_TYPES } from '@/utils/constants'
import { Man, Woman } from '@mui/icons-material'
import { Button } from '@mui/material'
import styles from './styles.module.css'

export default function GenderStage() {

  const {setStage} = useStage()
  
  function handleGender(e: React.MouseEvent<HTMLButtonElement>) {
    setStage(STAGE_TYPES.AGE)
    const gender = e.currentTarget.name

  }
  
  
  return (
    <div className={`${styles.container}`}>
        <h3 className={`text-center`}>
          Qual o seu gênero biológico?
        </h3>
        <main className='grid sm:grid-cols-3 grid-cols-1 h-[150px] sm:h-[105px]'>
          <div className='h-0'></div>
          <div className='flex flex-col h-full justify-around items-center'>
            <Button
              variant='outlined'
              className='w-[80%]'
              onClick={handleGender}
              name='male'
            >Masculino <Man /> </Button>
            <Button
              variant='outlined'
              className='w-[80%]'
              onClick={handleGender}
              name='female'
            >Feminino <Woman /> </Button>
          </div>
          <div></div>
        </main>
    </div>
  )
}
