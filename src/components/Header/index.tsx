
import styles from './styles.module.css'

export default function Header() {
  return (
    <div className={`${styles.container} grid grid-cols-3 gap-4`}>
        <div></div>
        <div className='flex flex-row justify-center items-center'>
            <h1 className='text-center'>Nutri N&apos;  Balance</h1>
        </div>
        <div></div>
    </div>
  )
}
