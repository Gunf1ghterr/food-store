export interface ICurrentOrder {
    customer_id: number;
    address: string;
    comment?: string;
    recipient: string;
    recipient_phone: string;
}