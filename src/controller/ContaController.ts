import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        }else
            console.log(colors.fg.red,"\nA CONTA NUMERO: " + numero + " NÃO FOI ENCONTRADA!", colors.reset);
    }

    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        };
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nA CONTA NÚMERO: " + conta.numero + " FOI CRIADA COM SUCESSO!", colors.reset);
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, "\nA CONTA NUMERO: " + conta.numero + " FOI ATUALIZADA COM SUCESSO!", colors.reset);
        }else
            console.log(colors.fg.red, "\nA CONTA NUMERO: " + conta.numero + " NÃO FOI ENCONTRADA!", colors.reset);
    }
    
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.slice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green,"\nA CONTA NÚMERO: " + numero + " FOI APAGADA COM SUCESSO!", colors.reset);
        } else
        console.log(colors.fg.red, "\A CONTA NÚMERO: " + numero + " NÃO FOI ENCONTRADA!", colors.reset);
    }
    
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }


    /*Métodos Auxuliares*/
    /*Gerar Número da Conta*/
    public gerarNumero(): number {
        return ++ this.numero;
    }

    /*Checa se uma Conta existe*/
    public buscarNoArray(numero: number): Conta | null {

        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }
}