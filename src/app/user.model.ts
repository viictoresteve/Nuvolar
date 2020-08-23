export class User {
  id: string;
  login: string;
  picture: string;
  repositories: string[];
  followers: User[];

  constructor(
    id: string,
    login?: string,
    picture?: string,
    repos?: string[],
    followers?: User[]
  ) {
    this.id = id;
    this.login = login;
    this.picture = picture;
    if (this.repositories) {
      this.repositories = repos;
    }
    if (this.followers) {
      this.followers = followers;
    }
  }
}
