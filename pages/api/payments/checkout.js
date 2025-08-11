export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { asset, amount, amountUSD, offerId, email } = req.body || {};
  return res.status(200).json({
    status: 'ok',
    endpoint: 'payments/checkout',
    received: { asset, amount, amountUSD, offerId, email },
    referenceId: 'pay-' + Math.random().toString(36).slice(2),
    message: 'Stubbed checkout created (use webhook to confirm).'
  });
}
