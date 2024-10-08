export class LancamentoList {
    id: number
    dataCadastro: string;
    categoria: string;
    descricao: string;
    impactoReceita: string;
    valor: string;
    pagoEm: string;
    dataVencimento: string;
    codStatus: number;
  
    constructor(id: number, dataCadastro: string, categoria: string, descricao: string, impactoReceita: string, valor: string, pagoEm: string, dataVencimento: string, codStatus: number) {
        this.id = id;
        this.dataCadastro = dataCadastro;
        this.categoria = categoria;
        this.descricao = descricao;
        this.impactoReceita = impactoReceita;
        this.valor = valor;
        this.pagoEm = pagoEm != null ? pagoEm : "";
        this.dataVencimento = dataVencimento!= null? dataVencimento : "";
        this.codStatus = codStatus;
    }
}
