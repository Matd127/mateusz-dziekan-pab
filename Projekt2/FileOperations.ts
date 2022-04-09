import fs from 'fs';
import {Note} from './Models/Note'

export class FileOperations{

    public async readStorage(): Promise<void> {
        try {
            const data = await fs.promises.readFile('./storeFile.json', 'utf-8');
        } catch (err) {
            console.log(err)
        }
    }
    
    public async updateStorage(data:Note): Promise<void> {
      try {
          await fs.promises.writeFile('./storeFile.json', JSON.stringify(data));
      } catch (err) {
          console.log(err)
      }
    }
  
    
}