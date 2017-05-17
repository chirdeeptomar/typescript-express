/* routes/welcomeRoute.ts */

// Import only what we need from express
import { Router, Request, Response } from 'express';

// Assign router to the express.Router() instance
const router: Router = Router();

// The / here corresponds to the route that the WelcomeRoute
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req: Request, res: Response) => {
    res.json({greeting: 'Hello'});
});

router.get('/:name', (req: Request, res: Response) => {
    // Extract the name from the request parameters
    let { name } = req.params;

    // Greet the given name
    res.send(`Hello, ${name}`);
});

// Export the express.Router() instance to be used by server.ts
export const WelcomeRoute: Router = router;