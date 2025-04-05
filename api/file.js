import { join } from 'path';
import { readFile } from 'fs/promises';

export default async function handler(req, res) {
  const { name } = req.query;
  
  if (!name || !name.endsWith('.mp3')) {
    return res.status(400).json({ error: "Please provide a valid '.mp3' filename." });
  }

  res.json({a: 'hello!'});
  
}
