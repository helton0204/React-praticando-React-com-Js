import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext(); //estamos criando um contexto com a função createContext() e armazenando-o na constante FavoritosContext. O contexto é criado sem nenhum valor inicial, ou seja, FavoritosContext é um contexto vazio.
FavoritosContext.displayName = 'Favoritos'; //A propriedade displayName é usada para definir um nome legível para um componente ou contexto, que é útil para depuração. Neste caso, estamos definindo o nome Favoritos para o contexto.

const FavoritosProvider = ({children}) => { //Este componente será usado para fornecer o contexto para seus filhos. A função recebe um objeto props, com uma única propriedade children, que contém os elementos filhos deste componente.
    const [favorito, setFavorito] = useState([]);

    return(
        <FavoritosContext.Provider value={{favorito, setFavorito}}> {/*o componente FavoritosContext.Provider fornece o contexto para seus filhos. A propriedade value do componente Provider é um objeto que contém as propriedades favorito e setFavorito, que são os valores que serão compartilhados pelo contexto.*/}
            {children}
        </FavoritosContext.Provider>
    )
}
export default FavoritosProvider;

export const useFavoritoContext = () => {
    const {favorito, setFavorito} = useContext(FavoritosContext);

    const adicionarRemoverFavorito = (novoFavorito) => {
        const favoritoRepitido = favorito.some(itemFavorito => itemFavorito.id === novoFavorito.id);
        let novaLista = [...favorito];
        if(!favoritoRepitido){
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }
        novaLista = favorito.filter(itemFavorito => itemFavorito.id !== novoFavorito.id);
        return setFavorito(novaLista);
    }

    return{
        favorito, adicionarRemoverFavorito
    }
}

/*
Esse código define um contexto em React chamado FavoritosContext e um componente chamado FavoritosProvider que provê esse contexto para seus componentes filhos.
O createContext é uma função do React que cria um objeto de contexto que pode ser utilizado para compartilhar dados entre componentes na árvore de componentes.
No código, estamos exportando a constante FavoritosContext, que é o objeto do contexto criado pelo createContext. Isso significa que outros componentes podem importar e usar esse objeto de contexto.
Em seguida, definimos o componente FavoritosProvider, que é uma função componente. Dentro deste componente, usamos o hook useState para definir um estado local com uma array vazia chamada favorito e a função setFavorito para atualizar esse estado.
O componente FavoritosProvider usa o objeto do contexto FavoritosContext.Provider para fornecer o contexto para seus filhos. O valor do contexto é um objeto que contém a array de favorito e a função setFavorito.
Finalmente, o componente FavoritosProvider é exportado para ser usado em outros lugares do aplicativo para fornecer o contexto de favorito e setFavorito para seus filhos.
*/

/* 
const {favorito, setFavorito} = useContext(FavoritosContext);
Essa linha de código utiliza a função useContext da biblioteca React para obter o valor atual do contexto FavoritosContext.
Ao chamar useContext(FavoritosContext), a função retorna o objeto que foi fornecido pelo componente FavoritosProvider através da propriedade value do componente Provider, que contém as propriedades favorito e setFavorito.
Dessa forma, a linha const {favorito, setFavorito} = useContext(FavoritosContext) desestrutura esse objeto retornado pelo useContext, permitindo que a função useFavoritoContext tenha acesso direto aos valores favorito e setFavorito do contexto FavoritosContext.
Assim, a função adicionarFavorito utiliza o setFavorito para atualizar o estado do contexto FavoritosContext com o novo valor de favorito.
*/