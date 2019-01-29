export class GetRequest {
  constructor ();
  getCityname(): string;
  setCityname(a: string): void;
  toObject(): GetRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    cityname: string;
  }
}

export class GetResponse {
  constructor ();
  getWeather(): Weather;
  setWeather(a: Weather): void;
  toObject(): GetResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    weather: Weather;
  }
}

export class Weather {
  constructor ();
  getId(): number;
  setId(a: number): void;
  getCityname(): string;
  setCityname(a: string): void;
  getTempmax(): number;
  setTempmax(a: number): void;
  getTempmin(): number;
  setTempmin(a: number): void;
  getWind(): number;
  setWind(a: number): void;
  getType(): string;
  setType(a: string): void;
  getDescription(): string;
  setDescription(a: string): void;
  toObject(): Weather.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Weather;
}

export namespace Weather {
  export type AsObject = {
    id: number;
    cityname: string;
    tempmax: number;
    tempmin: number;
    wind: number;
    type: string;
    description: string;
  }
}

