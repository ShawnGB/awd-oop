export interface BaseEntity {
  id: number;
  title: string;
}

interface EntityRepository<T extends BaseEntity> {
  getAll: () => Promise<T[]>;
  getById: (id: number) => Promise<T | undefined>;
  create: ({}: Omit<T, "id">) => Promise<void>;
}

export abstract class StoreReposity<T extends BaseEntity>
  implements EntityRepository<T>
{
  protected name: string;
  private entities: T[] = [];

  constructor(name: string, seed?: T[]) {
    this.name = name;
    if (seed) this.entities = seed;
  }

  async getAll(): Promise<T[]> {
    return this.entities;
  }

  async getById(id: number): Promise<T | undefined> {
    const entity = this.entities.find((item: T) => item.id === id);
    return entity;
  }

  protected add(payload: Omit<T, "id">): void {
    this.entities.push({ ...payload, id: this.entities.length + 1 } as T);
  }

  abstract create({}: Omit<T, "id">): Promise<void>;
}
