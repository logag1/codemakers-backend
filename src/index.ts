import express, { Express, Router } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

/**
 * Express App 핸들링
 */
export default class App {
  private _app: Express;

  constructor(
    private readonly _PORT: number,
    private readonly _mongoUrl: string,
    private _gameRouter: Router
  ) {
    this._app = express();
    this._setMiddleWares();
    this._mountRouter(this._gameRouter);
    this._connectMongoDB();

    mongoose.connection.on("open", async () => {
      console.log('Mongo DB ready');
    });
  }

  public listen(callback: () => void) {
    this._app.listen(this._PORT, callback);
  }

  private _setMiddleWares(): void {
    this._app.use(cors());
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: true }));
    this._app.use(express.static(path.join(__dirname, '..', '..', 'react-front/build')));
  }

  private _connectMongoDB() {
    mongoose.connect(this._mongoUrl);
  }

  private _mountRouter(gameRouter: Router) {
    this._app.use('/api', gameRouter);
    this._app.get('*', (req, res) =>
      res.sendFile(path.join(__dirname, '..', '..', 'react-front/build/index.html'))
    );
  }
}