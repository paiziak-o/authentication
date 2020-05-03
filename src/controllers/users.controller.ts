import * as Express from "express";

const signin = async (req: Express.Request, res: Express.Response) => {
  try {
    const { login, password } = req.body;
    // await provider.login(login, password);

    res.json({
      user: {
        access_token: 123,
        refresh_token: 123,
        token_type: 123,
      }
    });

  } catch(error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
}
const signup = async (req: Express.Request, res: Express.Response) => {
  try {
    const { firstName, lastName, attributes } = req.body;
    // await provider.signup(firstName, lastName, attributes);

    res.json({
    });

  } catch(error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    })
  }
}

const currentUser = async (req: Express.Request, res: Express.Response) => {
  try {
    // await provider.currentUser(login, password);
    res.json([
      {
        id: 1,
        name: 'Alex',
      }
    ]);

  } catch(error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    })
  }
}

export default {
  signin,
  signup,
  currentUser,
};