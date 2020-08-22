export class User {
  id: string
  login: string;
  picture: string;

  constructor(user: any){
    this.id = user.id;
    this.login = user.login;
    this.picture = user.avatar_url;
  }
}
