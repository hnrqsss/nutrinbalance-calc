import { STAGE_TYPES } from "@/utils/constants";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

export type StageContextType = {
    stage: number,
    setStage: Dispatch<SetStateAction<number>>
}

type Props = {
    children: ReactNode
}

export const StageContext = createContext<StageContextType>({
    stage: 0,
    setStage: (stage) => {}
})
export function StageProvider({ children }: Props) {

    const [stage, setStage] = useState(STAGE_TYPES.GENDER)

    return <StageContext.Provider
        value={{
            stage,
            setStage
        }}
    >
        {children}
    </StageContext.Provider>
}

export function useStage(): StageContextType {
    const {
        stage,
        setStage
    } = useContext(StageContext)

    return {
        stage,
        setStage
    }
}