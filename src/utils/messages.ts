import { message } from "antd";

type typemessage = 'error' | 'success';


/**
 * Função para retornar toast de mensagem
 */
export const Message = (tipo: typemessage, msg: string,style:React.CSSProperties) => {
    message.open({
        type: tipo,
        content: msg,
        duration: 2,
        style:style
            
    })

}