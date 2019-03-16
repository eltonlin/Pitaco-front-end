import { http } from './config'

export default	{
	
	salvar:(pergunta)=>{
		return http.post('pergunta',pergunta);
    },
    
	atualizar:(pergunta)=>{
		return http.put('pergunta',pergunta);
    },

    listar:()=>{
		return http.get('perguntas')
    },
    
	apagar:(pergunta)=>{
		return http.delete('pergunta', { data: pergunta })
	},
	
}