import { body } from "express-validator";
import { validationResult } from "express-validator";

const validationResultExpress = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    next()
}

export const bugMiddlewares = [
    body('user', 'User id incorrect').isDecimal(),
    body('project', 'Project id incorrect').isDecimal(),
    body('description', 'Description could not be empty').not().isEmpty(),
    validationResultExpress
]