import {Request, Response} from 'express';
import  path  from 'path';
import { fromPath } from "pdf2pic";


export function index(req: Request, res: Response):Response {

    

    let pathFile:string = path.join(__dirname,'../public/files/UTBA87.pdf') 

    const options = {
        density: 100,
        saveFilename: "untitled",
        savePath: path.join(__dirname,'../public/files'),
        format: "png",
        width: 600,
        height: 600
      };
      const storeAsImage = fromPath(pathFile, options);
      const pageToConvertAsImage = 1;
      
      storeAsImage(pageToConvertAsImage).then((resolve) => {
        console.log("Page 1 is now converted as image");
       
        return resolve;
      });
    
    return res.json('Bienvenido a mi API');
}