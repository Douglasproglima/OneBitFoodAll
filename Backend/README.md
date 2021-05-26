<p align="center">
  <img alt="Logo DevRise Week" title="#douglasproglima-apps" src="https://rubyonrails.org/images/rails-logo.svg" width="250px" />
</p>

<h1 align="center">
🚀 API OneBitFoodProgLima 🚀
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Douglasproglima/OneBitFoodAll">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Douglasproglima/OneBitFoodAll">

  <a href="https://github.com/Douglasproglima/OneBitFoodAll/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Douglasproglima/OneBitFoodAll">
  </a>

  <a href="https://github.com/Douglasproglima/FindHouses/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Douglasproglima/OneBitFoodAll">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-executando">Executando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-executando">Instalando e Configurando PostgreSQL</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-executando">Comandos Rails</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>
<br>

## 💻 Projeto

Esse projeto foi desenvolvido com o objetivo de me atualizar com a nova versão do Rails 6 e Reactjs usando o Nextjs.

Neste projeto, encontrasse uma API feita em Ruby on Rails 6 e a parte Web feita em Nextjs.

## :school_satchel: Aprendizados
### Backend
- Atualização das features do Rails 6
- O uso da Gem jbuilder e como criar Partials
- Versionsamento de API no Rails 6

## 🎨 Layout

Você pode encontrar o layout nesse link do [Figma](https://www.figma.com/file/ixKXvWvJzSr8E8nBNwJ0Ow/DevRiseWeek---FindHouses?node-id=20%3A29)

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Ruby](https://www.ruby-lang.org/pt/)
- [Rails](https://rubyonrails.org/)
- [PostgreSQL](https://www.postgresql.org/)

\* Para mais detalhes, veja o **[Gemfile](./GemFile)**

## :notebook: Executando

```bash
# Clone este repositório
$ git clone https://github.com/Douglasproglima/OneBitFoodAll.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd OneBitFoodAll/Backend

# Instale as dependências
$ bundle install

# Configure o arquivo config/database.yml
$ default: &default
  adapter: postgresql
  encoding: unicode
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  host: localhost
  port: 5432
  username: usuario_do_banco
  password: senha_do_banco

```
---

## :notebook: Instalando e Configurando PostgreSQL
---

```bash
#Antes de criar o projeto instale e configure o postgresql no WSL
#https://docs.microsoft.com/pt-br/windows/wsl/tutorials/wsl-database

#Abra o terminal do WSL (ou seja, Ubuntu 18.04).
#Atualize os pacotes do Ubuntu: 
$ sudo apt update

#Depois que os pacotes forem atualizados, instale o PostgreSQL (e o pacote -contrib que tem alguns utilitários úteis) com: 
$  sudo apt install postgresql postgresql-contrib

#Confirme a instalação e obtenha o número de versão: 
$  psql --version

#Há três comandos que você precisará saber quando o PostgreSQL estiver instalado:

#para verificar o status do banco de dados:
$  sudo service postgresql status 
  
para iniciar a execução do banco de dados:
$  sudo service postgresql start

#Parar/Reiniciar interromper a execução do banco de dados:
$  sudo service postgresql stop
$  sudo service postgresql restart

#Usuário admin padrão, postgres, precisa de uma senha atribuída para se conectar a um banco de dados.
#Para definir uma senha, Insira o comando: 
$  sudo passwd postgres

#Alterar o arquivo pg_hba.conf
$  cd /etc/postgresql/10/main#
$  sudo su
$  nano pg_hba.conf

#ALTERAR
$ Database administrative login by Unix domain socket
$ local   all   postgres    md5

#PARA

#Database administrative login by Unix domain socket
$ local  all   postgres   peer

#Você deverá inserir sua nova senha.
#Feche e abra novamente o terminal e inicie o serviço do PostgreSQL.

# Conecte-se ao serviço Postgres e abra o shell do psql: 
$  sudo -u postgres psql

# Usar o banco de dados
$  \c "OneBitFood_development";

#Listar Bancos:
$  \l;

#Listar tabelas
$  \dt;
```
---

## :notebook: Comandos Rails

```bash
# Clone este repositório
$ git clone https://github.com/Douglasproglima/OneBitFoodAll.git

# Criar os BD
$ rails db:create

# Rodando as Migrations
$ rails db:migrate

# Rodando os dados Fakes através do arquivo seed
$ rails db:seed

# Servidor de Aplicação
$ rails s -p 3001

```
---

Feito com ❤️ por Douglas Lima <img src="https://raw.githubusercontent.com/Douglasproglima/douglasproglima/master/gifs/Hi.gif" width="30px"></h2> [Entre em contato!](https://www.linkedin.com/in/douglasproglima)