import express, { Request, Response } from 'express';

interface MyCustomData {
  message: string;
}

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response<MyCustomData>) => {
  const responseData: MyCustomData = {
    message: 'Hello, TypeScript with Express!',
  };

  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
