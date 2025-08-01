import Htmlicon from "../../assets/img/icone-html5.svg";
import Cssicon from "../../assets/img/icone-css3.svg";
import Javascripticon from "../../assets/img/icone-javascript.svg";
import Reacticon from "../../assets/img/icone-react.svg";
import Giticon from "../../assets/img/icone-git.svg";
import SocialDog from '../../assets/img/social-dogs.png'
import GalaxySolar from '../../assets/img/galaxysolar.png'


export const projects = [
  {
    id: 1,
    title: "Social Dogs",
    descricao:
      "Projeto desenvolvido durante o curso de React da Origamid, com o professor André Rafael. Trata-se de uma mini rede social voltada para amantes de cães, onde os usuários podem criar contas, fazer login, postar fotos dos seus cachorros, curtir publicações e comentar. A aplicação foi construída com React, utilizando práticas modernas como rotas dinâmicas, gerenciamento de estado, e integração com APIs. Ideal para treinar conceitos como autenticação, formulários, componentes reutilizáveis e responsividade.",
    image: SocialDog,
    tecnologias: [
      { name: "HTML5", icon: Htmlicon },
      { name: "CSS", icon: Cssicon },
      { name: "Javascript", icon: Javascripticon },
      { name: "React", icon: Reacticon },
      { name: "Git", icon: Giticon },
    ],
  },
  {
    id: 2,
    title: "Galaxy Solar",
    descricao:
      "Aplicação web responsiva que simula o sistema solar com foco em visualização interativa e design animado. O projeto apresenta uma representação gráfica dos planetas orbitando o Sol, utilizando animações e lógica para movimentação contínua. A interface foi pensada para ser leve, acessível e adaptável a diferentes tamanhos de tela, seguindo boas práticas de usabilidade e performance.",
    image: GalaxySolar,
    tecnologias: [
      { name: "HTML5", icon: Htmlicon },
      { name: "CSS", icon: Cssicon },
      { name: "Javascript", icon: Javascripticon },
      { name: "Git", icon: Giticon },
    ],
  },
];