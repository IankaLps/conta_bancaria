import readlinesync = require("readline-sync");
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { colors } from "./src/util/Colors";
import { ContaController } from "./src/controller/ContaController";

export function main() {
    
    // Instancia da Classe ContaController
    let contas: ContaController = new ContaController();

    // Variáveis Auxiliares
    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];

    console.log("\nCriar Contas\n");

let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
contas.cadastrar(cc1);

let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
contas.cadastrar(cc2);

let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
contas.cadastrar(cp1);

let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
contas.cadastrar(cp2);

contas.listarTodas();

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
                    "************************************************");
        console.log("                                                ");
        console.log("              BANCO DO BRAZIL COM Z             ");
        console.log("                                                ");
        console.log("************************************************");
        console.log("                                                ");
        console.log("        1 - CRIAR CONTA                         ");
        console.log("        2 - LISTAR TODAS AS CONTAS              ");
        console.log("        3 - BUSCAR CONTA POR NUMERO             ");
        console.log("        4 - ATUALIZAR DADOS DA CONTA            ");
        console.log("        5 - APAGAR CONTA                        ");
        console.log("        6 - SACAR                               ");
        console.log("        7 - DEPOSITAR                           ");
        console.log("        8 - TRANSFERIR VALORES ENTRE CONTAS     ");
        console.log("        9 - SAIR                                ");
        console.log("                                                ");
        console.log("************************************************");
        console.log("                                                ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao){
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCRIAR CONTA\n\n", colors.reset);

                console.log("DIGITE O NÚMERO DA AGÊNCIA: ");
                agencia = readlinesync.questionInt("");

                console.log("DIGITE O NOME DO TITULAR DA CONTA: ");
                titular = readlinesync.question("");

                console.log("DIGITE O TIPO DA CONTA: ");
                tipo = readlinesync.keyInSelect(tiposContas, "",{cancel: false}) + 1;

                console.log("\nDIGITE O SALDO DA CONTA (R$): ");
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("DIGITE O LIMITE DA CONTA (R$): ");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;
                    case 2:
                        console.log("DIGITE O DIA DO ANIVERSÁRIO DA CONTA POUPANÇA: ");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nLISTAR TODAS AS CONTAS\n\n", colors.reset);
                
                contas.listarTodas();
                
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nCONSULTAR DADOS DA CONTA - POR NÚMERO\n\n", colors.reset);
                
                console.log("DIGITE O NÚMERO DA CONTA: ");
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nATUALIZAR DADOS DA CONTA\n\n", colors.reset);
                
                console.log("DIGITE O NÚMERO DA CONTA: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {

                    console.log("DIGITE O NÚMERO DA AGÊNCIA: ");
                    agencia = readlinesync.questionInt("");

                    console.log("DIGITE O NOME DO TITULAR DA CONTA: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("\nDIGITE O SALDO DA CONTA (R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("DIGITE O LIMITE DA CONTA (R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log("DIGITE O DIA DO ANIVERSÁRIO DA CONTA POUPANÇA: ");
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                        break;
                    } 
                } else  {
                        console.log(colors.fg.red, "\nA CONTA NÚMERO: " + numero + "NÃO FOI ENCONTRADO!", colors.reset);
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nAPAGAR CONTA\n\n", colors.reset);
                    
                console.log("DIGITE O NÚMERO DA CONTA: ");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);
                    
                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSAQUE\n\n", colors.reset);
                    
                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDEPÓSITO\n\n", colors.reset);
                    
                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTRANSFERÊNCIA ENTRE CONTAS\n\n", colors.reset);
                    
                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida\n", colors.reset);
                
                keyPress()
                break;
        }
    }
    
}


/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
    console.log("\n***************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Ianka Lopes");
    console.log("github.com/IankaLps");
    console.log("*************************************************");
}
main();




function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}