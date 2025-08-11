export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { email, name } = req.body || {};
  return res.status(200).json({
    status: 'ok',
    endpoint: 'kyc/start',
    received: { email, name },
    referenceId: 'kyc-' + Math.random().toString(36).slice(2),
    message: 'Stubbed KYC started (assume pass in demo).'
  });
}
