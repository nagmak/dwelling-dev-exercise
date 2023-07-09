// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const balance = await calculateBalance(req.query.cardValueWithoutSpaces);
      res.status(200).json(balance);
    } 
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}

const calculateBalance = async(cardValueWithoutSpaces: any) => {
  if (cardValueWithoutSpaces.substring(15) === '5' || cardValueWithoutSpaces.substring(15) === '2') {
    let cardNumbers = parseInt(cardValueWithoutSpaces.substring(0, 12))
    let total = 0;

    while (cardNumbers) {
        total += cardNumbers % 10;
        cardNumbers = Math.floor(cardNumbers / 10);
    }
    return total;

  } else {
    return 0;
  }
}