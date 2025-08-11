export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { investor, shares, price, offerId, txRef } = req.body || {};
  const filename = `CompliancePack_${(investor || 'investor').replace(/[^a-z0-9]/gi, '_')}.pdf`;
  return res.status(200).json({
    status: 'ok',
    endpoint: 'documents/compliance-pack',
    received: { investor, shares, price, offerId, txRef },
    downloadUrl: `https://example.com/downloads/${filename}`, // placeholder
    referenceId: 'doc-' + Math.random().toString(36).slice(2),
    message: 'Stubbed compliance pack link. Replace with real PDF service.'
  });
}
