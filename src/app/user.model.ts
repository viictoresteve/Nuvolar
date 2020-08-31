export class User {
  id: string;
  login: string;
  name: string;
  avatar_url: string;
  email: string;
  company: string;
  repositories: any;
  followers: any;
  public_repos: number;
  followerNumber: number;
  repositoriesNumber: number;

  constructor(
    id: string,
    login?: string,
    avatar_url?: string,
    name?: string,
    email?: string,
    company?: string,
    repos?: any,
    followers?: any,
    followerNumber?: number,
    repositoriesNumber?: number
  ) {
    // Initializing variables
    this.id = id;
    this.login = login;
    this.name = name;
    this.avatar_url = avatar_url;
    this.email = email ? email : 'No public email';
    this.company = company ? company : 'No public company';
    this.followerNumber = followerNumber ? followerNumber : 0;
    this.repositoriesNumber = repositoriesNumber ? repositoriesNumber : 0;
    this.repositories = repos ? repos : null;
    this.followers = followers ? followers : null;
    // if (repos) {
    //   this.repositories = repos;
    // }
    // if (followers) {
    //   this.followers = followers;
    // }
  }
}
