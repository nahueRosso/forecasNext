import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const api = async (req: Request, res: Response) =>{
  const api:string = ""
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
