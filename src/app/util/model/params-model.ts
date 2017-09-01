/**
 * @Author SongJiuHua
 * Created on 2017/2/21
 * @Description
 */

/**
 * 参数对象
 */
export class Params{

  private _key : string;

  private _value : string;

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }


  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }
}
