# GitFlow

O GitFlow é um modelo de ramificação (branching model) para o controle de versão com o Git. Ele fornece uma estrutura e um conjunto de diretrizes para gerenciar o fluxo de trabalho de desenvolvimento de software, especialmente em projetos que envolvem várias equipes e lançamentos frequentes.

### Características

O GitFlow define duas branches principais e várias branches auxiliares para controlar o desenvolvimento do software. As duas branches principais são:

- **Master**: Essa branch representa o estado de produção do software. Ela contém apenas código estável e lançamentos oficiais.
- **Develop**: Essa branch é usada para\ integração contínua. Ela é usada para desenvolver novos recursos e correções de bugs, sendo uma branch intermediária entre as branches de recurso e a branch master.

Além das branches principais, o GitFlow utiliza várias branches auxiliares para organizar o desenvolvimento. Essas branches incluem:

- **Feature branches:** Criadas a partir da branch develop, as feature branches são usadas para desenvolver novos recursos. Cada recurso é desenvolvido em uma branch separada e, uma vez concluído, é mesclado de volta para a branch develop.

- **Release branches:** Criadas a partir da branch develop, as release branches são usadas para preparar o código para um lançamento. Correções de bugs menores e ajustes podem ser feitos nessa branch antes de serem mesclados na branch master.

- **Hotfix branches:** Criadas a partir da branch master, as hotfix branches são usadas para corrigir bugs críticos em produção. Após a correção, as mudanças são mescladas tanto na branch master quanto na branch develop.

O GitFlow ajuda a manter um fluxo de trabalho estruturado, facilitando a colaboração em equipe, o desenvolvimento de recursos e a liberação de software de forma organizada.
