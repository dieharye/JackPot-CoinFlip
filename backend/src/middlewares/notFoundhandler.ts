import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors';
const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    const error = new CustomError(404, 'Not Found');
    next()
}

export default notFoundHandler