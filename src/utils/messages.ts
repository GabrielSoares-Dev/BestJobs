import { message } from "antd";

type typemessage = 'error' | 'success';

export const Message = (tipo: typemessage, msg: string) => {
    message.open({
        type: tipo,
        content: msg,
        duration: 2,
    })

}