export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { event } = req.body || {};
  return res.status(200).json({
    status: 'ok',
    endpoint: 'kyc/webhook',
    event: event || 'KYC_PASSED',
    referenceId: 'kycwh-' + Math.random().toString(36).slice(2)
  });
}
