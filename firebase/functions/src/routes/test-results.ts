
import { Router } from "express";
const router = Router();

const getTests = () => {
    const tests = [{
        title: "NEGATIVE",
        type: 'test',
        message: "You have been tested negative. To minimize risk you should stay at home",
        published: new Date().toISOString(),
        end: new Date().toISOString(),
    }, 
    {
        title: "NEGATIVE",
        type: 'test',
        message: "You have been tested negative. To minimize risk you should stay at home",
        published: new Date().toISOString(),
        end: new Date().toISOString(),
    },
    {
        title: "POSITIVE",
        type: 'test',
        message: "Plese follow your country orders, advisories. Your medical person will soon contact you.",
        published: new Date().toISOString(),
        end: new Date().toISOString(),
    }
    ];
    return tests
}

router.post("/", (req, res, next) => {
  res.send(getTests());
});

export default router;


