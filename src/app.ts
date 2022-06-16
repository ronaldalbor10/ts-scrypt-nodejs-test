import express, {Application} from "express";
import morgan from "morgan";
import IndexRoutes from './routes/index.routes';
import PostRoutes from './routes/post.routes';

export class App {
   private app: Application;
   
    

    constructor(private port?: number | string){
        this.app =  express();
        this.setings();
        this.midelware();
        this.routes();
    }

    setings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    midelware(){

        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/posts',PostRoutes);
    }

    async listen(){
       await  this.app.listen(this.app.get('port'));
       console.log('Server run on port',this.app.get('port'));
    }

}