import { MercadoPagoConfig, Preference } from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();

const client = new MercadoPagoConfig({ 
    accessToken: process.env.MP_ACCESS_TOKEN 
});

export async function gerarLinkMP(titulo, preco) {
    const preference = new Preference(client);

    const body = {
        items: [
            {
                title: titulo,
                quantity: 1,
                unit_price: preco,
                currency_id: 'BRL',
            }
        ],
        payment_methods: {
            excluded_payment_types: [{ id: 'ticket' }],
            installments: 1
        }
    };

    try {
        const result = await preference.create({ body });
        
       
        return [result.init_point, result.id];
    } catch (error) {
        console.error("Erro ao gerar preferência:", error);
        throw error;
    }
}
