import type { EntityModel } from "../oop";
import { BaseData } from "../oop";

interface MovieModel extends EntityModel {
  year: number;
  director: string;
  runtimeMinutes: number;
}

export class MovieRepository extends BaseData<MovieModel> {
  constructor() {
    super("Movies");
  }

  async create(payload: Omit<MovieModel, "id">): Promise<void> {
    if (payload.runtimeMinutes < 60) {
      console.log(
        `${this.name} : the runtime is too short to submit it as a movie`,
      );
      return;
    }

    this.add(payload);
  }
}
