const listShoes = async (req, res) => {
    const { limit } = req.query;

    const tenisList = [];

    for (let i = 0; i < 15; i++) {
        tenisList.push({
            id: i,
            nome: 'K-Swiss V8 - Masculino',
            preco_original: 200,
            preco_desconto: 100,
            imagem_url: 'https://i.ibb.co/XZzRvBJ/Layer-1aa-2.png'
        });
    }

    if (limit) {
        return res.json(tenisList.slice(0, limit));
    }

    res.json(tenisList);
};

module.exports = {
    listShoes
};