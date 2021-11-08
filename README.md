# valores-reciclaveis-novo
site do projeto integrador da Univesp - 2º semestre 2021<br><br>
<b>Tecnologias utilizadas:</b><br>
Front-end: Bootstrap, Angular, TypeScript<br>
Back-End: Java, Spring<br>
Base de Dados: MySQL<br><br>

Eu como <b>desenvolvedor</b><br>
Solicito <b>a criação de 3 componentes de front end integrados a uma base de dados</b><br>
Com o propósito de <b>viabilizar a implantação da nova funcionalidade de controle de prestação de contas da AMLURB.</b>

# Cenários relativos ao uso da aplicação

<b>Dado</b> que estou na tela <b>Home</b><br>
<b>Quando</b> eu visualizar a tabela de visão geral<br>
<b>Então</b> haverá os campos “Valor Mínimo (R$ por quilo)”, “Valor Máximo (R$ por quilo)”, “Valor Médio (R$ por quilo)”, “Categoria” e “Zona” devidamente preenchidos tendo em vista os valores presentes na tabela de prestação de contas.<br>


<b>Dado</b> que eu estou na tela <b>Prestação de Contas</b><br>
<b>Quando</b> eu visualizar a tabela de prestação de contas<br>
<b>Então</b> haverá os campos “Categoria”, “Quantidade de material comercializado (kg)”, “Valor (R$)” e “Zona” devidamente preenchidos.<br>

<b>Dado</b> que eu estou no <b>Menu</b><br>
<b>Quando</b> eu clicar em <b>Home</b> ou <b>Prestação de Contas</b><br>
<b>Então</b> eu serei redirecionado às respectivas telas.<br>

<b>Dado</b> que eu estou na tela <b>Inserir Dados</b><br>
<b>Quando</b> eu preencher os campos “Categoria”, “Quantidade de material comercializado (kg)”, “Valor (R$)” e “Zona”<br>
<b>E</b> clicar em “Inserir”<br>
<b>Então</b> as tabelas presentes nas telas em Home e Prestação de Contas levarão em conta o novo dado inserido.<br>

# Itens relativos às ações do usuário
### Home
<b>Valor Mínimo</b> - Decimal (10, 2), not null<br>
<li>Corresponde ao menor valor encontrado de determinada zona e categoria dividido pela respectiva quantidade de material comercializado (kg) correspondente aos campos selecionados;</li><br>
<b>Valor Máximo</b> - Decimal (10, 2), not null<br>
<li>Corresponde ao maior valor encontrado de determinada zona e categoria dividido pela sua respectiva quantidade de material comercializado (kg) correspondente aos campos selecionados;</li><br>
<b>Valor Médio</b> - Decimal (10, 2), not null<br>
<li>Corresponde à soma dos valores de determinada zona e categoria dividida pela quantidade de material comercializado (kg) correspondente aos campos selecionados;</li><br>
<b>Categoria</b> - String (20), not null<br>
<li>Corresponde ao campo “Categoria” da tabela de prestação de contas. Não pode haver repetição de categoria por zona;</li><br>
<b>Zona</b> - String (10), not null<br>
<li>Corresponde ao campo “Zona” da tabela de prestação de contas.</li><br>

### Prestação de contas
<b>Categoria</b> - String (20), not null<br><br>
<b>Quantidade de material comercializado (kg)</b> - Decimal (10, 2), not null<br><br>
<b>Valor (R$)</b> - Decimal (10, 2), not null<br><br>
<b>Zona</b> - String (10), not null<br><br>

# Banco de dados

![image](https://user-images.githubusercontent.com/56417970/133006461-5fbb6b84-9ecb-4dac-844a-ba642bda1d5b.png)

