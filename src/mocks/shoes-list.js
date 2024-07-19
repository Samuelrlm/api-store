const listShoes = [
    {
        id: 0,
        nome: 'K-Swiss V8 - Masculino',
        nota: 4,
        marca: 'Adidas',
        modelo: 'Casual',
        referencia: '38416711',
        preco_original: 300,
        preco_desconto: 250,
        imagem_url: 'https://i.ibb.co/XZzRvBJ/Layer-1aa-2.png',
        cores: ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'],
        tamanhos: [39, 40, 41, 42, 43],
        backgrounds: ['#E2E3FF', '#FFE8BC', '#FFC0BC', '#DEC699', '#E8DFCF']
    },
    {
        id: 1,
        nome: 'Tênis Adidas Ultraboost 22 Masculino',
        nota: 5,
        marca: 'Adidas',
        modelo: 'Running',
        referencia: '48210384',
        preco_original: 600,
        preco_desconto: 540,
        imagem_url: 'https://images.tcdn.com.br/img/img_prod/873473/tenis_adidas_ultraboost_22_1525_1_f672f0049b10805b5097ba1122d03016.png',
        cores: ['#FF5733', '#C70039', '#900C3F', '#581845'],
        tamanhos: [40, 41, 42, 43, 44],
        backgrounds: ['#F0E68C', '#FFD700', '#FF6347', '#4682B4', '#D3D3D3']
    },
    {
        id: 2,
        nome: 'Tênis Puma Flyer Runner BDP',
        nota: 4.5,
        marca: 'Puma',
        modelo: 'Running',
        referencia: '57382014',
        preco_original: 350,
        preco_desconto: 315,
        imagem_url: 'https://static.ativaesportes.com.br/public/ativaesportes/imagens/produtos/tenis-puma-flyer-runner-bdp-masculino-195060-12-6526d700cad93.png',
        cores: ['#4B0082', '#800080', '#FF00FF', '#FF1493'],
        tamanhos: [38, 39, 40, 41, 42],
        backgrounds: ['#8A2BE2', '#7FFF00', '#D2691E', '#FF4500', '#2E8B57']
    },
    {
        id: 3,
        nome: 'Tênis Asics Gel-Kayano 28',
        nota: 4.8,
        marca: 'Asics',
        modelo: 'Running',
        referencia: '64829103',
        preco_original: 700,
        preco_desconto: 630,
        imagem_url: 'https://static.ativaesportes.com.br/public/ativaesportes/imagens/produtos/tenis-puma-flyer-runner-bdp-masculino-195060-12-6526d700cad93.png',
        cores: ['#00FF00', '#ADFF2F', '#32CD32', '#7FFF00'],
        tamanhos: [41, 42, 43, 44, 45],
        backgrounds: ['#98FB98', '#00FA9A', '#00FF7F', '#2E8B57', '#3CB371']
    },
    {
        id: 4,
        nome: 'Tênis Mizuno Wave Prophecy X',
        nota: 5,
        marca: 'Mizuno',
        modelo: 'Running',
        referencia: '75849261',
        preco_original: 800,
        preco_desconto: 720,
        imagem_url: 'https://d3qoj2c6mu9s8x.cloudfront.net/Custom/Content/Products/79/46/7946237_tenis-mizuno-wave-prophecy-x-preto-masculino_z3_637626455364177897.png',
        cores: ['#FFD700', '#FFA500', '#FF8C00', '#FF4500'],
        tamanhos: [40, 41, 42, 43, 44],
        backgrounds: ['#FFD700', '#FFA500', '#FF8C00', '#FF4500', '#DAA520']
    },
    {
        id: 5,
        nome: 'Tênis New Balance 574',
        nota: 4.3,
        marca: 'New Balance',
        modelo: 'Casual',
        referencia: '29485721',
        preco_original: 500,
        preco_desconto: 450,
        imagem_url: 'https://d1ubrw5u7b0xq6.cloudfront.net/Custom/Content/Products/76/61/7661_new-balance-574ml574vm2_s1_637776787859229916.png',
        cores: ['#0000FF', '#000080', '#4169E1', '#6495ED'],
        tamanhos: [38, 39, 40, 41, 42],
        backgrounds: ['#87CEEB', '#4682B4', '#1E90FF', '#00BFFF', '#5F9EA0']
    },
    {
        id: 6,
        nome: 'Tênis Reebok Nano X1',
        nota: 4.7,
        marca: 'Reebok',
        modelo: 'Training',
        referencia: '84920175',
        preco_original: 400,
        preco_desconto: 360,
        imagem_url: 'https://images.tcdn.com.br/img/img_prod/1009791/reebok_nano_x1_especial_1061_5_c9c362c2814e149054c739e9eeadb856.png',
        cores: ['#A52A2A', '#B22222', '#DC143C', '#FF0000'],
        tamanhos: [39, 40, 41, 42, 43],
        backgrounds: ['#FA8072', '#E9967A', '#F08080', '#CD5C5C', '#8B0000']
    },
    {
        id: 7,
        nome: 'Tênis Under Armour Charged Commit 3',
        nota: 4.6,
        marca: 'Under Armour',
        modelo: 'Training',
        referencia: '39857241',
        preco_original: 450,
        preco_desconto: 405,
        imagem_url: 'https://images.novelship.com/product/under_armour_charged_commit_tr_3__black_varsity_bl_0_87071.png?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=400',
        cores: ['#FF69B4', '#FF1493', '#DB7093', '#C71585'],
        tamanhos: [40, 41, 42, 43, 44],
        backgrounds: ['#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#DB7093']
    },
    {
        id: 8,
        nome: 'Tênis Converse Chuck Taylor All Star',
        nota: 4.9,
        marca: 'Converse',
        modelo: 'Casual',
        referencia: '10293847',
        preco_original: 250,
        preco_desconto: 225,
        imagem_url: 'https://images.tcdn.com.br/img/img_prod/772596/tenis_converse_chuck_taylor_all_star_cano_alto_hi_preto_ct15640001_1929_1_648e5e1a402f160837207192daa84b27.png',
        cores: ['#FFFFFF', '#DCDCDC', '#C0C0C0', '#A9A9A9'],
        tamanhos: [38, 39, 40, 41, 42],
        backgrounds: ['#F5F5F5', '#DCDCDC', '#C0C0C0', '#A9A9A9', '#808080']
    },
    {
        id: 9,
        nome: 'Tênis Vans Old Skool',
        nota: 4.8,
        marca: 'Vans',
        modelo: 'Casual',
        referencia: '84716293',
        preco_original: 300,
        preco_desconto: 270,
        imagem_url: 'https://images.tcdn.com.br/img/img_prod/473150/tenis_vans_old_skool_preto_branco_1150_1_b0645033b74bcfe512ea82102deeb104.png',
        cores: ['#000000', '#2F4F4F', '#696969', '#808080'],
        tamanhos: [39, 40, 41, 42, 43],
        backgrounds: ['#000000', '#2F4F4F', '#696969', '#808080', '#A9A9A9']
    },
    {
        id: 10,
        nome: 'Tênis Fila Disruptor 2',
        nota: 4.5,
        marca: 'Fila',
        modelo: 'Casual',
        referencia: '57483920',
        preco_original: 320,
        preco_desconto: 288,
        imagem_url: 'https://adaptive-images.uooucdn.com.br/tr:w-1100,h-1594,c-at_max,pr-true,q-90/a152-ofyzta/pv/8a/5b/cf/6ea02fe2c355dc3ee695f6d15a.png',
        cores: ['#FF0000', '#B22222', '#8B0000', '#FF6347'],
        tamanhos: [38, 39, 40, 41, 42],
        backgrounds: ['#FF4500', '#FF6347', '#FF7F50', '#FFA07A', '#CD5C5C']
    },
    {
        id: 11,
        nome: 'Tênis Skechers Go Walk 5',
        nota: 4.9,
        marca: 'Skechers',
        modelo: 'Casual',
        referencia: '10294765',
        preco_original: 380,
        preco_desconto: 342,
        imagem_url: 'https://cdn.dooca.store/432/products/tenis-feminino-esportivo-skechers-124817-4_640x640+fill_ffffff.png?v=1712000493&webp=0',
        cores: ['#FFD700', '#DAA520', '#B8860B', '#FF8C00'],
        tamanhos: [39, 40, 41, 42, 43],
        backgrounds: ['#FFD700', '#DAA520', '#B8860B', '#FF8C00', '#FFA500']
    },
    {
        id: 12,
        nome: 'Tênis Saucony Kinvara 12',
        nota: 4.7,
        marca: 'Saucony',
        modelo: 'Running',
        referencia: '58493021',
        preco_original: 550,
        preco_desconto: 495,
        imagem_url: 'https://www.rodrigoroehniss.com.br/wp-content/uploads/2021/01/Saucony_Kinvara_12_Site-removebg-preview.png',
        cores: ['#008080', '#20B2AA', '#40E0D0', '#48D1CC'],
        tamanhos: [40, 41, 42, 43, 44],
        backgrounds: ['#AFEEEE', '#7FFFD4', '#66CDAA', '#5F9EA0', '#4682B4']
    },
    {
        id: 13,
        nome: 'Tênis Brooks Ghost 14',
        nota: 4.6,
        marca: 'Brooks',
        modelo: 'Running',
        referencia: '76230485',
        preco_original: 620,
        preco_desconto: 558,
        imagem_url: 'https://www.brooksrunning.com/on/demandware.static/-/Sites-brooks-master-catalog/default/dw7f053f2b/original/120356/120356-531-l-ghost-14-womens-cushion-running-shoe.png',
        cores: ['#8A2BE2', '#4B0082', '#6A5ACD', '#483D8B'],
        tamanhos: [41, 42, 43, 44, 45],
        backgrounds: ['#9370DB', '#8A2BE2', '#4B0082', '#6A5ACD', '#483D8B']
    },
    {
        id: 14,
        nome: 'Tênis Hoka One One Clifton 8',
        nota: 4.8,
        marca: 'Hoka One One',
        modelo: 'Running',
        referencia: '10928374',
        preco_original: 650,
        preco_desconto: 585,
        imagem_url: 'https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png',
        cores: ['#FF4500', '#FF6347', '#FF7F50', '#FF8C00'],
        tamanhos: [40, 41, 42, 43, 44],
        backgrounds: ['#FF6347', '#FF4500', '#FF7F50', '#FF8C00', '#FFD700']
    },
    {
        id: 15,
        nome: 'Tênis Nike Revolution 6 Next Nature Masculino',
        nota: 4,
        marca: 'Nike',
        modelo: 'Casual',
        referencia: '38416711',
        preco_original: 300,
        preco_desconto: 250,
        imagem_url: 'https://sportamore.com/cdn/shop/products/60457-83_006.png?v=1680751838&width=720',
        cores: ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'],
        tamanhos: [39, 40, 41, 42, 43],
        backgrounds: ['#E2E3FF', '#FFE8BC', '#FFC0BC', '#DEC699', '#E8DFCF']
    }
];

module.exports = listShoes;
