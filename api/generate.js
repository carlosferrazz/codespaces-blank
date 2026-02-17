export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  const resposta = `
🎬 Roteiro Premium NeuroProfit AI

Tema solicitado:
${prompt}

Hook Magnético:
"Se você quer transformar visualizações em dinheiro, preste atenção nisso..."

Desenvolvimento:
Mostre o problema real do público.
Entregue valor rápido.
Explique que consistência gera resultado.

Call To Action:
Siga o perfil e clique no link da bio para começar hoje.
  `;

  res.status(200).json({ result: resposta });
}
