# Hortifood

Trabalho para a disciplina SCC0219 - Introdução ao Desenvolvimento Web 2023

| NUSP          | Nome                           |
| ------------- | ------------------------------ |
| 12694007      | Susy Costa Dutra               |
| 10691331      | Theo da Mota dos Santos        |
| 12345678      | Yvis Freire Silva Santos       |

## Introdução
### Diagrama de Navegação

Deve ter Login de usuário e adm
Dados do adm -> name, id, phone, email
Cliente -> name, id, address, phone, email
Produtos -> name, id, photo, description, price, quantity (in stock), quantity sold.

Venda -> Produtos são selecionados,quantidade é escolhida, e inclusa no carrinho.São comprados com cartão de crédito(any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
Admin pode adicionar, alterar, remover e ler novos produtos.

#1 milestone
A navigation diagram
Mockups for all major system screens. Your mockup pages are static snapshots of your application at different points. Create HTML5/CSS3 files for, at least, the main app screen and 2 others.

Requirements: The requirements are given in the assignment, but you have to add any new requirements needed by your particular store implementation.
Project Description: Describe how your project implements the functionality in the requirements. Diagrams can help a lot here.
Comments About the Code: Any comment you may want to add to help understand your code. This is good programming practice.
Test Plan: Text describing the tests that will be performed. If an automatic test tool/framework is used (ex: Selenium, JUnit, Spock), the code for the tests can be used.
Test Results: Text describing the test results. If an automatic test tool/framework is used, its output can be used.
Build Procedures: A step-by-step guide to run your code. You should start telling how to install whatever software you need, then how to download/build your program, and finally how to set up the environment to run it. Imagine that someone installing will just follow these commands (nothing more).
Problems: List any major problems you had.
Comments: Any comments you wish to add.


Layout Suggestions for Screens
These are just suggestions. Feel free to use other combinations:
Homepage with a description of services/products offered and login area (any type of user) 
If the user is a customer: 
Screen with actions: buy a product, edit your account. 
If you are an administrator
Screen with actions: register administrators/customers/products etc.) in a menu
Product Inventory Management Screen (Add, Update, Delete, Consult)
