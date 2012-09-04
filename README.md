Arachnocube 
=========
<h5> Link do Projeto: https://github.com/w2schmitt/Arachnocube </h5>

---
Importante: Não esquecer trocar na Unity: Edit->Project Settings->Editor, e trocar o 'Version Control Mode' para "meta files".
Mais info em: http://docs.unity3d.com/Documentation/Manual/ExternalVersionControlSystemSupport.html

---

<b>Ferramentas:</b>
  - GIT no Windows: http://code.google.com/p/msysgit/downloads/list?q=full+installer+official+git
  - Ferramenta do Github para gerenciar projetos no Windows: http://windows.github.com/
<br>

<b>Documentação:</b>
  - Diagrama de Classes: http://www.lucidchart.com/invitations/accept/5042f211-74f0-40e9-8b8f-34e80ad3924f 
  - Tarefas no Asana: https://app.asana.com/0/1557233908885/1557233908885

<br>
<b>Tutorial Rápido de GIT (irrelevante se for utilizar o gerenciador gráfico do github):</b>

 * Criar usuário em http://github.com <br>
 * Seguir passos de instalação em http://help.github.com/set-up-git-redirect
 * Executar os comandos a seguir: <br>
  $ git clone git://github.com/w2schmitt/Arachnocube.git<br>
  $ cd Arachnocube <br>
  $ git remote add origin git@github.com:w2schmitt/Arachnocube.git <br>
 * Para atualizar para a mais nova versão: <br>
  $ git pull
 * Para adicionar um novo arquivo: <br>
  $ git add arquivo
 * Quando tiver realizado alterações e decidir mantê-las: <br>
  $ git commit -a -m "breve descrição das suas modificações"
 Para enviar as mudanças ao servidor: <br>
  $ git push --all origin