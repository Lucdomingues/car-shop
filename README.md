<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Lucdomingues/LucTunes/edit/main/README.md">
    <img src="https://github.com/othneildrew/Best-README-Template/raw/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Car Shop</h3>

  <p align="center">
    Projeto baseado em uma api para uma concessionária de veículos!
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#construído-com">Construído com</a></li>
      </ul>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#contribuindo">Contribuindo</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>



<!-- SOBRE O PROJETO -->
# Sobre o projeto

## Projeto Car Shop

Neste projeto, foi aplicado os princípios de Programação Orientada a Objetos (POO) para a construção de uma API com CRUD para gerenciar uma concessionária de veículos. Isso foi feito utilizando o banco de dados MongoDB através do framework do Mongoose.

<details>
  <summary><strong>🐳 Rodando no Docker vs Localmente</strong></summary>

  ## 👉 Com Docker

  **⚠ Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

  > :information_source: Renomeie o arquivo `src/server.example.ts`, retirando o `.example`, e descomente o conteúdo do mesmo. Rode os serviços `app-car-shop` e `mongodb` com o comando `docker-compose up -d`.

  - Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
  - A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

  > :information_source: Use o comando `docker exec -it car_shop bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
  
  - **⚠ Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 
  - **⚠ Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.
  - **⚠ Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  <img src="public/remote-container.png" width="800px" >
</details>

<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>



### Construído com
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="50" height="50"/>
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescript" width="50" height="50"/>
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" alt="docker" width="50" height="50"/>
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="java-script" width="50" height="50"/>
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" alt="node" width="50" height="50"/>
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" alt="git" width="50" height="50"/>
<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>



<!-- COMEÇANDO -->
## Começando

Para fazer um **COPY** desse projeto em sua máquina localmente, siga às etapas abaixo.

### Instalação

1. Clone o repositório

  - Use o comando: 
   ```sh
   git clone git@github.com:Lucdomingues/car-shop.git
   ```
  2. Instale as dependências
   ```sh
   npm install
   ```
  3. Crie uma branch a partir da branch `master`
  - Verifique que você está na branch `master`
    ```sh
    git branch
    ```
  - Se não estiver, mude para a branch `master`
    ```sh
    git checkout master
    ```
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    ```sh
    git checkout -b nome-da-branch
    ```
  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    ```sh
    git status
    ```
  - Adicione o novo arquivo ao _stage_ do Git
    ```sh
    git add .
    git status
    ```
  - Faça o `commit` inicial
    ```sh
    git commit -m '[feat]new-feature'
    git status
    ```
<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>

<!-- CONTRIBUINDO -->
## Contribuindo

As contribuições são o que torna a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer são **muito apreciadas**.

Se você tiver uma sugestão para melhorar isso, bifurque o repositório e crie uma solicitação pull. Você também pode simplesmente abrir um problema com a tag "melhoria".
Não se esqueça de dar uma estrela ao projeto! Obrigado novamente!

1. Faça um Fork do projeto
2. Crie sua branch (`git checkout -b feature/newFeature`)
3. Commit suas mudanças (`git commit -m '[feat]Add some newFeature'`)
4. Dê um push em sua branch (`git push origin feature/newFeature`)
5. Abra um Pull Request

<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>

<!-- CONTATO -->
## Contato

EMAIL - lojalucc@outlook.com

LINKEDIN - [https://www.linkedin.com/in/lucas-domingues-developer/](https://www.linkedin.com/in/lucas-domingues-developer/)

<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Lucdomingues/car-shop.svg?style=for-the-badge
[contributors-url]: https://github.com/Lucdomingues/car-shop/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/lucas-domingues-developer/
[product-screenshot]: images/screenshot.png
