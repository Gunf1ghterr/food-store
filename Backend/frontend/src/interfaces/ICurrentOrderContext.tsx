import { ICurrentOrder } from "./ICurrentOrder"

export interface ICurrentOrderContext {
    currentOrder: ICurrentOrder
    setCurrentOrder: React.Dispatch<React.SetStateAction<ICurrentOrder>>
}