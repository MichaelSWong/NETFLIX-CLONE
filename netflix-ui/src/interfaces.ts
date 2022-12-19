export interface ILogin {
  login: boolean;
}

export interface ISignup {
  showPassword: boolean;
}

export interface IForm {
  email: string;
  password: string;
}

export interface INavbar {
  isScrolled: boolean;
}

export interface IMovies {
  id?: number;
  name?: string;
  image?: string;
  genres?: IGenres[];
}

export interface IGenres {
  id?: number;
  name?: string;
}
