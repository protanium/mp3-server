import { join } from 'path';
import { readFile } from 'fs/promises';

export default async function handler(req, res) {
  const { name } = req.query;
  
  if (!name || !name.endsWith('.mp3')) {
    return res.status(400).json({ error: "Please provide a valid '.mp3' filename." });
  }

  const filePath = join(process.cwd(), 'mp3-files', name);

  try {
    const fileBuffer = await readFile(filePath);

    res.setHeader('Content-Type', 'audio/mpeg');
    res.send(fileBuffer);
  } catch (err) {
    res.status(404).json({ error: 'MP3 file not found.' });
  }
  
  
}
