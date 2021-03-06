import { Controller, Get } from "routing-controllers";
import { BaseController } from "../common/base.controller";
import { UserModel } from "../models/user";

@Controller("/users")
export class UserController extends BaseController {
  constructor() {
    super();
  }

  @Get("")
  async get(): Promise<UserModel[]> {
    const user: UserModel = new UserModel();

    return [user];
  }
}
