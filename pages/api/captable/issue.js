export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { investor, shares, price, offerId } = req.body || {};
  return res.status(200).json({
    status: 'ok',
    endpoint: 'captable/issue',
    received: { investor, shares, price, offerId },
    referenceId: 'issue-' + Math.random().toString(36).slice(2),
    message: 'Stubbed book-entry issuance recorded.'
  });
}
