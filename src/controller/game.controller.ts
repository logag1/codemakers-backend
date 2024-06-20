import { Request, Response } from 'express';
import { Users } from '../models/user';
import { getRandomId } from '../utilities/random';

export namespace GameController {
  export async function submit(req: Request, res: Response) {
    const { clickCount, nickname, studentId } = req.body;

    const user = await Users.create({
      studentId: String(`${studentId}_${nickname}`), // 10100_엄준식
      userId: getRandomId(),
      clickCount: Number(clickCount)
    });

    return res.status(200).json({ success: true });
  }

  export async function getRanking(req: Request, res: Response) {

    const user = await Users.find({});

    return res.status(200).json({
      success: true,
      result: user
    });
  }
}