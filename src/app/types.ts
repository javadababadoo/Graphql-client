export type Device = {
  id: number;
  name: string;
  description: string;
  type: string;
}
export type Query = {
    allDevices: Device[];
}
