 import Title from './components/Title';
import Description from './components/Description';
import Products from './components/Products';

const products = [
  {
    id: 1,
    title: "Nike Air Max 270",
    description: "O Nike Air Max 270 combina conforto e estilo com a maior unidade Air já criada para calcanhar, proporcionando uma sensação de andar nas nuvens.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrmbuPcesvYAZfzcLvJnAeri7mQTI2p7zuQ&s"
  },
  {
    id: 2,
    title: "Adidas Ultraboost 21",
    description: "O Adidas Ultraboost 21 oferece um retorno de energia incrível a cada passo, com um design moderno e confortável para corridas longas.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-XE1I5A1mqfP0BXeHKwPhM5i27GZdTpWvw&s"
  },
  {
    id: 3,
    title: "Puma RS-X",
    description: "O Puma RS-X é conhecido pelo seu design retrô e combina cores vibrantes com conforto para o dia a dia.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG-rzfOu0KBEH_02hU3oALQG19yYh-bG_8Qg&s"
  },
  {
    id: 4,
    title: "Asics Gel-Kayano 28",
    description: "O Asics Gel-Kayano 28 é ideal para quem procura estabilidade e suporte em corridas de longa distância.",
    imageUrl: "https://imgcentauro-a.akamaihd.net/1366x1366/M12OPZ05.jpg"
  },
  {
    id: 5,
    title: "New Balance 574",
    description: "O New Balance 574 é um clássico que combina estilo atemporal com conforto, perfeito para uso casual.",
    imageUrl: "https://images.tcdn.com.br/img/img_prod/1028923/tenis_new_balance_574_masculino_preto_7639_1_f3db4b9194c957f90a8a9cccc6cd7a19.jpg"
  },
  {
    id: 6,
    title: "Reebok Club C 85",
    description: "O Reebok Club C 85 é um tênis icônico com um visual clean e minimalista, ideal para qualquer ocasião.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5EpDeV7H4IKWt1w5uohv6ab5KSknebwGDQ&s"
  },
  {
    id: 7,
    title: "Converse Chuck Taylor All Star",
    description: "O Converse Chuck Taylor All Star é um clássico duradouro, conhecido por seu design versátil e atemporal.",
    imageUrl: "https://converse.com.br/media/catalog/product/c/t/ct00040001_a_107x1_8.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897"
  },
  {
    id: 8,
    title: "Vans Old Skool",
    description: "O Vans Old Skool é um tênis de skate clássico, com o icônico sidestripe e uma construção durável.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJu3rjCny2sJ1XLbPbg8Lo7jUfDpscx8F4ug&s"
  },
  {
    id: 9,
    title: "Fila Disruptor II",
    description: "O Fila Disruptor II é um tênis robusto com um design retrô e solado tratorado, perfeito para um look ousado.",
    imageUrl: "https://a-static.mlcdn.com.br/450x450/tenis-fila-disruptor-ii-lab/netshoes/d29-6026-080-44/d96f22605e97b31a7f2e3b38be2cb710.jpeg"
  },
  {
    id: 10,
    title: "Mizuno Wave Rider 25",
    description: "O Mizuno Wave Rider 25 oferece amortecimento e responsividade, ideal para corredores que buscam conforto em longas distâncias.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh57gd3u8VWfvTex5LAPMqsOErtqxkP4QlZg&s"
  },
  {
    id: 11,
    title: "Under Armour HOVR Phantom 2",
    description: "O Under Armour HOVR Phantom 2 combina tecnologia avançada com conforto, proporcionando uma sensação de gravidade zero.",
    imageUrl: "https://underarmourbr.vtexassets.com/arquivos/ids/179086-800-800?v=637493410132000000&width=800&height=800&aspect=true"
  },
  {
    id: 12,
    title: "Saucony Jazz Original",
    description: "O Saucony Jazz Original é um tênis retro inspirado nos modelos de corrida, com um design vintage e confortável.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ5F_vfIiCRJNqW6RLw4x2f3slu68ceBWkEA&s"
  },
  {
    id: 13,
    title: "Nike Air Force 1",
    description: "O Nike Air Force 1 é um ícone do estilo urbano, com seu design robusto e versatilidade para qualquer look.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEM58C8Iq63dC0EZ_coHZcTQhT6AfNdjJwlQ&s"
  },
  {
    id: 14,
    title: "Adidas NMD R1",
    description: "O Adidas NMD R1 combina estilo contemporâneo com conforto, sendo perfeito para quem busca um visual moderno.",
    imageUrl: "https://cdn.dooca.store/296/products/gz7925-1-footwear-photography-side-lateral-center-view-white_1080x1080+fill_ffffff.jpg?v=1675990739&webp=0"
  },
  {
    id: 15,
    title: "Jordan 1 Retro High",
    description: "O Jordan 1 Retro High é um tênis lendário, popularizado por Michael Jordan, que continua sendo um símbolo de estilo e performance.",
    imageUrl: "https://cdn-images.farfetch-contents.com/19/85/64/13/19856413_50801110_600.jpg"
  },
  {
    id: 16,
    title: "Nike React Infinity Run Flyknit 2",
    description: "O Nike React Infinity Run Flyknit 2 oferece suporte e conforto para corridas longas, com um design leve e respirável.",
    imageUrl: "https://images.tcdn.com.br/img/img_prod/1028923/nike_tenis_running_react_infinity_run_flyknit_2_4997_1_8c9acf48161c4f3ce213ff2b6429db6e.jpg"
  },
  {
    id: 17,
    title: "New Balance 990v5",
    description: "O New Balance 990v5 é um tênis premium que combina qualidade, conforto e estilo atemporal.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMn3jFa74mBBrmBqq3o138Z0AEBPnIEiPmRg&s"
  },
  {
    id: 18,
    title: "Puma Suede Classic",
    description: "O Puma Suede Classic é um ícone do estilo streetwear, conhecido por seu design elegante e durabilidade.",
    imageUrl: "https://cdn.dooca.store/296/products/22-photoroom_1080x1080+fill_ffffff.png?v=1710970598&webp=0"
  },
  {
    id: 19,
    title: "Vans Sk8-Hi",
    description: "O Vans Sk8-Hi é um tênis de cano alto clássico, projetado para oferecer suporte e estilo tanto para o skate quanto para o dia a dia.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9eou1Q1QBMR3K001tCvUAVELbr9zbMAi6A&s"
  },
  {
    id: 20,
    title: "Onitsuka Tiger Mexico 66",
    description: "O Onitsuka Tiger Mexico 66 é um tênis retro, famoso por seu design simples e elegante, perfeito para qualquer ocasião.",
    imageUrl: "https://cdn-images.farfetch-contents.com/21/93/29/49/21932949_51725762_1000.jpg"
  }
];

function App() {
  return (
    <div>
      <Title>Tela de Produtos</Title>
      <Description>Confira abaixo a nossa lista de tênis:</Description>
      <Products products={products} />
    </div>
  );
}
export default App;