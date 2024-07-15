'use client'

import GenderStage from "@/components/Stages/GenderStage"
import { useStage } from "@/providers/StageProvider"
import { STAGE_TYPES } from "@/utils/constants"


export default function HomeSreen() {
    const {stage} = useStage()
  
    return (
    <>  
      {stage === STAGE_TYPES.GENDER && <GenderStage />}
    </>
  )
}
