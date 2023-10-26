/*
Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' 
insira a estrutura base HTML e dentro da tag 'body' inclua quatro tags vazias: h1, ul, a, ol. 
Adicione o atributo id="titulo" à tag h1, o atributo href="https://prozeducacao.com.br" à tag 'a', 
e o atributo id="lista-ordenada" à tag 'ol'. 
Na sequência, realize a conexão entre o arquivo HTML e o arquivo JavaScript.

No arquivo script.js capture os quatro elementos criados, e use a propriedade .innerText 
para adicionar conteúdo textual aos elementos 'h1' e 'a', e a propriedade .innerHTML 
para adicionar três itens simples na lista não ordenada, 
e três itens com links para outros sites na lista ordenada.  
*/
let elementoTitulo = document.querySelector("h1");
elementoTitulo.innerText = "Desafio Proposto Aulas de Dom inner.Text e inner.HTML";
console.log(elementoTitulo);

let elementoAncora = document.querySelector("a");
elementoAncora.innerText = "Desafio Proposto Aulas de Dom elemento textual Ancora";
console.log(elementoAncora);

let elementoListaNaoOrdenada = document.querySelector("ul");
elementoListaNaoOrdenada.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
`
console.log(elementoListaNaoOrdenada);

let elementiListaOrdenada = document.querySelector("ol");
elementiListaOrdenada.innerHTML = `
<li><a href="https://www.google.com">Google</a></li>
<li><a href="https://www.facebook.com">Facebook</a></li>
<li><a href="https://www.amazon.com">Amazon</a></li>
`;
console.log(elementiListaOrdenada);