export class LancamentoList {
    data: Date;
    categoria: string;
    descricao: string;
    impactoReceita: string;
    valor: number;
    dataVencimento: Date;
    dataPagamento: Date;
    status: string;
  
    constructor(data: Date, categoria: string, descricao: string, impactoReceita: string,
        valor: number, dataVencimento: Date,
        dataPagamento: Date, status: string) {
            this.data = data ;
            this.categoria = categoria;
            this.descricao = descricao;
            this.impactoReceita = impactoReceita;
            this.valor = valor;
            this.dataVencimento = dataVencimento;
            this.dataPagamento = dataPagamento;
            this.status = status;
    }
}
