export class Categoria {
    id: number;
    descricao: string;
    tipoCategoria: number
  
    constructor(id: number, descricao: string, tipoCategoria: number) {
            this.id = id ;
            this.descricao = descricao;
            this.tipoCategoria = tipoCategoria;
    }
}
