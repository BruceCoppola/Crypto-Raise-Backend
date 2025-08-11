export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { email } = req.body || {};
  return res.status(200).json({
    status: 'ok',
    endpoint: 'accredit/start',
    received: { email },
    referenceId: 'acc-' + Math.random().toString(36).slice(2),
    message: 'Stubbed accredited verification (assume verified in demo).'
  });
}
