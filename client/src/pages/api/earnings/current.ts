export default function handler(req, res) {
  // Example logic for week earnings
  res.status(200).json({
    startDate: "2025-06-24T00:00:00+03:00",
    endDate: "2025-06-30T23:59:59+03:00",
    earnings: 512.30,
  });
}