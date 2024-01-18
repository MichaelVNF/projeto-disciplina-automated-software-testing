export interface IRepositorio<I, T> {

    buscar(campo: I): T | undefined;

    adicionar(entidade: T): void;
}