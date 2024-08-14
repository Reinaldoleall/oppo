document.addEventListener('DOMContentLoaded', () => {
    const selectElements = [
        'vendasA58Preto', 'vendasA58Verde', 'vendasA79Preto', 'vendasA79Roxo',
        'vendasReno11FVerde', 'vendasReno11FLilas', 'estoqueA58Preto', 'estoqueA58Verde',
        'estoqueA79Preto', 'estoqueA79Roxo', 'estoqueReno11FVerde', 'estoqueReno11FLilas',
        'vendasTotaisDia', 'vendasNesteMes', 'tarefasNesteMes', 'vendasA15', 'vendasA05',
        'vendasA25', 'vendasA35', 'vendasA55', 'vendasS23', 'vendasG34', 'vendasG24',
        'vendasG54', 'vendasG84', 'vendasEdge40', 'vendasIphone12', 'vendasIphone13',
        'vendasOutros'
    ];

    function populateSelect(id) {
        const select = document.getElementById(id);
        for (let i = 0; i <= 20; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            select.appendChild(option);
        }
    }

    selectElements.forEach(populateSelect);

    function getCurrentDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
    }

    window.gerarRelatorio = function() {
        const resultado = document.getElementById('resultado');
        let report = `Data: ${getCurrentDate()}\n`;
        report += `Supervisor: Taynara\n`;
        report += `Nome da loja: Bangu\n`;
        report += `Gerente de loja: Fernando\n\n`;

        // Vendas
        report += `Vendas A58: ${document.getElementById('vendasA58Preto').value} Preto, ${document.getElementById('vendasA58Verde').value} Verde\n`;
        report += `Vendas A79: ${document.getElementById('vendasA79Preto').value} Preto, ${document.getElementById('vendasA79Roxo').value} Roxo\n`;
        report += `Vendas Reno11F: ${document.getElementById('vendasReno11FVerde').value} Verde, ${document.getElementById('vendasReno11FLilas').value} Lilás\n\n`;

        // Estoque
        report += `Estoque A58: Preto ${document.getElementById('estoqueA58Preto').value} ,Verde ${document.getElementById('estoqueA58Verde').value}\n`;
        report += `Estoque A79: Preto ${document.getElementById('estoqueA79Preto').value} ,Roxo ${document.getElementById('estoqueA79Roxo').value}\n`;
        report += `Estoque Reno11F: Verde ${document.getElementById('estoqueReno11FVerde').value} ,Lilás ${document.getElementById('estoqueReno11FLilas').value}\n\n`;

        // Vendas Totais
        report += `Vendas totais do dia: ${document.getElementById('vendasTotaisDia').value}\n`;
        report += `Vendas neste mês: ${document.getElementById('vendasNesteMes').value}\n`;
        report += `Tarefas este mês: ${document.getElementById('tarefasNesteMes').value}\n`;
        report += `Taxa de conclusão: ${document.getElementById('taxaConclusao').value}\n\n`;

        // Vendas Samsung
        report += `Vendas Samsung no dia: ${document.getElementById('vendasA15').value}\n`;
        report += `A15: ${document.getElementById('vendasA15').value}\n`;
        report += `A05: ${document.getElementById('vendasA05').value}\n`;
        report += `A25: ${document.getElementById('vendasA25').value}\n`;
        report += `A35: ${document.getElementById('vendasA35').value}\n`;
        report += `A55: ${document.getElementById('vendasA55').value}\n`;
        report += `S23: ${document.getElementById('vendasS23').value}\n\n`;

        // Vendas Motorola
        report += `Vendas Motorola no dia: ${document.getElementById('vendasG34').value}\n`;
        report += `G34: ${document.getElementById('vendasG34').value}\n`;
        report += `G24: ${document.getElementById('vendasG24').value}\n`;
        report += `G54: ${document.getElementById('vendasG54').value}\n`;
        report += `G84: ${document.getElementById('vendasG84').value}\n`;
        report += `Edge40: ${document.getElementById('vendasEdge40').value}\n\n`;

        // Outros
        report += `Outros: ${document.getElementById('vendasOutros').value}\n`;
        report += `Iphone 12: ${document.getElementById('vendasIphone12').value}\n`;
        report += `Iphone 13: ${document.getElementById('vendasIphone13').value}\n\n`;

        // Motivo para 0 vendas
        report += `Razões para 0 vendas ou outras necessidades de aconselhamento e suporte de vendas: ${document.getElementById('motivoVendas').value}\n`;

        resultado.value = report;
    };
});

function gerarRelatorio() {
    // Lógica para gerar o relatório
    let relatorio = "Data: " + document.getElementById("data").innerText + "\n";
    relatorio += "Supervisor: Taynara\n";
    relatorio += "Nome da loja: Bangu\n";
    relatorio += "Gerente de loja: Fernando\n\n";
    
    // Adicione mais dados conforme necessário
    
    document.getElementById("resultado").value = relatorio;
}

function copiarRelatorio() {
    let resultado = document.getElementById("resultado");
    resultado.select();
    resultado.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy");
    alert("Relatório copiado para a área de transferência!");
}