export class Lancamento {
    id: number;
    dataCadastro: Date;
    idCategoria: number;
    descricao: string;
    valor: number;
    pagoEm: Date;
    codStatus: number;
  
    constructor(id: number, dataCadastro: Date, idCategoria: number, descricao: string, valor: number, pagoEm: Date, codStatus: number) {
            this.id = id ;
            this.dataCadastro = dataCadastro
            this.idCategoria = idCategoria;
            this.descricao = descricao;
            this.valor = valor;
            this.pagoEm = pagoEm;
            this.codStatus = codStatus;
    }
}
