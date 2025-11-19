/**
 * Script para controlar a navegação em um jogo de aventura interativo
 * baseado nas classes 'passo' e 'btn-proximo'.
 */

// 1. Seleciona todos os botões que têm a classe 'btn-proximo'
const avanca = document.querySelectorAll('.btn-proximo');

// 2. Itera sobre cada botão para adicionar um evento de clique
avanca.forEach(botao => {
    // Adiciona o 'listener' de evento de clique
    // Usamos uma 'arrow function' com o parâmetro 'e' (evento)
    botao.addEventListener('click', (e) => {
        
        // --- 3. Encontra e Desativa o Passo Atual ---
        // Encontra o passo que está atualmente visível (com a classe 'ativo')
        const atual = document.querySelector('.passo.ativo');
        
        // --- 4. Determina o Próximo Passo ---
        // Pega o valor do atributo 'data-proximo' do botão que foi clicado.
        // e.currentTarget refere-se ao elemento (botão) que acionou o evento.
        const proximoId = e.currentTarget.getAttribute('data-proximo');
        
        // Cria o ID completo do próximo passo (ex: 'passo-7')
        const proximoPasso = 'passo-' + proximoId; 
        
        // Garante que o passo atual seja escondido
        if (atual) {
            atual.classList.remove('ativo');
        }
        
        // --- 5. Ativa o Próximo Passo ---
        // Encontra o novo passo pelo ID e o torna visível
        const novoPasso = document.getElementById(proximoPasso);
        if (novoPasso) {
            novoPasso.classList.add('ativo');
        } else {
            // Caso o ID do passo não seja encontrado (opcional: para debug)
            console.error('Erro: O passo com ID', proximoPasso, 'não foi encontrado.');
        }
    });
});
