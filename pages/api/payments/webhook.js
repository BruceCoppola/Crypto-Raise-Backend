export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { txid, confirmations } = req.body || {};
  return res.status(200).json({
    status: 'ok',
    endpoint: 'payments/webhook',
    txid,
    confirmations: confirmations ?? 12,
    referenceId: 'paywh-' + Math.random().toString(36).slice(2),
    message: 'Stubbed payment confirmed.'
  });
}
