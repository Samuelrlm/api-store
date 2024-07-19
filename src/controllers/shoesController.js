const listaTenis = require('../mocks/shoes-list');

const listShoes = async (req, res) => {
    const { limit } = req.query;

    const tenisList = listaTenis;

    if (limit) {
        return res.json(tenisList.slice(0, limit));
    }

    res.json(tenisList);
};

const listShoesColors = async (req, res) => {
    const { limit } = req.query;

    const tenisList = [];

    for (let i = 0; i < 5; i++) {
        tenisList.push({
            id: i,
            nome: 'Tênis Nike Revolution 6 Next Nature Masculino',
            nota: 4,
            marca: 'Nike',
            modelo: 'Casual',
            referencia: '38416711',
            preco_original: 300,
            preco_desconto: 250,
            imagem_url: 'https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png',
            cores: [
                "#6FEEFF",
                "#FF6969",
                "#5E5E5E",
                "#6D70B7"
            ],
            tamanhos: [
                39,
                40,
                41,
                42,
                43
            ],
            backgrounds : [
                "#E2E3FF",
                "#FFE8BC",
                "#FFC0BC",
                "#DEC699",
                "#E8DFCF"
            ]
        });
    }

    if (limit) {
        return res.json(tenisList.slice(0, limit));
    }

    res.json(tenisList);

};

module.exports = {
    listShoes,
    listShoesColors
};