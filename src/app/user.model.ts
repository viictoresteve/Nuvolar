export class User {
  id: string;
  login: string;
  picture: string;
  email: string;
  company: string;
  repositories: any;
  followers: any;
  avatar_url: string;

  constructor(
    id: string,
    login?: string,
    picture?: string,
    email?: string,
    company?: string,
    repos?: any,
    followers?: any
  ) {
    console.log('model', id, login, picture, email, company, repos, followers);

    this.id = id;
    this.login = login;
    this.picture = picture;
    this.email = email;
    this.company = company;
    if (this.repositories) {
      this.repositories = repos;
    }
    if (this.followers) {
      this.followers = followers;
    }
  }
}
