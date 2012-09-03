Arachnocube
===========

* GIT no Windows: http://code.google.com/p/msysgit/downloads/list?q=full+installer+official+git
* Ferramenta do Github para gerenciar projetos no Windows: http://windows.github.com/

* Link do projeto: https://github.com/w2schmitt/Arachnocube

---
Não esquecer trocar na Unity: Edit->Project Settings->Editor, e trocar o 'Version Control Mode' para "meta files".
Mais info em: http://docs.unity3d.com/Documentation/Manual/ExternalVersionControlSystemSupport.html


---
Tutorial Rápido de GIT:

 * Criar usuário em http://github.com
 * Seguir passos de instalação em http://help.github.com/set-up-git-redirect
 * Executar os comandos a seguir:
  $ git clone git://github.com/w2schmitt/Arachnocube.git

  $ cd Arachnocube
  
  $ git remote add origin git@github.com:w2schmitt/Arachnocube.git
 * Para atualizar para a mais nova versão:
  $ git pull
 * Para adicionar um novo arquivo:
  $ git add arquivo
 * Quando tiver realizado alterações e decidir mantê-las:
  $ git commit -a -m "breve descrição das suas modificações"
 Para enviar as mudanças ao servidor:
  $ git push --all origin