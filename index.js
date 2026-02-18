import { gerarLinkMP } from './payment.js';
console.log("Gerando link de pagamento...");

gerarLinkMP("Plano VIP - Mensal", 29.90)
    .then(([link, id]) => {
        console.log("✅ Link gerado com sucesso!");
        console.log("🔗 URL para pagar:", link);
        console.log("🆔 ID da transação:", id);
    })
    .catch(err => {
        console.error("❌ Erro ao gerar:", err);
    });
